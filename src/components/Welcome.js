import React from "react";
import "./styles.css";
import Animated from "./Animated";

const Welcome = ({ guestName, onOpen, isLoading }) => {
  return (
    <Animated direction="up" duration={5000} onScroll={true} once={true}>
      <div
        className="welcome-card"
        style={{
          backgroundImage: "url('/images/couple-wedding.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#faf8f6",
        }}
      >
        <div className="welcome-header">
          <div className="royal-text-wrapper">
            <i className="fa-solid fa-crown royal-crown"></i>
            <p className="small-text italic-text royal-title">
              <span className="royal-line left"></span>
              The Wedding of
              <span className="royal-line right"></span>
            </p>
          </div>
        </div>
        <div className="welcome-content welcome-center names-container">
          <h1 className="font-esthetic">Sameer Ayoob</h1>
          <h1 className="font-esthetic names-separator">&</h1>
          <h1 className="font-esthetic">Rasla Ali</h1>
        </div>
        <div className="welcome-footer">
          <p className="guest-text italic-text">
            Dear {guestName || "Honored Guest"},
          </p>
          <button
            className={`btn-open ${isLoading ? "loading" : ""}`}
            onClick={onOpen}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <>
                <span className="envelope-wrapper" aria-hidden="true">
                  <i className="fa-solid fa-envelope envelope-closed"></i>
                  <i className="fa-solid fa-envelope-open envelope-open"></i>
                </span>
                Open Invitation
              </>
            )}
          </button>
        </div>
      </div>
    </Animated>
  );
};

export default Welcome;
