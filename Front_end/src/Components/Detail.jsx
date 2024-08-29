import React from 'react'
import Nav_bar from './Nav_bar'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Detail = ({ click }) => {

    console.log(click);

    return (

        <div>
            <Nav_bar />
            <div className=' d-sm-flex align-content-center mt-'>
                <div className="col-12 col-lg-6">
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={click.pic} alt="" style={{ width: "100%", height: "500px" }} />
                        </div>
                        <div>
                            <img src={click.pic} alt="" style={{ width: "100%", height: "500px" }} />
                        </div>

                    </Carousel>

                </div>

                <div className=' col-12 col-lg-6'>
                    <div className=' p-2'>


                        <div>
                            <div className='  mt-2'>
                                <h3 className=' fw-bold'>{click.name}</h3>
                            </div >
                            <span className=' text-muted'>{click.details}...</span><br />



                        </div>

                        <div className=' mt-2'>
                            <span className=' fw-bold mt-3'>Category</span>:<span>{click.category}</span> <br />
                            <span className=' fw-bold'>Weight</span>: <span>{click.weight}</span>
                        </div>

                        <div className='d-flex align-items-center  gap-3 mt-2 mb-1'>
                            <button className='  btn btn-success'>Add to Cart</button>
                            <span className='  text-white bg-success p-1 rounded rounded-2' >{click.rating} <i className="bi bi-star"></i> </span>
                        </div>

                        <div className=' d-none d-md-block'>
                            <Carousel showThumbs={false} >
                                <div>
                                    <img src={click.pic} alt="" style={{ width: "100%", height: "310px" }} />
                                </div>
                                <div>
                                    <img src={click.pic} alt="" style={{ width: "100%", height: "500px" }} />
                                </div>

                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Detail