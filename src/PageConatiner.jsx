import React from 'react'
import { MyNavBar } from './layout/navbar/navbar'

export const PageConatiner = ({children}) => {
  return (
    <div>
	<header>
	<MyNavBar/>
	</header>
	<main>{children}</main>
	<footer></footer>
    </div>
  )
}
