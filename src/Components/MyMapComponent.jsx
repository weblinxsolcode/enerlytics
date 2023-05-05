import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapContainerRef.current, {
      zoom: 16,
      center: { lat: 24.861497538763444, lng: 67.06638301644466 }
      
    });
    new window.google.maps.Marker({ position: { lat: 24.861497538763444, lng:  67.06638301644466}, map });
  }, []);
  
  return (
    <div>
      <div ref={mapContainerRef} style={{ height: "200px", width: "100%" }} />
      <script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAl6AXU7t86PWdpDVY4rxfMjezt3WzDnXM`}></script>
    </div>
  );
};

export default Map;