import React from 'react'
import './ViodePlay.css'
import video from '../../assets/Myviode.mp4'

const ViodePlay = () => {
  return (
    <div className='Viode-play'>
        <video src={video}></video>
    </div>
  )
}

export default ViodePlay