import React from "react";
import "./styles.css";
import Animated from "./Animated";

const VenueMap = () => {
  return (
    <Animated direction="right" duration={5000} onScroll={true} once={true}>
      <div className="map-card">
        <div className="map-header">
          <h3 className="font-esthetic">Venue Location</h3>
        </div>
        <div className="map-actions">
          <a
            href={`https://www.google.com/maps/dir//11.5559591,75.6710802/@11.5560027,75.670767,21z?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D`}
            className="btn-open"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-solid fa-map-location-dot"
              style={{
                fontSize: "1.5rem",
                verticalAlign: "middle",
                transform: "translateY(-2px)",
              }}
            ></i>
            Open in Google Maps
          </a>
        </div>
      </div>
    </Animated>
  );
};

export default VenueMap;
