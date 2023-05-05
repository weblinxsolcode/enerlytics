import React, { useState, useCallback, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const names = ["Digitalization", "Asset Optimization", "Transition",];
  const [newName, setnewName] = useState("Digitalization");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 6000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <>
      <section className="banner ">
        <div className="container ">
          <div className="row mx-0  gap-lg-0 gap-5 align-items-center">
            <div className="col-lg-6 ps-lg-0">
              <h1 data-aos="fade-right" data-aos-duration="1000" className="text-white banner__heading syne">
                Enabling Energy <br className="d-lg-block d-none" />
                Intelligence Through <br className="d-lg-block d-none" />
                Digitalization
              </h1>
              <p className="text-white-50 fs-5 py-2 d-flex gap-1">
             <span>   Energy</span>
                {/* {newName} */}
                <TypeAnimation
                  sequence={[
                    "Digitalization", // Types 'One'
                    1000, // Waits 1s
                    "Asset Optimization", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "Transition",
                    2000, // Types 'Three' without deleting 'Two'
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  
                />
              </p>
              <a href="#my__slider1" className="btn btn-primary rounded-pill px-4 fs-7 py-2">
                Get Started
              </a>
            </div>
            <div className="col-lg-6">
              <img src="img/gif.gif" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
