import React from 'react';
import '../assets/BackgroundVideo.css';

const BackgroundVideo = () => {
  const videoSource = "https://res.cloudinary.com/dygk00sc0/video/upload/v1617323035/on-demand-somm_gexuuv.mp4"

  return (
    <div className="background-video">
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type="video/mp4" />
      </video>
        </div>  
  )
}

export default BackgroundVideo