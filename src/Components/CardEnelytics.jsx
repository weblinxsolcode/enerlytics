import React,{useState} from 'react'

const CardEnelytics = (props) => {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    return (
        <>
            <div onMouseEnter={ToggleClass} onMouseLeave={ToggleClass} className={ isActive ? " card__enerlytics py-4 px-3 " : "card__fullwidth card__enerlytics py-4 px-3 "}>
                <div className="d-flex justify-content-center">
                    <img src={"img/"+props.imgcard} alt="" />

                </div>
                <p className="text-center mb-0 py-2 text-dark fw-600">{props.title}</p>
                <p className={ isActive ?  "text-center text-muted px-4 myclass" : "text-center text-muted px-4 myclass2"} >
                    {props.description}</p>
            </div>
        </>
    )
}

export default CardEnelytics