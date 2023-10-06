import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./heroStyle.css";

export default function Hero(props) {
  AOS.init();
  return (
    
    <div className='HERO'>
        <img src={props.heroimg} alt="" className="heroIMG" />
        <div className="content"   >
            <p className="heroP"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{props.herop}</p>
            <h1 className="heroH1"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{props.heroh1}</h1>
            <p className="heroP"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{props.herop1}</p>
            <a href="#" className="heroLink" data-aos="fade-right" >{props.heroa}</a>
        </div>
    </div>
  )
}
