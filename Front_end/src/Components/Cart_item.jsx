import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Detail from './Detail'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart_item = ({ data, setclick, input, setcart_data, cart_data }) => {

    const [details_data, setdetail] = useState([]);
    const [checkt, setcheck] = useState("")
    const [filter, setfilter] = useState(true)
    const navigate = useNavigate()
    const notify = () => toast("Add to Card");

    console.log(cart_data);


    const details = (id) => {

        const click_user = data.find((item) => {

            if (item.id == id) {

                return item
            }
        })

        setdetail(click_user)
        setclick(click_user)
        navigate("/details")

    }


    const [min, setmin] = useState(0)
    const [max, setmax] = useState(500)

    const handle_price = (e) => {

        const { value } = e.target;
        setmax(value)
    }

    const filter_P = data.filter(
        (item) => item.price >= min && item.price <= max
    )






    const getitem = (e) => {

        notify()

        const item = cart_data.find((item) => item.id == e.id)

        if (!item) {

            setcart_data([...cart_data, e])

        }



    }





    return (

        <div className=' container-fluid  bg-light'>
            
            <div className=' container'>
                <div className=' d-flex justify-content-between align-items-center mt-3'>
                    <h1>Top Foods for you</h1>

                    {
                        filter ? <i className="bi bi-funnel-fill fs-3 text-primary" onClick={() => setfilter(!filter)} ></i> : <i class="bi bi-x-circle-fill fs-3 text-primary" onClick={() => setfilter(!filter)} ></i>
                    }



                </div>

                <h2>Order food online in Jaypee Greens, Greater </h2>

                {
                    filter ? <>  {
                        <div className="row gy-2 mt-3 ">

                            {
                                data.filter((item) => item.name.toLowerCase().includes(input)).map((e, index) => (<div key={index} className="col-12 col-sm-4 col-lg-3 ">

                                    <div className=' border  p-2'>

                                        <div className=' d-flex justify-content-center '>
                                            <img src={e.pic} alt="" style={{ height: "200px" }} />

                                        </div>

                                        <div>
                                            <div className='  mt-2'>
                                                <span>{e.name}</span>

                                            </div >
                                            <span className=' text-muted'>{e.details.slice(0, 30)}...</span>


                                        </div>

                                        <div className='d-flex align-items-center  gap-3 mt-1 mb-1'>


                                            <button className='btn btn-success' onClick={() => getitem(e)}   >Add to Cart</button>

                                            <button className='btn btn-success' onClick={() => details(e.id)}  > Details  </button>

                                            {/* <Link to={"/details"}   >  </Link> */}

                                            {/* <span className='  text-white bg-success p-1 rounded rounded-2' >{e.rating} <i className="bi bi-star"></i> </span> */}
                                        </div>


                                    </div>

                                </div>))
                            }


                        </div>

                    }</> : <><div className=' container mt-3  '>

                        <div className=' row'>

                            <div className="col-12 col-lg-3 col-md-3  bg-light ">

                                <h2 className=' fw-bold'>Filter</h2>

                                <div className=' mb-3 '>
                                    <h5 className=' fw-bold'>Category</h5>

                                    {/* <div className=' form-check'>
                                        <input type="checkbox" className=' form-check-input' value={checkt} onClick={()=>setcheck("veg")} />
                                        <label htmlFor="" className=' form-check-label' >Vegetarion</label>
                                    </div>
                                    <div className=' form-check'>
                                        <input type="checkbox" className=' form-check-input' />
                                        <label htmlFor="" className=' form-check-label' value={"Non-veg"} >Non-Vegetarion</label>
                                    </div>

                                    <div className=' form-check'>
                                        <input type="checkbox" className=' form-check-input' />
                                        <label htmlFor="" className=' form-check-label' >Soft Drinks</label>
                                    </div> */}

                                    <select name="" className=' form-select' id="" onChange={(e) => setcheck(e.target.value)}  >
                                        <option value=""> open to select catagory</option>
                                        <option value="vegtarion" >Vegetarion</option>
                                        <option value="Non-veg"  >Non-vegetarion</option>

                                    </select>


                                </div>


                                <div>
                                    <div className=' align-content-center'>
                                        <label for="customRange1" className="form-label fw-bold">Example range :${min}-${max}</label>
                                        <input type="range" className=" w-75 form-range" id="customRange1"

                                            min="0"
                                            max="500"
                                            value={max}
                                            onChange={handle_price}

                                        />
                                    </div>
                                </div>




                            </div>

                            <div className=' col-12 col-lg-9 col-md-9'>

                                {
                                    filter_P.filter((item) => item.category.toLowerCase().includes(checkt.toLowerCase())).map((e, index) => (<div key={index} className=' d-flex gap-2 mb-2 border p-2 bg-light'>
                                        <img src={e.pic} className=' w-25' alt="" />
                                        <div>
                                            <h3 className=' fw-bold'>{e.name}</h3>
                                            <h5>{e.details}</h5>
                                            <span className=' fw-bold'>Category</span>:<span>{e.category}</span> <br />
                                            <span className=' fw-bold'>Price</span>:<span>{e.price}</span> <br />
                                            <span className=' fw-bold'>Weight</span>: <span>{e.weight}</span> <br />
                                            <button className='  btn btn-success me-2 mt-1 mb-2'>Add to Cart</button>
                                            <button className='  btn btn-success mb-2 mt-1' onClick={() => details(e.id)}  > Details  </button>

                                        </div>
                                    </div>))
                                }



                            </div>

                        </div>

                    </div>
                    </>
                }








            </div>



        </div>
    )
}

export default Cart_item