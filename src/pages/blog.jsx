import React from 'react'
import { PageConatiner } from '../PageConatiner'
import BlogCard from '../components/blogCard'
import ChatLogo from '../assets/image/chat.jpg'
import '../assets/scss/blog.scss';
import BackToTop from '../layout/BackToTop/BackToTop';
import MyContact from '../components/contact';
const Blog = () => {
  return (
	<PageConatiner>
		<div className="container d-flex justify-content-between align-items-center myChat" id='top'>
		<div className="left">
			<h1>You Can Read My Artile!</h1>
		</div>
		<div className="right">
			<img src={ChatLogo} alt="" />
		</div>
			
		</div>
		<div className="container">
		<MyContact text="down"/>
		</div>
		<div className="container" id="down">
		
		<BlogCard title="React" text="  With supporting text below as a natural lead-in to additional content.
		shfuygsdufidsjfudshfuydsgfgdhsfuhsdyfahusdgyfgsdytftwe7egisidofegwf7w"/>
		<BlogCard title="Angular" text="  With supporting text below as a natural lead-in to additional content.
		shfuygsdufidsjfudshfuydsgfgdhsfuhsdyfahusdgyfgsdytftwe7egisidofegwf7w"/>
		<BlogCard title="Next" text="  With supporting text below as a natural lead-in to additional content.
		shfuygsdufidsjfudshfuydsgfgdhsfuhsdyfahusdgyfgsdytftwe7egisidofegwf7w"/>
		<BackToTop href="top"/>
		</div>
	</PageConatiner>
   
  )
}

export default Blog