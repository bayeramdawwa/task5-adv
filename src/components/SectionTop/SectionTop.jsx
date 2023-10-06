import React from 'react'
import "./SectionTopStyle.css"
export default function SectionTop(props) {
  return (
    <>
    <h1 className="sectitlle" data-aos="fade-right">
        {props.sectitlle}
    </h1>
    <p className="secdesc" data-aos="fade-left">
        {props.secdesc}
    </p>
    </>
  )
}
