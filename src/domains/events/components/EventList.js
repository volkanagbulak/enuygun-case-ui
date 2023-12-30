import React from "react";
import EventItem from "../../../components/molecules/EventItem";

const EventList = ({ events }) => {
  const generateRandomKey = () => Math.random().toString(36).substr(2, 9);

  return (
    <div className="row">
      {events.map((event) => (
        <EventItem event={event} key={generateRandomKey()} />
      ))}
    </div>
  );
};

export default EventList;
