import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '30vw',
  height: '350px',
};

const options = {
  zoomControl: true,
};

const Location = () => {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.AIzaSyB4VefQ8ebgMAgNDP0MEWokIEGSBuQq,
  });

  useEffect(() => {
    // Check for geolocation support
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Do something with the location data, e.g., display on a map
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);

          // Set the markers for the map
          const locations = [{ lat, lng }];

          if (map) {
            setMarkers(
              locations.map((location) => new window.google.maps.Marker({
                position: location,
                map: map,
                title: `Latitude: ${lat}, Longitude: ${lng}`,
              }))
            );
          }
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g., user denied location sharing permissions
          console.error("Error getting user location:", error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by this browser.");
    }
  }, [map]);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <React.Fragment>
      {/* <div>
        {markers.length > 0 && (
          <p>
            Latitude: {markers[0].getPosition().lat()}, Longitude: {markers[0].getPosition().lng()}
          </p>
        )}
      </div> */}
      <div>
        {/* <p>User's Location</p> */}
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={options}
        zoom={12}
        center={markers.length > 0 ? markers[0].getPosition() : { lat: 0, lng: 0 }}
        onLoad={(map) => setMap(map)}
      ></GoogleMap>
    </React.Fragment>
  );
};

export default Location;
