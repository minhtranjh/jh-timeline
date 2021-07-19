import React, {  } from "react";
import RollingDownMemberList from "../RollingDownMemberList/RollingDownMemberList";
import "./TimelineDetail.css";
function TimelineDetail (props) {
    const { isRight, members } = props;
    return (
      <div className={isRight ? "timeline-card left" : "timeline-card right"}>
        <div className="card-title">
          <p>
            {" "}
            {members.length > 1
              ? `${members.length} Members `
              : members[0].name + " "}
            has joined
          </p>
        </div>
          <RollingDownMemberList members={members}/>
      </div>
    );
}

export default TimelineDetail;
