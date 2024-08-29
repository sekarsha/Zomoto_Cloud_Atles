import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav_bar = () => {
     
    const [val,setval]=useState(false)

    return (
        <div className=' container-fluid  bg-body-secondary '>
            <div className=' container d-flex justify-content-between  align-items-center p-2 '>

                <div><Link to={"/"} className=' nav-link' ><span className='  text-danger fw-bold border ps-2 pe-2 pb-1 bg-white rounded rounded-3 fs-3'> e!</span></Link></div>
                <div className=' d-flex  gap-3'>
                    <span><button className=' btn fw-bold  bg-white text-danger '>login</button></span>
                    <span><button className=' btn  fw-bold bg-white text-danger '>Create Acount</button></span>
                </div>

            </div>
        </div>
    )
}

export default Nav_bar