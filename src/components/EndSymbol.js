import React from "react";
import "./EndSymbol.css";
import Animated from "./Animated";

const EndSymbol = () => {
  return (
    <div className="section section-end-symbol">
      <Animated direction="up" duration={700}>
        <div className="end-sign" aria-hidden="true">
          <div className="end-monogram">
            <span className="initial">S</span>
            <span className="sep">♥</span>
            <span className="initial">R</span>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default EndSymbol;
