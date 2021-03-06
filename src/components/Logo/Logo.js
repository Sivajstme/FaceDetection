import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain1.jpg';
import './Logo.css';

const Logo = () =>{
    return (
        <div className='ma4 mt0 mv2'> 
            <Tilt className= "Tilt br2 shadow-2" options = {{max : 55}} style = {{height : 150, width : 150}}>
                <div className="Tilt-inner pa3 dib"> 
                    <img style = {{'paddingTop': '9px' }} src={brain} alt='Brain' ></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;