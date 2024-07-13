import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import men from './../assets/men.png';
import women from '../assets/women.png'
import beg from './../assets/beg.png';
import './Hero.css'

 function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true ,
        autoplaySpeed : 3000
      };

  return (
    <div>
        <Slider {...settings}>
            <div>
                <img className='h-full w-full'src={men}></img>
            </div>
           <div>
            <img className='h-full w-full'src={women}/>
           </div>
           <div>
            <img className='h-full w-full'src={beg}/>
           </div>

        </Slider>
    </div>
  )
}

export default Hero