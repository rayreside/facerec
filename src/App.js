import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import Navigation from './components/Navigation/Navigation.js';
import Rank from './components/Rank/Rank.js';
import Image from './components/Image/Image.js';
import FaceRec from './components/FaceRec/FaceRec.js';
import Particles from 'react-particles-js';

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
      isSignedIn: false
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
    const {isSignedIn, imageUrl, route, recBox} = this.state;
    return (
      <div className="App" id="particles-js">
        <Particles className='particles' params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} route={route} onRouteChange={this.onRouteChange} />
        { route ==='home' ?
          <div className='mainContent'>
            <Rank />
            <Image onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRec recBox={recBox} imageUrl={imageUrl} />
          </div>
          : (
            route === 'SignIn' || route === 'SignOut' ?
            <SignIn onRouteChange = {this.onRouteChange}/>
            :
            <Register onRouteChange = {this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
