import React from "react";
import MemberListItem from "../MemberListItem/MemberListItem";
import "./MemberList.css";
function MemberList({ listMembers }) {
  return (
    <div className="list-wrapper">
      <table className="list-members">
        <thead>
          <tr>
            <th>No.</th>
            <th>Basic Info</th>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listMembers.map((item, index) => (
            <MemberListItem
              index={index}
              memberDetail={item}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MemberList;
