import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import '../../assets/scss/backtoTop.scss'
const BackToTop = () => {
	const [backToTopButton,setBackToTopButton]=useState(false)
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(window.scrollY>600){
				setBackToTopButton(true)
			}
			else{
				setBackToTopButton(false)
			}
		})
	},[])
	const scrollUp=()=>{
		windows.scrollTo({
			top:300,
			behavior:"smooth"
		})
	}
  return (
    <div>{
	backToTopButton &&(
		<button
		className='backToTop'
		
		>
		<a href="#up"><AiOutlineArrowUp className='backAnime'/></a>
			
		</button>
	)
	}</div>
  )
}

export default BackToTop