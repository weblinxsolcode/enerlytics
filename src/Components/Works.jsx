import React from 'react'

const Works = () => {
    return (
        <>
            <section className='how__works py-5 position-relative'>
                <div className="container">
                    <h2 className="text-white text-uppercase text-center fs-1 fw-600">
                        how it works

                    </h2>
                    <p className="text-white-50 text-center fs-7">Lorem Ipsum is simply dummy text</p>

                    <div className="d-flex justify-content-center">
                        <div className='d-flex flex-column gap-1 border__white'>
                            <div>
                                <img src="img/cloud.png" className='img-fluid' alt="" />
                            </div>
                            <div className='text-white fw-700 text-center text-uppercase fs-4'>
                                IOT
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-lg-flex d-none justify-content-center">

                        <img src="img/folder.png" className='position__img' alt="" />
                    </div>
                    <div className="d-flex justify-content-around margin__top flex-lg-nowrap flex-wrap gap-lg-0 gap-5">
                        <div className='bg__dark text-center'>
                            <div className="border__white2 text-white">01</div>

                            <div className="mt-4">
                                <h5 className='text-white fs-6'>NOC Sytems & Dashboard</h5>
                                <p className="text-white fs-7">Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='bg__dark text-center'>
                            <div className="border__white2 text-white">02</div>

                            <div className="mt-4">
                                <h5 className='text-white fs-6'>NOC Sytems & Dashboard</h5>
                                <p className="text-white fs-7">Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='bg__dark text-center'>
                            <div className="border__white2 text-white">03</div>

                            <div className="mt-4">
                                <h5 className='text-white fs-6'>NOC Sytems & Dashboard</h5>
                                <p className="text-white fs-7">Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works
