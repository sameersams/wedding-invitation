import React, { useState } from "react";
import "./styles.css";
import Animated from "./Animated";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw45rdNvdeEG4jGmefClfg9CfWOQ2qHVNn_5kFfTsNjyL-CP3eWvV5_YRnsAA2usjCd2g/exec";
  const [isLoaded, setIsLoaded] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoaded(true);
    fetch(SCRIPT_URL, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `Name=${formData.name}&Message=${formData.message}`,
    }).then(() => {
      setSubmitted(true);
      setFormData({ name: "", message: "" });
      setIsLoaded(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Animated direction="left" duration={5000} onScroll={true} once={true}>
      <div className="rsvp-card">
        <h3 className="font-esthetic">RSVP</h3>
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message or Wishes"
              className="form-textarea"
            />
          </div>
          <button type="submit" className="btn-open">
            {isLoaded ? (
              <div className="loader"></div>
            ) : (
              <>
                <i
                  className="fa-brands fa-telegram"
                  style={{
                    fontSize: "1.5rem",
                    verticalAlign: "middle",
                    transform: "translateY(-2px)",
                  }}
                ></i>
                Send RSVP
              </>
            )}
          </button>
          {submitted && (
            <div className="success-message">Thank you for your response!</div>
          )}
        </form>
      </div>
    </Animated>
  );
};

export default RSVP;
