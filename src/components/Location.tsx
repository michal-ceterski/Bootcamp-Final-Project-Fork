import React from "react";
import './Location.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import { useRef } from "react";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useTranslation } from "react-i18next"

const Location = () => {
    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;
    const {t} =useTranslation()

    return (
        <div className="location_container">
            <h2>Hotel Sol</h2>
            <div className="text_container">{t('LocationText')}</div>
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