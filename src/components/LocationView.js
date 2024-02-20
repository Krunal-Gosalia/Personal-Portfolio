import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import PropTypes from "prop-types";

//{ status, message, _onValidated }
const LocationView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 34.113080, lng: -118.268910 }), []);

  return (
    !isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap
        mapContainerClassName="map-container border-theme"
        center={center}
        zoom={8}
      >
        <MarkerF key="current-address"
          name="Los Angeles" position={{ lat: 34.113080, lng: -118.268910 }} visible={true} />
      </GoogleMap>
    )
  )
}

export default LocationView;

LocationView.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func,
};
