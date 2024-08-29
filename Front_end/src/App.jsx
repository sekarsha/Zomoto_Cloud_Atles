import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home.jsx'
import Filterpage from './Components/Filterpage.jsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import j_data from "../src/data.json"
import Detail from './Components/Detail.jsx'
import Cart_item from './Components/Cart_item.jsx'
import Cart_details from './Components/Cart_details.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pra from './Components/Pra.jsx'
import Reg_form from './Components/Reg_form.jsx'
import Login from './Components/Login.jsx'

function App() {

  const [data, setdata] = useState([])
  const [click, setclick] = useState([])
  const [cart_data, setcart_data] = useState([])
  const [cart_count, setcart_count] = useState()




  useEffect(() => {

    setdata(j_data)

  }, [])






  return (
    <BrowserRouter>

      <Routes>




        <Route path="/" element={<Home  data={data}  setclick={setclick} setcart_data={setcart_data}  cart_data={cart_data} />} />



        <Route path="/filter" element={<Filterpage data={data} />} />


        <Route path="/details" element={<Detail click={click}  />} />
                
                <Route path='/cart' element={<Cart_details cart_data={cart_data} setcart_data={setcart_data}/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
