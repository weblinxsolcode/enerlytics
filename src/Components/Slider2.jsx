import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";

const Slider2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="" id='my__slider1'>
                <div className="container">
                    <Slider {...settings}>
                        <div className="w-100">
                            <img className="w-100" src="/img/3a_Factory-Tags.png" alt="First slide" />
                        </div>
                        <div className="w-100">
                            <img className="w-100" src="/img/3b_Microgrid-Tags.png" alt="Second slide" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Slider2