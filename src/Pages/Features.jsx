import React,{useEffect} from 'react';
import Header from '../Elements/Header';
import { BiCheck } from 'react-icons/bi';
import { TbClipboardText } from 'react-icons/tb';
import Footer from '../Elements/Footer';

const Features = () => {

    return (
        <>
            <div className='container-fluid' id='FeaturesMainContainer'>
                <Header featureactive="active2" />
                <div className='container'>
                <div className="height__sections"></div>
                    <div className="row p-features" style={{gap:"20px 0px"}}>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <h1 className='display-4 text-white syne'>Our Unqiue Features</h1>
                                <p className='text-white-50 ps-lg-0 pe-lg-4'>We are brand agnostic company. Helping industires, renewable plant to explore the oppurtunities from data.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
                            <img src="img/solar-points.png" className='w-75' alt="img" />
                        </div>
                    </div>
                    <div className="height__sections"></div>
                </div>
            </div>
            <div className="height__sections"></div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row m-lg-0 m-1 border p-2 rounded-border-row '>
                        <div className='col-lg-3 p-0'>
                            <img src="img/energy-fan.png" className='img-fluid  my__responsive__img' alt="image" />
                        </div>
                        <div className='col-lg-9 p-0 d-flex justify-content-center align-items-center'>
                            <div className='py-lg-3 px-lg-3 px-0 py-3'>
                                <h1 className='my-lg-5 text-center'>Platform Capabilities</h1>
                                <ul className='text-black list-unstyled fs-6 ft-ul-div'>
                                    <li className='my-2'><BiCheck /> <span> You can performan analysis of different variables available in your system</span></li>
                                    <li className='my-2'><BiCheck /> <span>Platform is capable of perfmoing conditional monitoring and preventive maintenance of energy assets.</span></li>
                                    <li className='my-2'><BiCheck /> <span>You can manage service level agreements (SLA) and can do organized and efficient O&M.</span></li>
                                    <li className='my-2'><BiCheck /> <span>Platform enables you to visulaize the energy data and health of your system</span></li>
                                    <li className='my-2'><BiCheck /> <span>Platform is built with multiple ML models which help you in forecasting and planned your consumption days.</span></li>
                                    <li className='my-2'><BiCheck /> <span>Platform do carbon accounting & monitoring. It also help in trading your carbon credits.</span></li>
                                </ul>
                                <div className="text-center">
                                <button className='btn btn-theme-color rounded-pill my-3 p-2 px-4'>
                                    Learn More
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="height__sections"></div>
                    <div className='row bg-dark py-3 rounded-border-row'>
                        <img src="img/IOT.png" className='img-fluid' alt="image" />
                    </div>
                    <div className="height__sections"></div>
                    <div className='row '>
                        <h1 className='text-center'>Why Enerlytics</h1>
                        
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni repudiandae expedita ab, aut dicta laboriosam natus. Quisquam culpa veniam nostrum. Placeat provident suscipit architecto corporis odit praesentium quidem officiis?</p>
                    </div>
                    <div className="height__sections"></div>
                    <div className='row mx-0 gap__sections' >
                        <div className='col-lg-6   d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-md-start justify-content-center ps-md-0'>
                            <div>
                                <div className='feature-cliboard-icon'>
                                    <TbClipboardText />
                                </div>
                            </div>
                            <div>
                                <h5 className='fw-bold mb-1 text-md-start text-lg-start text-center mt-lg-0 mt-4'>Testing</h5>
                                <p className='fw-500 text-lg-start text-center mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum tenetur.</p>
                            </div>
                        </div>
                        <div className='col-lg-6  d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-md-start justify-content-center ps-md-0 '>
                            <div>
                                <div className='feature-cliboard-icon'>
                                    <TbClipboardText />
                                </div>
                            </div>
                            <div>
                                <h5 className='fw-bold mb-1 text-md-start text-lg-start text-center mt-lg-0 mt-4'>Testing</h5>
                                <p className='fw-500 text-lg-start text-center mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum tenetur.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 my-2 mt-lg-5  d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-md-start justify-content-center ps-md-0 '>
                            <div>
                                <div className='feature-cliboard-icon'>
                                    <TbClipboardText />
                                </div>
                            </div>
                            <div>
                                <h5 className='fw-bold mb-1 text-md-start text-lg-start text-center mt-lg-0 mt-4'>Testing</h5>
                                <p className='fw-500 text-lg-start text-center mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum tenetur.</p>
                            </div>
                        </div>
                        
                        <div className='col-lg-6 my-2  mt-lg-5 d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-md-start justify-content-center ps-md-0 '>
                            <div>
                                <div className='feature-cliboard-icon'>
                                    <TbClipboardText />
                                </div>
                            </div>
                            <div>
                                <h5 className='fw-bold mb-1 text-md-start text-lg-start text-center mt-lg-0 mt-4'>Testing</h5>
                                <p className='fw-500 text-lg-start text-center mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum tenetur.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className=' mt-5 text-center'>
                        <button className='btn btn-theme-color rounded-pill my-3 p-2 px-4'>
                            Learn More
                        </button>
                    </div>
                    {/* <div className='row py-3 py-lg-4'>
                        <div className='col-lg-4 my-4 my-lg-0 col-sm-6'>
                            <img src="img/man.png" className='img-fluid w-100' alt="image" />
                        </div>
                        <div className='col-lg-8 my-lg-0 col-sm-6 d-flex justify-content-center align-items-center'>
                            <div className='m-lg-4'>
                                <h1 className='fw-bold display-1'>Lorem Ipsum</h1>
                                <p className='fs-4'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eius quod nihil deleniti, delectus totam quibusdam cumque ullam sapiente ducimus est reiciendis dolorem? Nihil ratione, quidem aperiam veritatis animi facilis.
                                </p>
                                <button className='btn btn-theme-color btn-lg rounded-pill my-3 p-2 px-4'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Features