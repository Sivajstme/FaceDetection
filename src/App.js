import React ,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from "react-particles-js";

const particlesOption = {
  particles: {
    number :{
      value : 70,
      density :{
        enable : true,
        value_area : 800
      }
    }
  }

}

class App extends Component {


  render() {
    return(
      <div className="App">
          <Particles className = 'particles'
            params={particlesOption}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    )
  };
}

export default App;
