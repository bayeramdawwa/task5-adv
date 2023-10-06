import React, { useEffect } from 'react'
import Hero from "../../../components/hero/hero";
import "./styles/StudentStyles.css"
import LEARN2 from "../../../assets/imges/LEARN2.jpg"
import AOS from 'aos';
import StudentCard from '../Components/StudentCard/StudentCard';
import { fetchstudents } from '../Store/slice/student.slice'
import { useDispatch, useSelector } from 'react-redux';
export default function Studentpage() {
  AOS.init();
  const data = useSelector((state) => state.students.data);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchstudents());
   
  }, []);
  return (
    <>
    <Hero
    heroimg={LEARN2}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="Our Student"
  
    />

      <section className="team">
     
        <div className="teamcard-container">
        {data.map((i , index)=>[

            <StudentCard 
        
            img={i.img}
            name={i.name}
            age={i.age}
            address={i.address}
            phone={i.phone}
            email={i.email}
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
