import React from 'react';
import '../assets/BackgroundVideoTwo.css'

const BackgroundVideoTwo = () => {
  const videoSourceTwo = "https://res.cloudinary.com/dygk00sc0/video/upload/v1617375403/ondemandsomm_backgroundvideo2_ydvcej.mp4"

  return (
    <div className="background-video-two-container">
      
      <div className="video-header"><h3>OUR STORY</h3></div>
      <div className="background-video-two">
        <video autoPlay="autoplay" loop="loop" muted>
          <source src={videoSourceTwo} type="video/mp4" />
        </video>
        </div> 
        </div>  
  )
}

export default BackgroundVideoTwo