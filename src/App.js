import React ,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from "react-particles-js";
import API from './components/API/Clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';

const particlesOption = {
  particles: {
    number :{
      value : 70,
      density :{
        enable : true,
        value_area : 600
      }
    }
  },
  'interactivity':{
    'events' : {
      'onhover'  :{
        'enable' : true,
        'mode' : 'repulse'
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin"
    };
  }

  calculateFaceLocation = dataInput => {
    console.log("testes");
    const clarifaiFace =
      dataInput.outputs[0].data.regions[0].region_info.bounding_box;
    //console.log(clarifaiFace);
    const img = document.getElementById("inputImage");
    //console.log(img)
    let width = Number(img.width);
    let height = Number(img.height);
    console.log(height, width); //Height = 441;
    //width = 500;
    /**
    top_row: 0.15593769,
    left_col: 0.32949424,
    bottom_row: 0.6229454,
    right_col: 0.63938797 width -
   */
    return {
      left_col: width * clarifaiFace.left_col,
      top_row: height * clarifaiFace.top_row,
      right_col: width - clarifaiFace.right_col * width,
      bottom_row: height - clarifaiFace.bottom_row * height
    };
  };

  borderBox = border => {
    //console.log(border);
    this.setState({ box: border });
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };
  onButtonSubmit = () => {
    console.log("Click");
    this.setState({ imageUrl: this.state.input });
    API.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(response => this.borderBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
    //console.log(response)
    //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);

    //return this.borderBox(this.calculateFaceLocation(response));

    // top_row: 0.15593769,
    // left_col: 0.32949424,
    // bottom_row: 0.6229454,
    // right_col: 0.63938797
  };
  onRouteChange = () => {
    this.setState({ route: "home" });
  };
  backToSignin = () =>{
    this.setState({route : 'signin'});
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Logo />
        {this.state.route !== "signin" ? (
          <Navigation backToSignin={this.backToSignin} />
        ) : (
          <div></div>
        )}
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageBorder={this.state.box}
              imageSource={this.state.imageUrl}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
