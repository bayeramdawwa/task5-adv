
import Hero from "../../../components/hero/hero";
import hero1 from "../../../assets/imges/online-courses.jpg"
import "./styles/HomepageStyles.css"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourseCard from '../components/CourseCard/CourseCard';
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from '../Store/slice/data.slice';
export default function Courses() {
  AOS.init();
  const data = useSelector((state) => state.courses.data);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

 

   
  return (
    <>
    <Hero
    heroimg={hero1}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Courses"
    
    />
     <section className="courses">
    

        <div className="CourseCard-container" data-aos="fade-right">
        {data.map((i , index)=>[

          
          <CourseCard 
           img={i.img}
           num= {i.numL}
           rate={i.star}
           title={i.title}
           desc={i.desc}
           price={i.price}

          />
        ])}
   
        </div>
    
      </section>


    
    
    </>
  )
}
