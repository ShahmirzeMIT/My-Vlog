import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../../components/card';
import Contact from '../../pages/contact';
import  { AuthProvider } from '../../context/AuthContext';
import BigNews from '../../pages/bignews';
import StarWars from '../../pages/just as learn/starwars';
import NotFound from '../../pages/404';
import People from '../../pages/just as learn/people';
import { PageConatiner } from '../../PageConatiner';
import Planets from '../../pages/just as learn/planets';
const News = lazy(() => import('../../pages/news'));
const Home = lazy(() => import('../../pages/home'));
const Blog = lazy(() => import('../../pages/blog'));
const Game = lazy(() => import('../../pages/game'));

const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '20px', fontSize: '20px' }}>
    Loading...
  </div>
);

const Routing = () => {
	
  return (
      <Routes>
        <Route element={<PageConatiner/>}>
            <Route element={<Suspense fallback={<LoadingFallback />}><Home /></Suspense>} path='/' />
            <Route element={<Suspense fallback={<LoadingFallback />}><News /></Suspense>} path='/news' />
            <Route element={<Suspense fallback={<LoadingFallback />}><Blog /></Suspense>} path='/blog' />
            <Route element={<Suspense fallback={<LoadingFallback />}><Game /></Suspense>} path='/game' />
            <Route element={<Suspense fallback={<LoadingFallback />}><BigNews /></Suspense>} path='/bignews' />
            <Route element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} path='/contact' />
            <Route element={<Suspense fallback={<LoadingFallback />}><NotFound/></Suspense>} path='*' />
            <Route path='/starwars' element={<StarWars/>}> 
               <Route element={<Suspense fallback={<LoadingFallback />}><People /></Suspense>} path='people' />
               <Route element={<Suspense fallback={<LoadingFallback />}><Planets /></Suspense>} path='planets' />
            </Route> 
        </Route>
        

       
        
       
	 </Routes>
  );
}

export default Routing;
