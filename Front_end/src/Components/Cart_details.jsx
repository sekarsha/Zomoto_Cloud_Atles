import React, { useEffect, useState } from 'react'
import Nav_bar from './Nav_bar'
import useRazorpay from "react-razorpay";

const Cart_details = ({ cart_data, setcart_data }) => {

    console.log(cart_data);
    const [Razorpay] = useRazorpay();


    const [cartqty, setcartqty] = useState(1)
    const [val, setva] = useState([])
    const [ordername, setorder_name] = useState([])
    console.log(ordername);



    const sha = () => {
        const price = cart_data.map((item) => {
            return item.qty * item.price
        })

        setva(price)
    }

    useEffect(() => { sha() }, [cartqty])





    const incresing = (id) => {

        const newcart = cart_data.map((item) => {

            if (item.id == id) {
                setcartqty(item.qty++)
                setva([item.qty * item.price])
            }

        })

    }

    const decresing = (id) => {
        const newcart = cart_data.map((item) => {

            if (item.qty > 1) {
                if (item.id == id) {
                    console.log(item);
                    setcartqty(item.qty--)
                }

            }


        })


    }

    const deletee = (id) => {

        const new_item = cart_data.filter((e) => e.id != id)

        setcart_data(new_item)

    }


    // useEffect(() => {

    //     setva(cart_data.reduce((acc,cur)=>parseInt(acc.price)+parseInt(cur.price)))

    // },[cart_data])

    const click_payment = (e) => {


        const option = {
            key: "rzp_test_HHLes0324Ij37S",
            key_secret: "Cb14UZEmE3fDdw50d03dCuHz",
            amount: val*100,
            currency: "INR",
            name: ordername,
            description: "for testing purpose",

            handler: function (res) {
                alert(res.razorpay_payment_id);
            },
            prefill: {
                name: "sekarsha",
                email: "sekarsha70@gmail.com",
                contact: "8189953509"
            },
            notes: {
                address: "Razorpay corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        }

        const pay = new window.Razorpay(option)
        pay.open()

    }

    return (
        <div >
            <Nav_bar />
            <h1 className=' fw-bold'>Cart Details</h1>
            <div className=' container'>



                <div>
                    <table className=' table'>
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product price</th>
                                <th>Product Qty</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                cart_data.map((e, index) => (<tr key={index}>
                                    <td><img style={{ width: "100px" }} src={e.pic} alt="" /></td>
                                    <td>{e.name}</td>
                                    <td>Rs. {e.price}</td>
                                    <td>
                                        <div className="stockCounter d-inline">
                                            <span className="btn btn-danger minus me-2" onClick={() => decresing(e.id)} >-</span>
                                            <input type="number" className="form-control count d-inline me-2" style={{ width: "50px" }} value={e.qty} readOnly />
                                            <span className="btn btn-primary plus me-2" onClick={() => incresing(e.id)}>+</span>
                                        </div>

                                    </td>
                                    <td>{e.qty * e.price}</td>
                                    <td><i className="bi bi-trash3-fill" onClick={() => deletee(e.id)}></i></td>

                                    {/* <h5> <input type="text" value={e.qty * e.price} />  </h5> */}

                                </tr>))

                            }




                        </tbody>


                    </table>
                    <h5 className=' fw-bold text-end me-5'>Total:{val.reduce((a, b) => a + b, 0)}</h5>

                    <div className=' d-flex justify-content-end'>
                        <div className='  w-50 mt-5'>

                            <div>
                                <input type="text" onChange={(e) => setorder_name(e.target.value)} className=' form-control mb-3 ' placeholder='Enter the Name' />
                                <input type="text" className=' form-control mb-3 ' placeholder='Address' />
                                <button className=' btn btn-primary' onClick={() => click_payment()}>Order now {val.reduce((a, b) => a + b, 0)} </button>
                            </div>

                        </div>
                    </div>

                      

                </div>


            </div>
        </div>
    )
}

export default Cart_details