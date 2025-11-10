import React from "react";
import "./styles.css";
import Animated from "./Animated";

const Calendar = () => {
  const eventDetails = {
    title: "Sameer & Rasla's Wedding",
    description: "Join us in celebrating our special day!",
    location: "Chackoth Meethal, Cherandathur, Vadakara",
    // Start: January 3, 2026 at 4:00 PM (local time)
    startDate: "2026-01-03T16:00:00",
    // End: January 3, 2026 at 10:00 PM (local time)
    endDate: "2026-01-03T22:00:00",
  };

  const createGoogleCalendarUrl = () => {
    const { title, description, location, startDate, endDate } = eventDetails;
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Format local date/time as YYYYMMDDTHHMMSS (no timezone Z) so Google Calendar preserves local time
    const pad = (n) => String(n).padStart(2, "0");
    const formatDateLocal = (d) => {
      return (
        d.getFullYear() +
        pad(d.getMonth() + 1) +
        pad(d.getDate()) +
        "T" +
        pad(d.getHours()) +
        pad(d.getMinutes()) +
        pad(d.getSeconds())
      );
    };

    // include user's timezone so Google shows the correct local time
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatDateLocal(start)}/${formatDateLocal(
      end
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
      location
    )}&ctz=${encodeURIComponent(timeZone)}`;
  };

  // ICS download removed per request; only Google Calendar link is provided

  return (
    <Animated direction="right" duration={5000} onScroll={true} once={true}>
      <div className="calendar-card">
        <h3 className="font-esthetic">Save the Date</h3>
        <div className="calendar-buttons">
          <button className="btn-calendar">
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-calendar"
            >
              <i className="far fa-calendar"></i>
              Add to Google Calendar
            </a>
          </button>
        </div>
      </div>
    </Animated>
  );
};

export default Calendar;
