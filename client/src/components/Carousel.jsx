// Source: https://www.positronx.io/react-responsive-carousel-tutorial/

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../assets/Carousel.css';

export default function CarouselComponent() {
  return (
    <div class="carousel-wrapper">
      <Carousel
        showArrows
        centerMode
        infiniteLoop
        autoPlay
        interval
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
          <img alt="Wine9"
            src="https://images.unsplash.com/photo-1596142332133-327e2a0ff006?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
"
          />
        </div>
        <div>
          <img alt="Wine10"
            src="https://images.unsplash.com/photo-1567590997610-cca4b1fd9027?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
"
          />
        </div>
        <div>
          <img alt="Wine11"
            src="https://images.unsplash.com/photo-1573062337052-54ad1468bb5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
"
          />
        </div>
        <div>
          <img alt="Wine12"
            src="https://images.unsplash.com/photo-1567072629554-20e689de2400?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
"
          />
        </div>
        <div>
          <img alt="Wine13" src="https://images.unsplash.com/photo-1603229663670-fcd42046959f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbmV5YXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
      </Carousel>
    </div>
  );
}
