import React from 'react'
import Hero from "../../../components/hero/hero";
import hero1 from "../../../assets/imges/hero1.jpg"
import "./styles/NewsStyle.css"

import LEARN1 from "../../../assets/imges/LEARN1.jpg"
import SchoolNewsCard from '../components/SchoolNewsCard/SchoolNewsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function News() {
  AOS.init();
  return (
    <>
    <Hero
    heroimg={hero1}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut.consectetur adipisicing elit. Dolorum nulla aut"
    heroh1="News"
    heroa="EXPLORE COURSES"
    />
    
    
  
      <section className="schoolNews news">
     
         <div className="SchoolNewsCard-container">
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Education for tomowrrow's leader"
          Calendar= "mars 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Enroll Your Kids This Summer to get 30% off"
          Calendar= "jun 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Education for tomowrrow's leader"
          Calendar= "mars 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Enroll Your Kids This Summer to get 30% off"
          Calendar= "jun 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Education for tomowrrow's leader"
          Calendar= "mars 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          />
          <SchoolNewsCard 
          imgcard ={LEARN1}
          title = "Enroll Your Kids This Summer to get 30% off"
          Calendar= "jun 10,2023"
          person ="Admin"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut. "
          
          />
    

          
         </div>
         <div className="btns" data-aos="fade-right">
             <button className='btn-news'>1</button>
             <button className='btn-news'>2</button>
             <button className='btn-news'>3</button>
             <button className='btn-news'>4</button>
          </div>
      </section>
     
    
    
    </>
  )
}
