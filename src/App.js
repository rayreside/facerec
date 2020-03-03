import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import ImageCount from './components/ImageCount/ImageCount';
import ImageURL from './components/ImageURL/ImageURL';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './dark-mode/theme';
import { GlobalStyles } from './dark-mode/global';

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

const initialState = {
  input: '',
  imageUrl: '',
  recBox: {},
  route: 'SignIn',
  isSignedIn: false,
  theme: 'Light',
  currentUser: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
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
      theme: 'Light',
      currentUser: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
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

  onImgSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://afternoon-springs-61219.herokuapp.com/imageurl', {
      method: 'post',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://afternoon-springs-61219.herokuapp.com/image', {
          method: 'put',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: this.state.currentUser.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(prevState => ({
            currentUser: {
              ...prevState.currentUser, //spread operator used to update one key in object
              entries: count
            }
        }))
        })
        .catch(err => console.log(err))
      }
      this.displayFaceRec(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'SignOut') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  logUser = (user) => {
    this.setState({currentUser: {
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }

  render() {
    const {isSignedIn, imageUrl, route, recBox, theme, currentUser} = this.state;
    return (
      <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Particles className='particles' params={particlesOptions}/>
        <Navigation toggleTheme={this.toggleTheme} theme={theme} isSignedIn={isSignedIn} route={route} onRouteChange={this.onRouteChange} />
        <div className='pt6 w-100'>
          { route ==='home' ?
            <div className='flex flex-column items-center w-100'>
              <ImageCount name={currentUser.name} entries={currentUser.entries} />
              <ImageURL onInputChange={this.onInputChange} onImgSubmit={this.onImgSubmit}/>
              <ImageContainer recBox={recBox} imageUrl={imageUrl} />
              <Footer/>
            </div>
            : (
              route === 'SignIn' || route === 'SignOut' ? 
              <div className='flex flex-column items-center w-100'>
                <SignIn onRouteChange = {this.onRouteChange} logUser = {this.logUser}/>
                <Footer/>
              </div>
              :
              <div className='flex flex-column items-center w-100'>
                <Register onRouteChange = {this.onRouteChange} logUser = {this.logUser}/>
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
