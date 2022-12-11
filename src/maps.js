import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './App.css';

export default function Api() {
    const { isLoaded} = useLoadScript ({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>
    return <Map />;
}

function Map() {
    const center = useMemo( () =>  ({ lat: 30.266666, lng: 	-97.733330 }), []);

    return (
    <GoogleMap 
    zoom={10} 
    center={center}
    mapContainerClassName="map-container">
    <Marker 
    position={{lat: 30.266666, lng: -97.733330}}/>
    </GoogleMap>
)}