import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <CssBaseline/>
  <App />
 </BrowserRouter> 
  </>

   

)
