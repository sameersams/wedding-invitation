import React, { useState, useEffect } from "react";
import "./styles.css";
import "./weddingDayStyles.css";
import Animated from "./Animated";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  let [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    // Use local time: January 3, 2026 at 16:00 (4:00 PM)
    const weddingDate = new Date(2026, 0, 3, 16, 0, 0);

    const calculateTimeLeft = () => {
      const difference = weddingDate - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsWeddingDay(true);
      }
    };

    // run once immediately to avoid initial 1s delay
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Animated direction="up" duration={5000} onScroll={true} once={true}>
      <div className="countdown-card">
        {!isWeddingDay ? (
          <>
            <h3 className="font-esthetic">Counting Down to the Big Day</h3>
            <div className="countdown-grid">
              <div className="count-item">
                <div className="count-value">{timeLeft.days}</div>
                <div className="count-label">Days</div>
              </div>
              <div className="count-item">
                <div className="count-value">{timeLeft.hours}</div>
                <div className="count-label">Hours</div>
              </div>
              <div className="count-item">
                <div className="count-value">{timeLeft.minutes}</div>
                <div className="count-label">Minutes</div>
              </div>
              <div className="count-item">
                <div className="count-value">{timeLeft.seconds}</div>
                <div className="count-label">Seconds</div>
              </div>
            </div>
          </>
        ) : (
          <div className="wedding-day-message">
            <div className="message-icon">💑</div>
            <h2 className="message-title font-esthetic">
              Today is Our Special Day!
            </h2>
            <p className="message-text">
              Join us as we begin our journey of forever together
            </p>
            <div className="message-decoration">
              <span className="decoration-heart">♥</span>
              <span className="decoration-date">03.01.2026</span>
              <span className="decoration-heart">♥</span>
            </div>
          </div>
        )}
      </div>
    </Animated>
  );
};

export default Countdown;
