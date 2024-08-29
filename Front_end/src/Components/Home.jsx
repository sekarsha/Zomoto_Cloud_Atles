import React, { useEffect, useState } from 'react'
import "../Components/Home.css"
import Cart_item from './Cart_item'
import data from "../data.json"
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dotenv from "dotenv"
import.meta.env.VITE_API_KEY

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Home = ({ data, setclick, setcart_data, cart_data }) => {

    const [input, setinput] = useState("")
    const [cart_qty, setcart_qty] = useState(1)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen1, setIsOpen1] = useState(false);
    const [msg,setmsg]=useState("")


    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Pass, setPass] = useState()


    const [Email1, setEmail1] = useState()
    const [Pass1, setPass1] = useState()

    const navigate=useNavigate()

    console.log(import.meta.env.VITE_API_KEY);
    

    const notify = () => toast("Log in Succesfull");
    const Error=()=> toast("Log in Error");

    function openModal1() {
        setIsOpen1(true);
        CloseEE()
    }
    function closeModal1() {
        setIsOpen1(false);
    }

    const CloseE = () => {
        setIsOpen1(false)
    }


    const CloseEE = () => {
        setIsOpen(false)
        
    }



    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }



    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }


    const handle = async (e) => {

        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API_KEY}`+"/reg", { Name, Email, Pass })
            .then((res) => { console.log(res.data), navigate("/"), CloseE() })
            .catch((err) => console.log(err))

    }



    const handle1 = async (e) => {
      
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API_KEY}`+"/log", { Email1, Pass1 })
            .then((res) => {
                console.log(res)

                if (res.data === "success") {
                  
                    navigate("/")
                    CloseEE()
                    setmsg("USER.K")
                    notify()
                }

                else{
                    Error()
                }
            })
            .catch((err) => console.log(err))


    }




    return (
        
        <>
          
            <div className=' container-fluid sha'>
            <ToastContainer />
                <div>
                    <div className=' container d-flex justify-content-between  align-items-center p-2 '>

                        <div><Link to={"/"} className=' nav-link' ><span className='  text-danger fw-bold border ps-2 pe-2 pb-1 bg-white rounded rounded-3 fs-3'> e!</span></Link> </div>

                        <div className=' d-flex  gap-3'>
                            <Link to={"/cart"}><button type="button" className="btn  bg-white  position-relative">
                                <i className="bi bi-bag-heart-fill text-danger"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart_data.length}
                                </span>
                            </button></Link>




                            <span><button className=' btn fw-bold  bg-white text-danger ' onClick={openModal}>login</button></span>
                            <span><button className=' btn fw-bold  bg-white text-danger ' >{msg}</button></span>
                            {/* <span><button className=' btn  fw-bold bg-white text-danger ' onClick={openModal1} >Create Acount</button></span> */}

                        </div>

                    </div>

                    <div className=' container mt-5'>

                        <div className=' d-flex justify-content-center'>
                            <span className=' border  pb-3 pt-2  ps-4 pe-4 text-danger bg-white fw-bold  fs-1 rounded rounded-5 '>
                                e!
                            </span>

                        </div>
                        <div>
                            <h1 className=' text-white text-center fw-bold '>Find the Best Restaurant,Cafes and Bars</h1>
                        </div>
                    </div>

                    <div className=' d-flex justify-content-center gap-3 mt-5 '>

                        <div style={{ width: "500px" }}>

                            <div className=' d-flex align-content-center align-items-center border bg-white p-1 rounded rounded-2 '>

                                <i className="bi bi-search  fs-5"></i>
                                <input type="text" className='p-1  border border-0 form-control' placeholder='Search the item' onChange={(e) => setinput(e.target.value)} />

                            </div>



                        </div>

                    </div>
                </div>



            </div>

            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Example Modal"


            >

                <div >

                    <div className="justify-content-center d-flex  ">

                        <form className="main_div rounded-3 bg-light p-2   form-control" onSubmit={handle} >

                            <div className=' d-flex justify-content-between'>
                                <h3 className="fw-bold">signup</h3>
                                <span className="fw-bold"><button className='  btn-sm p btn  btn-danger' onClick={() => CloseE()}>x</button></span>
                            </div>


                            <div className="p-2">
                                <input type="text" className="form-control p-2 mt-4" placeholder="Name" id="name" onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="p-2">
                                <input type="email" className="form-control p-2 m-1 " placeholder="Email" id="mail" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="p-2">
                                <input type="text" className="form-control p-2 m-1 " placeholder="Password" id="pass" onChange={(e) => setPass(e.target.value)} />
                            </div>


                            <div className="p-2">
                                <button className="btn btn-primary w-100 m-2" id="btn_2"   >Signup</button>
                            </div>

                            <div className="p-2 m-0 d-flex justify-content-center mb-4">
                                <span className="m-0" >Already have an Account ?</span> <span><button className="nav-link text-primary ps-2"> Login</button></span>
                            </div>
                            <div className="text-center">
                                <p className="text-muted">-----------------------or------------------------</p>
                            </div>

                        </form>

                    </div>
                </div>

            </Modal>


            <Modal

                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className="justify-content-center d-flex main ">

                    <form onSubmit={handle1} className="main_div rounded-3  p-2  ">
                        <div className=' d-flex justify-content-between'>
                            <h3 className="fw-bold text-center mt-3 ">Login  <i className="bi bi-chat-left-quote-fill"></i> </h3>
                            <span className="fw-bold"><button className='  btn-sm p btn  btn-danger' onClick={CloseEE} >x</button></span>

                        </div>

                        <div className="p-2">
                            <input type="text" className="form-control p-2 mt-4" placeholder="Email" onChange={(e) => setEmail1(e.target.value)} />
                        </div>

                        <div className="p-2">
                            <input type="password" className="form-control p-2 m-1 " onChange={(e) => setPass1(e.target.value)} placeholder="Password" />
                        </div>

                        <a href="" className="nav-link text-primary  text-center">Forgot Password ?</a>

                        <div className="p-2">
                            <button className="btn btn-primary w-100 m-2 btn_3">login</button>
                        </div>

                        <div className="p-2 m-0 d-flex justify-content-center mb-4">
                            <span className="m-0">Don't have an Account ?</span> <span><button onClick={openModal1}   type="button" id="btn" className="nav-link text-primary ps-2">sign up</button></span>
                        </div>

                        <div className="text-center">
                            <p className="text-muted">-----------------------or------------------------</p>
                        </div>



                    </form>

                </div>
            </Modal>








            <Cart_item data={data} setclick={setclick} input={input} setcart_data={setcart_data} cart_data={cart_data} />

        </>

    )
}

export default Home