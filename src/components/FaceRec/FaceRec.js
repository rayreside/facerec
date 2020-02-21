import React from 'react';
import './FaceRec.css';

const FaceRec= ({ imageUrl, recBox }) => {
    return(
        <div className='imgContainer flex justify-center ma4'>
            <div className='absolute mt2'>
                <img className='br3' id='faceRecImg' alt='' src={imageUrl} />
                <div className='bounding-box br3' style={{top: recBox.topRow, right: recBox.rightCol, bottom: recBox.bottomRow, left: recBox.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRec;