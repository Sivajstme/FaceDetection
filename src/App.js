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
        value_area : 600
      }
    }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input : ''
    }
  }

  onInputChange = (e) =>{
    console.log(e.target.value);
  }
  onButtonSubmit = ()=>{
    console.log('Click')
  }
  render() {
    return(
      <div className="App">
          <Particles className = 'particles'
            params={particlesOption}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit = {this.onButtonSubmit}/>
        {/* <FaceRecognition /> */}
      </div>
    )
  };
}

export default App;
