import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = (props) =>{
    return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputImage' src={props.imageSource} alt = '' width ='500px' height='auto'/>
                <div className='bounding-box' style={{
                    top: props.imageBorder.top_row, left: props.imageBorder.left_col,
                                                        right: props.imageBorder.right_col, bottom: props.imageBorder.bottom_row
                                                    
                                                    }}></div>
                </div>
            </div>
            /*top_row: 0.15593769,
            props.imageSource.left_col: 0.32949424,
            props.imageSource.bottom_row: 0.6229454,
             props.imageSource.right_col: */
            ) 
}

export default FaceRecognition;