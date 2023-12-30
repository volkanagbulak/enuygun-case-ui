import React, { useEffect, useState } from "react";
import { logEvent } from "../lib/logger";
import EventList from "../domains/events/components/EventList";
import { getAllEvents } from "../domains/events/services/eventService";
import ListPagination from "../components/molecules/ListPagination";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 4, pageCount: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      setError(null);

      const eventsData = await getAllEvents(page, pagination.pageSize);

      setEvents(eventsData.data);
      setPagination({
        page: eventsData.meta.pagination.page,
        pageSize: eventsData.meta.pagination.pageSize,
        pageCount: eventsData.meta.pagination.pageCount,
        total: eventsData.meta.pagination.total,
      });

      logEvent("EventList_Listed", { eventsData });
    } catch (error) {
      setError("Error getting events");
      console.error("Error getting events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pagination.page);
  }, [pagination.page]);

  const handlePageChange = async (newPage) => {
    try {
      setEvents([]);
      await fetchData(newPage);
    } catch (error) {
      console.error("Error handling page change", error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <div className="container my-5">
            <EventList events={events} />
            <ListPagination pagination={pagination} onPageChange={handlePageChange} />
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
