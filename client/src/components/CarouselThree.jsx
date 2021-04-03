// Source: https://www.positronx.io/react-responsive-carousel-tutorial/

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../assets/CarouselThree.css';

export default function CarouselComponent() {
  return (
    <div>
    <div>      <p>FEATURED FOOD/WINE PAIRINGS</p>
    </div>
    
    <div class="carousel-wrapper">
      
      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        showThumbs={false}
      >
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
      </div>
  );
}
