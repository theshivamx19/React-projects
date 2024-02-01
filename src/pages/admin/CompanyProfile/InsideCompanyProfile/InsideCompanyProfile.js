import React, { useEffect, useState } from 'react'
import "assets/css/CompanyProfile/CompanyProfile.css"
import BoldHeading from 'components/BoldHeading/BoldHeading';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
const InsideCompanyProfile = ({ data, info, bInfo, country, branchId }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDUUQPcnJ2yyGf8cr14xOMJE7qIz3SLwvw",
  });
  const [activeMarker, setActiveMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 40.3947365, lng: 49.6898045 });
  const [tooltip, setTooltip] = useState(false);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      setTooltip(true);
    }
    setActiveMarker(marker);
  };
  const closeTooTip = () => {
    setTooltip(false);
    setActiveMarker(null);
  }
  const handleMapClick = (event) => {
    // Update the center state based on the clicked position
    setCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    if (data) {
      const updatedMarkers = data.map((item,index) => {
          return {
            id: index,
            name:  `${item.city}`,
            position: { lat: Number(item.latitude), lng: Number(item.longitude) },
          };
        });

      setMarkers(updatedMarkers);
    }
  }, [data]);
console.log('markers',markers);
  return (
    <div className="col-xl-12 col-lg-8 col-md-12 mt-4" >
      <div className="profile-info">
        <div className="widget-header">
          <BoldHeading
            Boldheading="Company Location"
          />
        </div>
        <br />
        <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
        <div data-mdb-vector-map-init>

          <div className="container">
            
            <div style={{ height: "90vh", width: "100%" }}>
              {isLoaded ? (
                <GoogleMap
                 // center={{ lat: 40.3947365, lng: 49.6898045 }}
                 center={center}
                  zoom={3}
                  mapContainerStyle={{ width: "100%", height: "90vh" }}
                >
                  {typeof (data) !== 'undefined'
                    && data.length > 0 && markers !== 'undefined' && markers.map(({ id, name, position }) => (
                      <MarkerF
                        key={id}
                        position={position}
                        onMouseOver={() => handleActiveMarker(id)}
                        onMouseOut={() => handleActiveMarker()}
                      >
                        {activeMarker === id ? (
                          <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                            <div style={{ width:'100px',height:'20px',textAlign:'center', overflow:'hidden',fontWeight:'bold'}} onMouseLeave={() => closeTooTip()}>
                                {name}
                            </div>
                          </InfoWindowF>
                        ) : null}
                      </MarkerF>
                    ))}
                </GoogleMap>
              ) : null}
            </div></div></div>
          </div>
      </div>
    </div>
  )
}

export default InsideCompanyProfile