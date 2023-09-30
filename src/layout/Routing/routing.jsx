import {React ,lazy,Suspense	} from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../../components/contact'
const  News=lazy(()=>import('../../pages/news'))
const  Home=lazy(()=>import('../../pages/home'))
const  Blog=lazy(()=>import('../../pages/blog'))
const  Game=lazy(()=>import('../../pages/game'))
const Routing = () => {
	const LoadingFallback = () => (
		<div style={{ textAlign: 'center', padding: '20px', fontSize: '20px' }}>
		  Loading...
		</div>
	   );
  return (
	<Routes>
      <Route element={<Suspense fallback={<LoadingFallback />}><Home /></Suspense>} path='/' />
      <Route element={<Suspense fallback={<LoadingFallback />}><News /></Suspense>} path='/news' />
      <Route element={<Suspense fallback={<LoadingFallback />}><Blog /></Suspense>} path='/blog' />
      <Route element={<Suspense fallback={<LoadingFallback />}><Game /></Suspense>} path='/game' />
    	</Routes>
  )
}

export default Routing