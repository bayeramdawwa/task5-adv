import React from 'react'
import "../Styles/CourseCardStyle.css"
import {BsBook} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
export default function CourseCard(props) {
  return (
    <div className='CourseCard'>
        <div className="cardIMG">
            <img src={props.img} alt="" />
        </div>
        <div className="cardcontent">
        <div className="cardContentHead">
            <p className="lessonNum"><BsBook /> {props.num} Lesson</p>
            <p className="Rate"><AiFillStar/> {props.rate}</p>
        </div>
        <div className="cardinfo">
            <h3 className="title">{props.title}</h3>
            <p className="desc">{props.desc}</p>
        </div>
        <div className="cardContentend">
            <p className="price">$ {props.price}</p>
            <a className="more"> Learn More</a>
        </div>
        </div>
    </div>
  )
}
