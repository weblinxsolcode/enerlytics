import React, { useEffect, useRef, useState } from "react";
import Header from "../Elements/Header";
import Banner from "../Components/Banner";
import Enerlytics from "../Components/Enerlytics";
// import Works from '../Components/Works'
import Needs from "../Components/Needs";
import Footer from "../Elements/Footer";
import Clients from "../Components/Clients";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider1 from "../Components/Slider1";
import Slider2 from "../Components/Slider2";

const Home = () => {
  // const [rotateY, setRotateY] = useState(0);
  const elementRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    // document.querySelector('.dismissButton').click();
    // const button = document.querySelector('.dismissButton');
    // if (button) {
    //   button.click();
    //   console.log('clicked')
    // }

    // const handleScroll = () => {
    //   const rotation = window.scrollY / 18; // adjust rotation speed by changing the division factor
    //   setRotateY(rotation);
    //   console.log(rotation);
    // };

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };

    const element = elementRef.current;
    const windowHeight = window.innerHeight;

    window.addEventListener("scroll", () => {
      // Calculate the distance between the top of the element and the bottom of the window
      const distanceFromTop = element.getBoundingClientRect().top;
      // const distanceFromTop = "520px";
      const distanceFromBottom = windowHeight - distanceFromTop;

      // Calculate the percentage of the distance from the top to the bottom of the window
      const percentage = distanceFromBottom / windowHeight;
      console.log(percentage + "hello");
      // Calculate the new rotation based on the percentage
      const rotation = 68 - percentage * 68;

      // Set the new rotation of the element
      element.style.transform = `rotateX(${rotation}deg)`;
    });

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="banner__img">
        <Header homeactive="active2" />
        <div className="height__sections"></div>
        <Banner />
        <div className="height__sections"></div>
      </div>
      <div className="height__sections"></div>
      <div className="container">
        <h1 className="text-center banner__heading">WHAT IS ENERLYTICS?</h1>
        <p className="text-center fs-5 mb-0 ">
          “Enerlytics is an end-to-end energy management platform with advanced
          analytics. With our modular platform, connect your energy supply and
          demand assets to better manage your industry by leveraging the power
          of AI.”
        </p>
        <div className="height__sections"></div>
        <div
          ref={elementRef}
          className="d-flex justify-content-center"
          // aos="fade"
          // data-aos="flip-down"
          // data-aos-duration="3000"
          //   style={{ transform: `rotateX(${rotateY}deg) scale3d(1, 1, 1) `,  transformStyle: `preserve-3d`,  transition: `transform .5s `,perspective: '1000px' ,
          // }}
        >
          <img src="img/combine.png" className="img-fluid" alt="" />
        </div>
        <div className="height__sections"></div>
      </div>

      <div className="">
        <Slider1 />
      </div>
      <div className="height__sections"></div>
      <div className="height__sections"></div>
      {/* <Works /> */}
      <Slider2 />
      <div className="height__sections"></div>
      <Enerlytics />
      <div className="height__sections d-lg-block d-none"></div>
      <Clients />
      <div className="height__sections"></div>
      <div className="bg-black py-4">
        <div className="container">
          <div className="row justify-content-center text-center  mx-0">
            <div className="text-white">
              <h1 className="display-5 fw-bold">
                Connect to what you need animation
              </h1>
              <p className="text-white-50">
                “Our platform is modular, connect the modules that you need”
              </p>
            </div>
            <div className="w-100 ">
              <div className="connect-section-container">
                <div className="my__container">
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/battery.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/boiler.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container2 ">
                    <div className="img__container animation__1">
                      <img src="img/compressor.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container3 ">
                    <div className="img__container animation__1">
                      <img
                        src="img/electric-generator.png"
                        className=""
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/furnace.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/HVAC.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/machine.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container2 ">
                    <div className="img__container animation__1">
                      <img src="img/motor.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/natural-gas.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container3 d-lg-grid d-none ">
                    <div className="img__container animation__1">
                      <img
                        src="img/plate-heat-exchangers.png"
                        className=""
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my__container ">
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/utility grid.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container3 ">
                    <div className="img__container animation__1">
                      <img src="img/wind.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container2 ">
                    <div className="img__container animation__2">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__2">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container2 ">
                    <div className="img__container animation__2">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container ">
                    <div className="img__container animation__1">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="img__custom__container3 d-lg-grid d-none ">
                    <div className="img__container animation__2">
                      <img src="img/solar-panel.png" className="" alt="" />
                    </div>
                    <div>
                      <div className="bg__circle__container">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="height__sections d-lg-none d-block"></div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-theme-color rounded-pill p-2 px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* <div className="section">
          <div className="container _6em">  
            <div className="center-text">
              <div className="fade-in-move-on-scroll">
                <h1>Connect to what you actually need</h1>
              </div>
            </div>
            <div className="connect-section-container">
              <div className="w-layout-grid connect-grid-container">
                <div
                  id="w-node-d008f252-532e-9d09-d9c2-0bb50db72bc3-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _01">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_6b36a120-b831-13db-9104-e521eb83e706-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _02">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_8689b8b6-e83a-0577-b4e9-43bb27f11736-aca8ea2d"
                  className="company-avatar-container bot"
                >
                  <div className="company-avatar-circle _03">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_4f1d5286-8618-b7c4-8f9b-154d93084005-aca8ea2d"
                  className="company-avatar-container up"
                >
                  <div className="company-avatar-circle _04">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_52b3093c-671c-ec38-a078-3b81fa20f408-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _05">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-e3acfc95-87cd-c92c-4015-0873834ac1d1-aca8ea2d"
                  className="company-avatar-container random"
                >
                  <div className="company-avatar-circle _06">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-ab6fd3a9-0145-6a3e-94fc-91330bb0f431-aca8ea2d"
                  className="company-avatar-container random"
                >
                  <div className="company-avatar-circle _07">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_2bb55183-bd7a-9bae-a4c9-ae37c11720c5-aca8ea2d"
                  className="company-avatar-container bot"
                >
                  <div className="company-avatar-circle _08">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-_05e15299-d605-b9eb-85f8-c9e4e84a86e4-aca8ea2d"
                  className="company-avatar-container bot"
                >
                  <div className="company-avatar-circle _09">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-a9b6046f-debb-78ae-3ea8-b3631ff554a0-aca8ea2d"
                  className="company-avatar-container up hide"
                >
                  <div className="company-avatar-circle _10">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid connect-grid-container">
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2dd-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _11">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e2-aca8ea2d"
                  className="company-avatar-container bot"
                >
                  <div className="company-avatar-circle _12">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e7-aca8ea2d"
                  className="company-avatar-container bot"
                >
                  <div className="company-avatar-circle _13">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2ec-aca8ea2d"
                  className="company-avatar-container up"
                >
                  <div className="company-avatar-circle _14">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f1-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _15">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f6-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _16">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2fb-aca8ea2d"
                  className="company-avatar-container random"
                >
                  <div className="company-avatar-circle _17">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff300-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _18">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff305-aca8ea2d"
                  className="company-avatar-container"
                >
                  <div className="company-avatar-circle _19">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
                <div
                  id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff30a-aca8ea2d"
                  className="company-avatar-container up hide"
                >
                  <div className="company-avatar-circle _20">
                    <img
                      src="/img/img1.svg"
                      loading="lazy"
                      alt
                      className="company-avatar"
                    />
                  </div>
                  <div className="grey-circle-holder">
                    <div className="gray-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
