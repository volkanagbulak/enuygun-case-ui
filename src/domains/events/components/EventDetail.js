import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { createSlug } from "../../../lib/createSlug";
import StyledButton from "../../../components/atoms/StyledButton";

const EventDetailItem = ({ events, eventId }) => {
  const formattedDate = format(new Date(events.Date), "yyyy-MM-dd HH:mm:ss");
  const slug = createSlug(events.Title + "-" + eventId);
  return (
    <>
      <div className="card h-100">
        <img className="card-img-top" src={events.Media.data.attributes.url} alt="iPhone-bg" />
        <div className="card-body">
          <h4 className="mb-2">{events.Title}</h4>
          <p className="fw-medium">Etkinlik Tarihi: {formattedDate}</p>
          <p className="my-3">{events.Description}</p>
          <div className="d-flex justify-content-between ">
            <div className="d-flex mb-3 pb-1 align-items-center">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Yer</h6>
                </div>
                <div className="user-progress d-flex align-items-center gap-1">
                  <h6 className="mb-0 text-danger">{events.Location}</h6>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 pb-1 align-items-center">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Kapasite</h6>
                </div>
                <div className="user-progress d-flex align-items-center gap-1">
                  <h6 className="mb-0 text-danger">{events.Capacity}</h6>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 pb-1 align-items-center">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Fiyat</h6>
                </div>
                <div className="user-progress d-flex align-items-center gap-1">
                  <h6 className="mb-0 text-danger">{events.Price}</h6>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 pb-1 align-items-center">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Son Kayıt Tarihi</h6>
                </div>
                <div className="user-progress d-flex align-items-center gap-1">
                  <h6 className="mb-0 text-danger">{events.RegistrationDeadline}</h6>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={events.Capacity > 0 ? `/event/${eventId}/reservation` : ""}
            className={`w-100 ${events.Capacity <= 0 ? "disabled" : ""}`}
            onClick={(e) => events.Capacity <= 0 && e.preventDefault()}
          >
            <StyledButton variant={events.Capacity > 0 ? "primary" : "secondary"} className="w-100" disabled={events.Capacity === 0}>
              {events.Capacity > 0 ? "Bilet Satın Al" : "Biletler Tükendi"}
            </StyledButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventDetailItem;
