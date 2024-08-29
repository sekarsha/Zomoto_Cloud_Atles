import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import Cart_item from './Components/Cart_item.jsx'
import Filterpage from './Components/Filterpage.jsx'
import Nav_bar from './Components/Nav_bar.jsx'
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Filter_slider from './Components/Filter_slider.jsx'
import Pra from './Components/Pra.jsx'
import Cart_details from './Components/Cart_details.jsx'
import Reg_form from './Components/Reg_form.jsx'
import Payment from './Components/Payment.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
)
