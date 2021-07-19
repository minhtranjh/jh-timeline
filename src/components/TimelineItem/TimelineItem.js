import React, {  } from "react";
import TimelineDetail from "../TimelineDetail/TimelineDetail";
import TimelineDatetime from "../TimelineDatetime/TimelineDatetime";
import "./TimelineItem.css";
function TimelineStreamItem (props) {
  const { members, isRight } = props;

    return (
      <div className="timeline-item">
        <TimelineDatetime joinedDate={members.joinedDate} />
        <TimelineDetail members={members.members} isRight={isRight} />
      </div>
    );
}

export default TimelineStreamItem;
