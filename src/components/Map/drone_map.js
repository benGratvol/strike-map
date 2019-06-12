import React from "react";
import { Map as LeafMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import data from "../json-data/Drone-data.json";

function Map() {
  return (
    <div>
      <LeafMap
        center={[data.strike[0].lat, data.strike[0].lon]}
        zoom={3}
        maxZoom={10}
        minZoom={2}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        {data.strike.map(item => {
          return (
            <Marker key={item._id} position={[item.lat, item.lon]}>
              <Popup>
                <h2>
                  Location : {item.location} | {item.country}
                </h2>
                <p>
                  <h4>Description </h4> {item.bij_summary_short}
                </p>
                <h4>Strike Impact</h4>
                <p>Deaths : {item.deaths}</p>
                <p>Injuries : {item.injuries}</p>
                <p>Children : {item.children}</p>
                <p>Civilians : {item.civilians} </p>
                <p>
                  <h4>Narrative</h4>
                  {item.narrative}
                </p>
                <p style={{ marginLeft: "200px" }}>
                  Date : {item.date.split("T")[0]}{" "}
                </p>
              </Popup>
            </Marker>
          );
        })}
      </LeafMap>
    </div>
  );
}
export default Map;
