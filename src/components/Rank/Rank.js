import React from 'react';
import './Rank.css';

const Rank = () => {
    return(
        <div className='flex flex-column justify-center'>
            <div className='f3'>
                <p className='yBG ma0 ph3'>{'Ray, your current rank is: '}</p>
            </div>
            <div className='round white f1 mv2'>
                <div className='round-inner'>
                    {'#5'}
                </div>
            </div>
        </div>
    )
}

export default Rank;