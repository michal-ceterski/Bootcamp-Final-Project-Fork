import React from "react";
import './Location.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import { useRef } from "react";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

const Location = () => {
    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;

    return (
        <div className="location_container">
            <h2>Hotel Sol</h2>
            <div className="text_container">The building, whose architecture refers to the style of a 
                seaside villa, is located on the main communication route 
                of the Tri-City, and at the same time right next to the 
                Aquapark and only 250 m from the sandy beach. The hotel 
                has 50 rooms. On its premises there is the Aquarella 
                Restaurant, serving European cuisine and 3 conference rooms.</div>
            <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "500px", width: "1000px"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                Hotel Sol <br /> Al. Nieznana 5, <br /> 01-100 Tajna Góra, <br /> Nibylandia
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Location;