import React from 'react';

const ImageURL = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='flex flex-column pt4 items-center w-100'>
            <div className='flannel pv3 br3 w-50-l w-100'>
                <input className='f4 ba bw1 pa3 w-70 br3-ns br--left-ns' type='text' placeholder='Paste Image URL' onChange={onInputChange}/>
                <button className='f4 ba bw1 pv3 w-20 br3-ns br--right-ns btnImg pointer'
                onClick={onButtonSubmit}>Go</button>
            </div>
        </div>
    )
}

export default ImageURL;