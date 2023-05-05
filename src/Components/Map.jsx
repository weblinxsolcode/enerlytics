import React,{useEffect, useRef} from 'react'
import { Wrapper } from "@googlemaps/react-wrapper";
import MyMapComponent from './MyMapComponent';

const Map = () => {
    const parentRef = useRef(null);

    useEffect(() => {
        // const child = parentRef.current.querySelector('.Map');
        // console.log(child);
        // if (child) {
        //   child.classList.add('my-class');
        // }
      
      
      
      
      },[]);
    return (
        <>
            <Wrapper  apiKey={"AIzaSyAl6AXU7t86PWdpDVY4rxfMjezt3WzDnXM"}>
                <div className="Map" ref={parentRef}> 
                <MyMapComponent />
                </div>
            </Wrapper>
        </>
    )
}

export default Map