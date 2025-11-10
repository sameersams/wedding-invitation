import React from "react";
import "./styles.css";
import Animated from "./Animated";

const WeddingDetails = () => {
  return (
    <div className="section section-details">
      <Animated direction="left" duration={5000}>
        <div className="bg-theme-card">
          <div className="couple-names">
            <p className="bismillah text-center">In the name of Allah</p>
            <h2 className="font-esthetic text-center">Sameer & Rasla</h2>
            <br />
            <p className="subtitle text-center">
              Together with our beloved families
            </p>
            <p className="subtitle invitation-text text-center">
              We joyfully invite you to celebrate the blessed union of our
              families as we join in marriage
            </p>
          </div>
          <h2 className="font-esthetic text-center mt-4">Wedding Ceremony</h2>
          <div className="details-grid">
            <div className="detail-item">
              <i className="fas fa-calendar-alt"></i>
              <h4>Date</h4>
              <p>Saturday, January 3, 2026</p>
            </div>
            <div className="detail-item">
              <i className="far fa-clock"></i>
              <h4>Nikah</h4>
              <p>4:00 PM</p>
              <p className="small">Please arrive 15 minutes early</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-glass-cheers"></i>
              <h4>Function</h4>
              <p>Starts after 4:00 PM</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Venue</h4>
              <p>Chackoth Meethal (House)</p>
              <p>Cherandathur (PO)</p>
              <p>Vadakara</p>
            </div>
            <div className="detail-item">
              <i
                className="fa-solid fa-shirt dress-icon"
                aria-hidden="true"
              ></i>
              <h4>Dress Code</h4>
              <p>Formal Attire</p>
              <p className="small">Traditional or Modern Formal Wear</p>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default WeddingDetails;
