import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import ImageRank from './components/ImageRank/ImageRank';
import ImageURL from './components/ImageURL/ImageURL';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './dark-mode/theme';
import { GlobalStyles } from './dark-mode/global';

const app = new Clarifai.App({
  apiKey: '4536246d27b942f4bc39353b2773a750'
 });

const particlesOptions = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.2,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      recBox: {},
      route: 'SignIn',
      isSignedIn: false,
      theme: 'Light'
    }
  }
  
  calculateFaceLocation = (data) => {
    const claFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('faceRecImg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: claFace.left_col * width,
      topRow: claFace.top_row * width,
      rightCol: width - (claFace.right_col * width),
      bottomRow: height - (claFace.bottom_row * height)
    }
  }

  // The function that toggles between themes
  toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (this.state.theme === 'Light') {
      this.setState({theme: 'Night'});
    // otherwise, it should be light
    } else {
      this.setState({theme: 'Light'});
    }
  }

  displayFaceRec = (recBox) => {
    this.setState({recBox: recBox});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(response => this.displayFaceRec(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'SignOut') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, imageUrl, route, recBox, theme} = this.state;
    return (
      <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Particles className='particles' params={particlesOptions}/>
        {/* <img id='lower-left' className='h4' src='https://thumbs.gfycat.com/MistySeriousAmbushbug-max-1mb.gif' /> */}
        <Navigation toggleTheme={this.toggleTheme} theme={theme} isSignedIn={isSignedIn} route={route} onRouteChange={this.onRouteChange} />
        <div className='pt6 w-100'>
          { route ==='home' ?
            <div className='flex flex-column items-center w-100'>
              <ImageRank />
              <ImageURL onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <ImageContainer recBox={recBox} imageUrl={imageUrl} />
              <Footer/>
            </div>
            : (
              route === 'SignIn' || route === 'SignOut' ? 
              <div className='flex flex-column items-center w-100'>
                <SignIn onRouteChange = {this.onRouteChange}/>
                <Footer/>
              </div>
              :
              <div className='flex flex-column items-center w-100'>
                <Register onRouteChange = {this.onRouteChange}/>
                <Footer/>
              </div>
            )
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
