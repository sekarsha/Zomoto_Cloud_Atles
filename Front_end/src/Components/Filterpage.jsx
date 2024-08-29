import React from 'react'
import Nav_bar from './Nav_bar'

const Filterpage = ({ data }) => {

    console.log(data);


    return (
        <div className=' container-fluid '>

            <Nav_bar />

            <div className=' container mt-3  '>

                <div className=' row'>

                    <div className="col-12 col-lg-3 col-md-3  bg-light ">

                        <h2 className=' fw-bold'>Filter</h2>

                        <div className=' mb-3 '>
                            <h5 className=' fw-bold'>Category</h5>
                            <div className=' form-check'>
                                <input type="checkbox" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >Vegetarion</label>
                            </div>
                            <div className=' form-check'>
                                <input type="checkbox" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >Non-Vegetarion</label>
                            </div>

                            <div className=' form-check'>
                                <input type="checkbox" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >Soft Drinks</label>
                            </div>
                        </div>

                        <div className=' mb-3'>
                            <h5 className=' fw-bold'>Price</h5>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >10 to 100 Price</label>
                            </div>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >100 to 200 Price</label>
                            </div>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >200 to 300 Price</label>
                            </div>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >300 to 400 Price</label>
                            </div>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >400 to 500 Price</label>
                            </div>

                        </div>

                        <div className=' mb-3'>
                            <h5 className=' fw-bold'>Short</h5>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >Low to High Price</label>
                            </div>

                            <div className=' form-check'>
                                <input type="radio" className=' form-check-input' />
                                <label htmlFor="" className=' form-check-label' >High to Low Price </label>
                            </div>

                        </div>

                    </div>

                    <div className=' col-12 col-lg-9 col-md-9'>

                        {
                            data.map((e, index) => (<div key={index} className=' d-flex gap-2 mb-2 border p-2 bg-light'>
                                <img src={e.pic} className=' w-25' alt="" />
                                <div>
                                    <h3 className=' fw-bold'>{e.name}</h3>
                                    <h5>{e.details}</h5>
                                    <span className=' fw-bold'>Category</span>:<span>{e.category}</span> <br />
                                    <span className=' fw-bold'>Weight</span>: <span>{e.weight}</span>
                                </div>
                            </div>))
                        }



                    </div>

                </div>

            </div>

        </div>
    )
}

export default Filterpage