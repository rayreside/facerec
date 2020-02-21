import React from 'react';
import './Image.css';

const Image = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='flex flex-column justify-center'>
            <div className='flex justify-center'>
                <p className='yBG f3 ph3'>
                    {'Paste Image URL:'}
                    {/* [画像の URL を貼り付け] */}
                </p>
            </div>
            <div className='flex justify-center br3-ns'>
                <div className='flannel flex justify-center w-50-l w-100 pv3 br3'>
                    <input className='f4 bn pa3 w-60 br2-ns br--left-ns' type='tex' onChange={onInputChange}/>
                    <button className='btnImg f4 pv3 ba bw1 bg-animate pointer w-20 br2-ns br--right-ns'
                    onClick={onButtonSubmit}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Image;