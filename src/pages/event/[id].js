import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getId } from "../../lib/createSlug";
import { getSingleEvents } from "../../domains/events/services/eventService";
import EventDetailItem from "../../domains/events/components/EventDetail";

const EventDetail = () => {
  const router = useRouter();

  const eventId = getId(router.query);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (typeof eventId !== "number" || isNaN(eventId)) {
      return;
    }
    const fetchData = async () => {
      try {
        const eventsData = await getSingleEvents(eventId);
        setEventData(eventsData.data.attributes);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchData();
  }, [eventId]);

  return <div className="container my-5">{eventData ? <EventDetailItem events={eventData} eventId={eventId} /> : <p>Loading...</p>}</div>;
};

export default EventDetail;
