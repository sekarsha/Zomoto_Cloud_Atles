import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Reg_form = () => {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Pass, setPass] = useState()

    const navigate=useNavigate()

   

    const handle = async (e) => {

        e.preventDefault()
        axios.post("http://localhost:8000/reg",{Name,Email,Pass})
        .then((res)=>{console.log(res.data) ,navigate("/log")  } )
        .catch((err)=>console.log(err))

    }

    return (
        <div>Reg_form

        </div>
    )
}

export default Reg_form