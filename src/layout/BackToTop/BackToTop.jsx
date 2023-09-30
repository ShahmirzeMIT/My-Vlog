import React, { useEffect, useState } from 'react'
import {RxDoubleArrowUp} from 'react-icons/rx'
import '../../assets/scss/backtoTop.scss'
const BackToTop = ({href}) => {
	const [backToTopButton,setBackToTopButton]=useState(false)
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(window.scrollY>400){
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
		<a href={`#${href}`}><RxDoubleArrowUp className='backAnime'/></a>
			
		</button>
	)
	}</div>
  )
}

export default BackToTop