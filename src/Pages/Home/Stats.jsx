import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className='stats'>
            <div className='stat one'>
                <h1 className='big'>5K</h1>
                <h1 className='small'>Jobs</h1>
            </div>
            <div className='stat two'>
                <h1 className='big'>2K</h1>
                <h1 className='small'>Placements</h1>
            </div>
            <div className='stat three'>
                <h1 className='big'>4.7</h1>
                <h1 className='small'>Rating</h1>
            </div>
        </div>
  )
}

export default Stats