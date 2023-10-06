import React from "react";
import "./styles/HomeNavStyle.css";
import { BsQuestionCircle, BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaAlignJustify } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [show, setShow] = useState(false);


  const controlNavbar = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }



  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, []);

  function top() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className="navbar">
      <div className={`headernav  ${show && 'none'}`}>
        <div className="contact">
          <p><BsQuestionCircle />Have a questions </p>
          <p><BsFillTelephoneFill />10 20 123 357 </p>
          <p><BsMailbox2 />info@mydomin.com </p>
        </div>
        <div className="account">
          <a className="accountLINK" href="">log in</a>
          <a className="accountLINK" href="">Register</a>
        </div>
      </div>
      <div className={`fixcednav  ${show && 'navback' || navbarOpen && 'navback'}`}>
        <h3 className="logo">Learner</h3>
        <ul className={`${navbarOpen ? ' linkmenu show' : 'linkmenu '}`}>
          
          <li>
            <Link to="task5-adv" className="link"
              onClick={() => { top() }}
            >Home
            </Link>
          </li>
          
          <li><button className="btn-dropdown">Dropdown <BiSolidDownArrow /></button></li>
          
          <li><Link to="/task5-adv/courses" className="link" onClick={() => { top() }}>Courses</Link></li>
          
          <li><Link to="/task5-adv/news" className="link"
            onClick={() => { top() }}
          >News</Link></li>
          
          <li><Link to="/task5-adv/Teacher" className="link" onClick={() => { top() }} >Teachers</Link></li>
          
          <li><Link to="/task5-adv/about" className="link" onClick={() => { top() }}
          
          >About</Link></li>

          <li><Link to="/task5-adv/student" className="link" onClick={() => { top() }}>Students</Link></li>
        </ul>

        <a href="" className="enrol">ENROLL NOW</a>
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}><FaAlignJustify /></button>
      </div>
    </div>
  );
}
