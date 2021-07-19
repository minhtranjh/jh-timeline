import React, {  } from "react";
import { NavLink } from "react-router-dom";
import "./RollingDownMemberList.css";
function RollingDownMemberList(props) {
    const { members } = props;
    return (
      <div className="popup-details">
        {members.map((item) => (
          <div key={item.id} className="popup-item">
            <NavLink className="popup-link" to={`/member/${item.id}`}>
              <p>Name :{item.name}</p>
              <p>Age : {item.age}</p>
              <p>Position : {item.position}</p>
            </NavLink>
          </div>
        ))}
      </div>
    );
}

export default RollingDownMemberList;
