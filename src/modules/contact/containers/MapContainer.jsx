import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 41.35970683335879,
    lng: 69.28026402943708
};

const position = {
    lat: 41.35970683335879,
    lng: 69.28026402943708
};

const MapContainer = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyD8_PZ3SisTw0hhm-MvUwXjA4wpfPmYg58">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <Marker position={position} />
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;
