import React from "react";
import styled from "styled-components";
import StyledLink from "../atoms/StyledLink";
import StyledButton from "../atoms/StyledButton";
import { format } from "date-fns";
import Link from "next/link";
import { createSlug } from "../../lib/createSlug";

const EventImg = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-top-left-radius: 0.625rem !important;
  border-top-right-radius: 0.625rem !important;
  max-height: 357px;
  a {
    display: block;
  }

  img {
    width: 100%;
    transition: all 0.3s linear;
  }
`;

const EventListItem = styled.div`
  position: relative;
  background-clip: padding-box;

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  color: #828393;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid #eaeaec;
  border-radius: 0.625rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(76, 78, 100, 0.22);
  &:hover {
    ${EventImg} img {
      transform: scale(1.1);
    }
  }
  .card-body {
    padding: 1.375rem 1.25rem;
  }
`;

const EventItem = ({ event }) => {
  const formattedDate = format(new Date(event.attributes.Date), "yyyy-MM-dd HH:mm:ss");
  const slug = createSlug(event.attributes.Title + "-" + event.id);

  return (
    <div className="col-xl-6 col-md-6 mb-4">
      <EventListItem>
        <EventImg className="text-center">
          <img className="img-fluid" src={event.attributes.Media.data.attributes.url} />
        </EventImg>
        <div className="card-body">
          <h4 className="mb-2 pb-1">{event.attributes.Title}</h4>
          <p className="small">{event.attributes.Description}</p>
          <div className="row mb-3 g-3">
            <div className="col-6">
              <div className="d-flex">
                <div className="avatar flex-shrink-0 me-2">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="ti ti-calendar-event ti-md"></i>
                  </span>
                </div>
                <div>
                  <h6 className="mb-0 text-nowrap">{formattedDate} </h6>
                  <small>Etkinlik Tarihi</small>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="avatar flex-shrink-0 me-2">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="ti ti-clock ti-md"></i>
                  </span>
                </div>
                <div>
                  <h6 className="mb-0 text-nowrap">32 minutes</h6>
                  <small>Duration</small>
                </div>
              </div>
            </div>
          </div>
          <Link href={`/event/${slug}`} className="w-100">
            <StyledButton variant="primary" className="w-100">
              Detayları Gör
            </StyledButton>
          </Link>
        </div>
      </EventListItem>
    </div>
  );
};

export default EventItem;
