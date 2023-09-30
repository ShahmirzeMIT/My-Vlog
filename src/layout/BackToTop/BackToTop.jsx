import React, { useEffect, useState } from 'react'
import {RxDoubleArrowUp} from 'react-icons/rx'
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
		<a href="#up"><RxDoubleArrowUp className='backAnime'/></a>
			
		</button>
	)
	}</div>
  )
}

export default BackToTop