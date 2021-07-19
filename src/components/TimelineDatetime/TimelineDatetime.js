import React, {  } from "react";
import "./TimelineDatetime.css";
function TimelineDatetime(props) {
  const { joinedDate } = props;
  return (
    <div className="datetime-item">
      <div className="dot"></div>
      <p className="datetime">{joinedDate}</p>
      <div className="line"></div>
    </div>
  );
}

export default TimelineDatetime;
