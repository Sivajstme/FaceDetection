import React from 'react';

const Rank = (props) =>{

    return (
        <div className='mb0'>
            <div className='white f3'>
                {`${props.name}, Your current entry count is...`}
                {console.log(props)}
            </div>
            <div className = 'white f1'>
                {props.entries}
            </div>
        </div>
    );
}

export default Rank;