import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const Map = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })


    const fastBoxCoords = { lat: -22.22082448406507, lng: -49.95289717235763 };


    return isLoaded ? <GoogleMap zoom={16} center={fastBoxCoords} mapContainerStyle={{ width: '100%', height: '400px', margin: '3rem 0' }}>
        <Marker position={fastBoxCoords} title={"Oficina FastBox"} />
    </GoogleMap> : null;
};

export default Map;