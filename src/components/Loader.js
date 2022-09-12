import React from 'react';
import '../styles/Loader.scss';

const Loading = () => {
  return (
    <div className='loader-container'>
      <div className='loader'></div>
      <p className='loader__text'>Loading...</p>
    </div>
  )
}

export default Loading;