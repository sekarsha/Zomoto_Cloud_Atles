import React, { useState } from 'react'
import useRazorpay from "react-razorpay";






const Payment = () => {

    const [amount, setamount] = useState("1")
    const [Razorpay] = useRazorpay();



    return (
        <div><button className=' btn btn-primary' onClick={() => click_payment()} >Pay now</button></div>
    )
}

export default Payment