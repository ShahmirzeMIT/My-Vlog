import React from 'react'
import { PageConatiner } from '../PageConatiner'
import '../assets/scss/contact.scss'
import Fade from 'react-reveal/Fade';
import TextField from '@mui/material/TextField';
import ContactImg from '../assets/image/contact.png'
import Button from '@mui/material/Button';
import MyContact from '../components/contact';
const Contact = () => {
  return (
	<>
		<div className="myContact d-flex justify-content-between  align-items-center ">
			<div className="container">
				<div className="left">
					<h1><Fade right cascade>Contact</Fade> </h1></div>
			</div>
			
		</div>
		<div className="container"><MyContact text="cont"/></div>
		<div className="container d-flex justify-content-between gap-4 my-5 myHit" id="cont">
			<Fade right>
			<div className="left">
				<img src={ContactImg} alt="" />
			</div>
			</Fade>
			<Fade left>
			<div className="right">
			<form method="post"> 
			<TextField fullWidth label="Name"  className='my-3'/>
			<TextField fullWidth label="Email"  className='my-3'/>
			<TextField fullWidth label="Text" sx={{height:'50px !important'}} className='my-3'/>
			<Button variant="contained">Contained</Button>
			</form>
			</div>
			</Fade>
		</div >
		<div className="container d-flex justify-content-around flex-wrap my-4">
			<div className="email">
			<Fade right cascade><span style={{fontWeight:"bold"}}>Email: </span>sahilmitweb@gmail.com</Fade>
			</div>
			<div className="email">
			<Fade left cascade><span style={{fontWeight:"bold"}}>Phone: </span>+994556984546</Fade>
			</div>
			<div className="email">
			<Fade bottom cascade><span style={{fontWeight:"bold"}}>Location: </span>20 Yanvar Moskva avenue, 52</Fade>
			</div>
		</div>
	</>
    
  )
}

export default Contact