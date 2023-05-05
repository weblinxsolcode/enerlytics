import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";

const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="" id='my__slider1'>
                <div className="container">
                    <Slider {...settings}>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/8.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>ISO50001</Card.Title>
                                    <Card.Text>
                                        For ISO50001 certification, our tailored platform monitors energy supply and
                                        demand, system KPIs, identifies focus areas, and provides feedback on ongoing KPIs. Helps
                                        utility managers track costs, reduce downtime, and manage O&M activities. Provides a onewindow view of the energy value chain for the facility.

                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/7.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>LEED Certification</Card.Title>
                                    <Card.Text>
                                        Platform suited for LEED BD+C or LEED O&M, enabling compliance
                                        and tracking against ASHRAE standards. Designed for green building facility managers' daily
                                        monitoring and reporting needs.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/1.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>IPMVP Certification</Card.Title>
                                    <Card.Text>
                                        Platform suited for demand side energy supply companies (ESCOs).
                                        Develops baselines and tracks adjusted baseline and actual consumption for transparent and
                                        secure invoicing. Handy for M&V experts in this area.

                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/4.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Renewable Asset Management</Card.Title>
                                    <Card.Text>
                                        Platform suited for solar and wind asset managers to
                                        maximize generation. Monitoring, analysis, and forecasting capabilities with specialized ML
                                        algorithms and reliable weather sources. Supports contract management and operation &
                                        maintenance activities.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/3.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Net-Zero Planning</Card.Title>
                                    <Card.Text>
                                        Track the carbon footprint in real time, set targets and trade carbon
                                        attributes through our platform. Our supply and demand side asset management platform
                                        measures each subsystems’ consumption.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/2.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Microgrid Friendly</Card.Title>
                                    <Card.Text>
                                        Platform suited for utility operators running small to medium microgrids
                                        with solar PV, wind, BESS, and gensets. Monitors load profile and dispatch patterns to optimize
                                        generating assets. Key KPIs are maintaining operational reliability, reducing LCOE, and carbon
                                        footprint.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/5.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Energy Conservation Audit</Card.Title>
                                    <Card.Text>
                                        Platform suited for energy auditors to monitor energy savings
                                        measures (ESMs) before and after implementation. Provides ongoing performance monitoring
                                        to assess long-term effectiveness. Equips auditors with statistical data for more accurate return
                                        assessments on facility owners' investments.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card className='p-2' style={{ width: '18rem', height: "34rem"}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img variant="top" src="img/newpic/6.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Energy Asset Management</Card.Title>
                                    <Card.Text>
                                        Platform suited for asset managers and utility operators
                                        managing energy consumption across geographically distributed sites. Informs on aggregated
                                        consumption, real-time power, and costs incurred. Specialized ML algorithms allow for load
                                        segregation to reduce energy costs and identify significant energy uses. Equips users with load
                                        and bill forecasting.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Slider1