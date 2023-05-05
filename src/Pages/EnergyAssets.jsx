import React, { useState } from "react";
import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-bootstrap/Carousel";

const EnergyAssets = () => {
  const [tabShow, settabShow] = useState(2);

  const tabOne = () => {
    settabShow(1);
    console.log(tabShow);
  };
  const tabTow = () => {
    settabShow(2);
    console.log(tabShow);
  };
  const tabThree = () => {
    settabShow(3);
    console.log(tabShow);
  };

  return (
    <>
      <div className="container-fluid" id="Assets_main_container">
        <Header energyactive="active2" />
        <div className="container">
        <div className="height__sections"></div>

          <div className="row    justify-content-lg-start justify-content-center">
            <div className="w-100 d-flex mb-4 mb-lg-0 justify-content-lg-start justify-content-center flex-lg-row flex-column gap-lg-0 gap-4">
            <button
                className={`btn rounded-0 px-3  ${
                  tabShow === 2 ? "btn-light" : "btn-outline-light"
                }`}
                onClick={tabTow}
              >
                Supply Side
              </button>
              <button
                className={`btn rounded-0 px-3 ${
                  tabShow === 1 ? "btn-light" : "btn-outline-light"
                }`}
                onClick={tabOne}
              >
                Demand Side
              </button>
            
              <button
                className={`btn rounded-0 px-3 ${
                  tabShow === 3 ? "btn-light" : "btn-outline-light"
                }`}
                onClick={tabThree}
              >
                Carbon Accounting
              </button>
            </div>
            <div className={` ${tabShow === 1 ? "d-block" : "d-none"}`}>
              <div className="row" >
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <div>
                    <h1 className="text-white syne">Demand Side</h1>
                    <h5 className="text-white">Sub Heading text2:</h5>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere at exercitationem aperiam! Unde ea necessitatibus
                      tempora nihil quo excepturi, accusantium, asperiores earum
                      et nobis culpa dolores quia ipsam eius! Deleniti? 2
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <Carousel id="carousel-energy2">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              
            </div>
            <div className={` ${tabShow === 3 ? "d-block" : "d-none"}`}>
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <div>
                    <h1 className="text-white syne">Carbon Accounting</h1>
                    <h5 className="text-white">Sub Heading text3:</h5>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere at exercitationem aperiam! Unde ea necessitatibus
                      tempora nihil quo excepturi, accusantium, asperiores earum
                      et nobis culpa dolores quia ipsam eius! Deleniti? 3
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <Carousel id="carousel-energy3">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              
            </div>
            <div className={` ${tabShow === 2 ? "d-block" : "d-none"}`}>
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <div>
                    <h1 className="text-white syne">Supply Side</h1>
                    <h5 className="text-white">Sub Heading text 1:</h5>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere at exercitationem aperiam! Unde ea necessitatibus
                      tempora nihil quo excepturi, accusantium, asperiores earum
                      et nobis culpa dolores quia ipsam eius! Deleniti? 1
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <Carousel id="carousel-energy">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="img/dashboard.webp"
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
          
            </div>
          </div>
          <div className="height__sections"></div>

        </div>
      </div>
      <div
        className={`container-fluid bg-white ${
          tabShow === 1 ? "d-block" : "d-none"
        }`}
        id="kpis-container"
      >
        <div className="container">
        <div className="height__sections d-lg-block d-none"></div>

          <div className="row mx-0">
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Solar2</h1>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="height__sections d-lg-block d-none"></div>

          <div className="row py-0 flex-lg-row flex-column-reverse ">
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Genset2 </h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
          </div>

        </div>
      </div>
      <div
        className={`container-fluid bg-white ${
          tabShow === 2 ? "d-block" : "d-none"
        }`}
        id="kpis-container"
      >
        <div className="container">
        <div className="height__sections d-lg-block d-none"></div>

          <div className="row py-0  ">
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Solar</h1>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="height__sections d-lg-block d-none"></div>

          <div className="row py-0  flex-lg-row flex-column-reverse">
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Genset </h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
          </div>

        </div>
      </div>
      <div
        className={`container-fluid bg-white ${
          tabShow === 3 ? "d-block" : "d-none"
        }`}
        id="kpis-container"
      >
        <div className="container">
        <div className="height__sections d-lg-block d-none"></div>

          <div className="row ">
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Solar3</h1>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="height__sections d-lg-block d-none"></div>

          <div className="row flex-lg-row flex-column-reverse ">
            <div className="col-lg-6 my-0 my-lg-0">
              <h1 className="fw-bold">Genset3 </h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quidem asperiores est rerum iste similique provident
                aperiam, vel adipisci inventore veritatis repellendus mollitia
                vitae voluptas molestiae nam laboriosam tempore deleniti.
                Facilis tenetur veniam ad iste. Necessitatibus maiores
                recusandae id ullam nemo. Quis perspiciatis, doloribus tempora
                provident dolor adipisci molestiae fuga, doloremque sunt culpa,
                omnis amet dolorem similique deserunt architecto facilis. Omnis
                recusandae velit fugiat sapiente dolorum necessitatibus iure
                ipsam neque officiis cum. Reiciendis odio tenetur modi excepturi
                accusantium nemo architecto. Accusamus id quidem veniam
                inventore dolorum architecto est eligendi quaerat?
              </p>
              {/* <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button> */}
            </div>
            <div className="col-lg-6 my-3 my-lg-0 d-flex justify-content-center align-items-center">
              <img src="img/kpis.PNG" className="img-fluid" alt="img-fluid" />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnergyAssets;
