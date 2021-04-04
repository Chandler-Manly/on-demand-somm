// Source: https://www.positronx.io/react-responsive-carousel-tutorial/

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../assets/CarouselTwo.css';

export default function CarouselComponent() {
  return (
    <div>
<div>    <p>FEATURED VINEYARDS</p></div>

    <div class="carousel-wrapper">

      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        showThumbs={false}

      >
        <div>
          <img alt="Wine5" src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2QlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60" />
        </div>

        <div>
          <img alt="Wine6" src="https://images.unsplash.com/photo-1459663148042-6d8cb9340411?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjB0byUyMHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine7" src="https://images.unsplash.com/photo-1567539549213-cc1697632146?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHRvJTIwdGFibGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine8" src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGZhcm0lMjB0byUyMHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine9" src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRhc3RpbmclMjBub3Rlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine10" src="https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHRhc3RpbmclMjBub3Rlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine11" src="https://images.unsplash.com/photo-1570339012089-0e2dcfbb4439?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNlbGxhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>

      </Carousel>
      </div>
      </div>
  );
}
