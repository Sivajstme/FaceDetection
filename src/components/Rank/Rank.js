import React from 'react';

const Rank = ({name , entry}) =>{

    return (
    <div className="mb0">
        <div className="white f3">
            {name}, Your current entry count is...
        </div>
            <div className="white f1">{entry}</div>
    </div>
    );
};

export default Rank;