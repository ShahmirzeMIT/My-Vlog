import React from 'react'
import { MyNavBar } from './layout/navbar/navbar'
import Footer from './layout/footer/footer'

export const PageConatiner = ({children}) => {
  return (
    <div>
	<header>
	<MyNavBar/>
	</header>
	<main>{children}</main>
	<footer>
		<Footer/>
	</footer>
    </div>
  )
}
