import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";

function Location() {
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const markers = [
    // { address: "Nairobi", lat: -1.304, lng: 36.8774 },
    { address: "Crewsoft Technologies", lat: -0.282836, lng: 36.07522 },
    { address: "Nakuru", lat: -0.303099, lng: 36.080025 },
  ];
  // const google = (window.google = window.google ? window.google : {});
  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };
  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  return (
    <div className="w-full bg-gray-200">
      <div className="w-full  py-8 text-center">
        <h6 className="text-red-400 font-medium">OUR LOCATIONS</h6>
        <h3 className="text-blue-800 text-xl font-bold">Our Office</h3>
      </div>
      <div className="w-full lg:px-16 pb-3 h-[15rem] lg:h-[30rem] mb-5">
        {!isLoaded ? (
          <h1 className="text-center font-bold text-gray-700 py-20">
            Loading map data...
          </h1>
        ) : (
          <GoogleMap
            mapContainerClassName="w-full h-full rounded-md"
            onLoad={onMapLoad}
            onClick={() => setIsOpen(false)}
          >
            {markers.map(({ address, lat, lng }, ind) => (
              <Marker
                key={ind}
                position={{ lat, lng }}
                onClick={() => {
                  handleMarkerClick(ind, lat, lng, address);
                }}
              >
                {isOpen && infoWindowData?.id === ind && (
                  <InfoWindow
                    onCloseClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <h3 className="p-1 text-gray-600 font-medium ">
                      {infoWindowData.address}
                    </h3>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default Location;
