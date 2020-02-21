import React from 'react';
import './Rank.css';

const Rank = () => {
    return(
        <div>
            <div className='f3 center'>
                <p className='yBG mv0 ph3'>{'Ray, your current rank is: '}</p>
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