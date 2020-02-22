import React from 'react';

const ImageURL = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='flex flex-column pt4 items-center w-100'>
            <div className='flannel pv3 br3-ns w-60-l w-80-m w-100'>
                <input className='f4 bt bb bl bw1 b--near-white pa3 w-70 br3 br--left' type='text' placeholder='Paste Image URL' onChange={onInputChange}/>
                <button className='f4 bt bb br bw1 b--near-white pv3 w-20 br3 br--right btnImg pointer'
                onClick={onButtonSubmit}>Go</button>
            </div>
        </div>
    )
}

export default ImageURL;