import React from 'react'
import { PageConatiner } from '../PageConatiner'
import '../assets/scss/news.scss'
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import Twiter from "../assets/image/twiter.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Fade } from 'react-reveal';
import MyContact from '../components/contact';
const News = () => {

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
    <PageConatiner>
      <div>
       <div className="title">
        <div className="container">
          <h1>Are You Aware of It ?</h1>
        </div>
        
       </div>
      </div>
      
      <MyContact text="red"/>
    </PageConatiner>
    
  )
}

export default News