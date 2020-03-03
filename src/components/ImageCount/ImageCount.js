import React from 'react';
import './ImageCount.css';

const ImageCount = ({ name, entries }) => {
    return(
        <div>
            <div className='f3'>
                <p className='yBG ma0 ph3'>{`${name}, your current entry count is: `}</p>
            </div>
            <div className='round white f1 mv2'>
                <div className='round-inner'>
                    {`#${entries}`}
                </div>
            </div>
        </div>
    )
}

export default ImageCount;