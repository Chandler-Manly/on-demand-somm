// Source: https://www.positronx.io/react-responsive-carousel-tutorial/

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../assets/CarouselOne.css';

export default function CarouselComponent() {
  return (
    <div>
    <div><p>FEATURED WINES</p></div>
    <div class="carousel-wrapper">
      
      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        showThumbs={false}

      >
        <div>
          <img alt="Wine1" src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMHdpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img alt="Wine2"
            src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60
"
          />
        </div>
        <div>
          <img alt="Wine3"
            src="https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60
"
          />
        </div>
        <div>
          <img alt="Wine4" src="https://images.unsplash.com/photo-1601925228316-1225f01caa12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
      </Carousel>
      </div>
      </div>
  );
}
