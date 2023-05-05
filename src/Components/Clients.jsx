import React from 'react'
import { Carousel } from 'react-bootstrap'

const Clients = () => {
    return (
        <>
            <div className="container  py-lg-3" style={{backgroundColor:"#000"}}>
                <Carousel>
                    <Carousel.Item className=''>
                    <div className="d-flex flex-xl-row flex-column">
                    <img
                            className="d-block img-fluid img__fluid"
                            src="img/client-logo-placeholder.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Client Logo</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item className=''>
                    <div className="d-flex flex-xl-row flex-column">
                    <img
                            className="d-block img-fluid img__fluid"
                            src="img/client-logo-placeholder.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Client Logo</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item className=''>
                    <div className="d-flex flex-xl-row flex-column">
                    <img
                            className="d-block img-fluid img__fluid"
                            src="img/client-logo-placeholder.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Client Logo</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item className=''>
                    <div className="d-flex flex-xl-row flex-column">
                    <img
                            className="d-block img-fluid img__fluid"
                            src="img/client-logo-placeholder.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Client Logo</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>

    )
}

export default Clients