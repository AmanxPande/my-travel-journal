import React from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function Navbar() {
  return (
    <nav>
      <span className="travel--icon">
        <TravelExploreIcon fontSize="large" />
      </span>
      <h3 className="nav--text">my travel journal</h3>
    </nav>
  );
}
