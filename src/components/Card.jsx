import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Content(props) {
  return (
    <div className="card ">
      <img src={props.item.imageUrl} className="card--image" alt="" />

      <div className="card--content">
        <div className="card--location">
          <span>
            <LocationOnIcon fontSize="20" color="action" />
          </span>
          <p className="card--location--country">{props.item.location}</p>
          <a className="card--location--map" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.item.title}</h2>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--desc">{props.item.description}</p>
      </div>
    </div>
  );
}
