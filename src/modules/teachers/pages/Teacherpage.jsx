import React, { useEffect } from 'react'
import Hero from "../../../components/hero/hero";
import "./styles/TeacherStyles.css"
import LEARN2 from "../../../assets/imges/teachers.png"
import AOS from 'aos';
import TeamCard from '../../../components/TeamCard/TeamCard';
import { fetchteachers } from '../Store/slice/teacher.slice'
import { useDispatch, useSelector } from 'react-redux';
export default function Teacherpage() {
  AOS.init();
  const data = useSelector((state) => state.teachers.data);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchteachers());
   
  }, []);
  return (
    <>
    <Hero
    heroimg={LEARN2}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Team"
  
    />

      <section className="team">
     
        <div className="teamcard-container">
        {data.map((i , index)=>[

            <TeamCard 
        
            img={i.img}
            name={i.name}
            jop={i.jop}
            info={i.info}
            facebook={i.social[0].facebook}
            insta={i.social[0].insta}
            x={i.social[0].x}
            />
        ])
       
        }
        
          
        </div>
      
</section>
    
    
    </>
  )
}
