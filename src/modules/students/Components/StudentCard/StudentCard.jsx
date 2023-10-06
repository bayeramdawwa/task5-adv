import React from 'react'
import "./StudentCardStyle.css"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
export default function StudentCard(props) {
  return (
 
        <div className='StudentCard' data-aos="fade-right">
    <div className="cardIMG" >
        <img src={props.img} alt="" />
        
    </div>
    <p className="detail">Name: <span>{props.name}</span></p>
        <p className="detail" >Age: <span>{props.age} </span></p>
        <p className="detail">Address: <span>{props.address}</span></p>
        <p className="detail">Phone: <span>{props.phone}</span></p>
        <p className="detail">Email: <span>{props.email}</span></p>
        <div className="social">
       {props.facebook && <a className='socail' href={props.facebook}> <FaFacebookF/></a>}
      { props.insta && <a className='socail' href={props.insta}> <FaTwitter/></a>}
       {props.x && <a className='socail' href={props.x}> <FaLinkedinIn/></a>}
        </div>
        <a href="#" className="showMore">Show More  Info</a>
</div>
  )
}
