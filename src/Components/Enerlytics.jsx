import React, { useState, useCallback, useEffect } from "react";
import CardEnelytics from "./CardEnelytics";
import Mydescription from "./Mydescription.json";
const Enerlytics = () => {
  const names = [
    "Solar PV Companies",
    "Industries",
    "ESCO Companies",
    "Asset Management Companies",
    "Consultant",
  ];
  const names2 = [
    "Connect your solar PV assets for robust performance tracking.",
    "Manage your energy consumption and achieve net-zero targets.",
    "Get compliances on CVMP for measurement and verification.",
    "Improve performance and reliability of your assets.",
    "Assists compliances for LEED O&M and ISO50001 certification.",
  ];
  const engineer3 = [
    "img/4a_SolarPVClients.png",
    "img/industry.png",
    "img/4c_ESCOClients.png",
    "img/asset.png",
    "img/4e_ConsultClientss.png",
  ];
  const engineer4 = ["engineer"];
  const [newName, setnewName] = useState("Solar PV companies");
  const [newName2, setnewName2] = useState(
    "looking to implement robust performance tracking, testing and after sales user experience"
  );
  const [newEngineer, setnewEngineer] = useState("img/4a_SolarPVClients.png");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    const index2 = Math.floor(Math.random() * engineer3.length);
    setnewName(names[index]);
    setnewName2(names2[index]);
    setnewEngineer(engineer3[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <>
      <section className="Enerlytics__Section ">
        <div className="container ">
          <h2 className="text-center fs-1">Why Enerlytics</h2>
          <p className="text-center fw-500 fs-6">
            “We are smart - our data analytics generate insights for your energy assets using advanced AI
            and ML algorithms. We are modular - choose and pair the assets you need analytics on. We are
            customizable - choose the time intervals for your data and the design of your dashboard.”
          </p>

          <div className="mt-5 d-flex justify-content-lg-around justify-content-center flex-wrap enr-img  flex-lg-row flex-md-row flex-column gap__class ">
            <CardEnelytics
              imgcard={Mydescription[0].img1}
              description={Mydescription[0].descriptioncard1}
              title={Mydescription[0].title}
            />
            <CardEnelytics
              imgcard={Mydescription[1].img1}
              description={Mydescription[1].descriptioncard1}
              title={Mydescription[1].title}
            />
            <CardEnelytics
              imgcard={Mydescription[2].img1}
              description={Mydescription[2].descriptioncard1}
              title={Mydescription[2].title}
            />
            <CardEnelytics
              imgcard={Mydescription[3].img1}
              description={Mydescription[3].descriptioncard1}
              title={Mydescription[3].title}
            />
            <CardEnelytics
              imgcard={Mydescription[4].img1}
              description={Mydescription[4].descriptioncard1}
              title={Mydescription[4].title}
            />
            <CardEnelytics
              imgcard={Mydescription[5].img1}
              description={Mydescription[5].descriptioncard1}
              title={Mydescription[5].title}
            />
            <CardEnelytics
              imgcard={Mydescription[6].img1}
              description={Mydescription[6].descriptioncard1}
              title={Mydescription[6].title}
            />
            <CardEnelytics
              imgcard={Mydescription[7].img1}
              description={Mydescription[7].descriptioncard1}
              title={Mydescription[7].title}
            />
          </div>
        </div>

      </section>
      <div className="height__sections">

      </div>
      <div className="enerlytics__ideal py-3">
        <div className="container">
          <div className="row  mt-5 pt-lg-5   align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-7 my-0 my-lg-0 pe-lg-5">
              <div className="d-flex justify-content-lg-end justify-content-center">
                <div data-aos="fade-up" data-aos-duration="3000">
                  <img src={newEngineer} className="img__enerlytic" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-3 my-lg-0 position-relative">
              <div className="bg-white p-lg-3 p-2 thought-div">
                <h2 className="fw-700 mb-2">Platform Ideal for</h2>
                <p className="fw-700 mb-0">
                  If you are a <span className="text-primary">{newName}</span>
                </p>
                <p className="fw-500 fs-6 ">{newName2}</p>
              </div>
              {/* <ul className='p-0 ms-4 '>
                                <li >{Mydescription[4].listitem}</li>
                                <li >{Mydescription[4].listitem2}</li>
                                <li >{Mydescription[4].listitem3}</li>
                                <li >{Mydescription[4].listitem4}</li>
                                <li >{Mydescription[4].listitem5}</li>
                            </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enerlytics;
