import React, { useState, useEffect, useContext } from "react";
import { MembersContext } from "../../context/MembersContext";
import TimelineStream from "../../components/TimelineTree/TimelineTree";
import "./TimelinePage.css";
function TimelinePage() {
  const [filtedListMembers, setFilterdListMembers] = useState([]);
  const { listMembers } = useContext(MembersContext);
  useEffect(() => {
    const listData = groupMemberDetailByDate(listMembers);
    setFilterdListMembers(listData);
  }, []);
  function groupMemberDetailByDate(list) {
    const array = [];
    list.forEach((item, i) => {
      let dates = list[i].joinedDate.slice(0, 10);
      if (!array[dates]) {
        array[dates] = [];
      }
      array[dates].push(list[i]);
    });
    const groupArrays = Object.keys(array).map((date) => {
      return {
        joinedDate: date,
        members: array[date],
      };
    });
    return groupArrays;
  }
  return (
    <div className="container">
      <div className="timeline">
        <div className="timeline-title">
          <p>A Story Of</p>
          <h1>Journey Horizon</h1>
        </div>
        <TimelineStream filtedListMembers={filtedListMembers} />
      </div>
    </div>
  );
}

export default TimelinePage;
