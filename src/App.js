import React, { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/Countdown";
import VenueMap from "./components/VenueMap";
import RSVP from "./components/RSVP";
import Calendar from "./components/Calendar";
import "./App.css";
import sound from "./assests/Beloved(chosic.com).mp3";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guestName] = useState("");

  const handleOpen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpened(true);
    }, 3000);
  };

  useEffect(() => {
    if (isOpened) {
      playAudio();
    }
  }, [isOpened]);

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="app">
      {!isOpened && (
        <Welcome
          guestName={guestName}
          onOpen={handleOpen}
          isLoading={isLoading}
        />
      )}

      {isOpened && (
        <div className="main-content">
          <WeddingDetails />
          <Countdown />
          <Calendar />
          <VenueMap />
          <RSVP />
        </div>
      )}
    </div>
  );
}

export default App;
