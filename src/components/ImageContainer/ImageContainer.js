import React from 'react';
import './ImageContainer.css';

const ImageContainer= ({ imageUrl, recBox }) => {
    return(
        <div className='mt4 max-w-xl mx-auto flex justify-center'>
            <div className='relative inline-block'>
                <img className='br3-ns' id='faceRecImg' alt='' src={imageUrl} />
                <div className='absolute bounding-box br2' style={{top: recBox.topRow, right: recBox.rightCol, bottom: recBox.bottomRow, left: recBox.leftCol}}></div>
            </div>
        </div>
    )
}

export default ImageContainer;