import React from 'react'
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import Twiter from "../assets/image/twiter.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import '../assets/scss/componentContact.scss'
const MyContact = ({text}) => {
	
	const MyIcons = [
		{
		  src: Linkedin,
		  text: "Linkedin",
		},
		{
		  src: Reddit,
		  text: "Reddit",
		},
		{
		  src: Twiter,
		  text: "Twiter",
		},
	   ];
  return (
    <div className='container'>
          <div className="social d-flex justify-content-between my-5">
            <div className="social-icons">
              <div className="myicon d-flex justify-content-between">
                {MyIcons.map((elem, index) => (
                  <div key={index} className={elem.text}>
                    <a href="#">
                      <img src={elem.src} alt={elem.text} />
                      {elem.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="swipe">
              <a href={`#${text}`}>
                <span>
                  <AiOutlineArrowDown className='bottom' /> SWIPE DOWN
                </span>
              </a>
            </div>
          </div>

    </div >
  )
}

export default MyContact