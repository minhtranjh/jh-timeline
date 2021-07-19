import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./MemberListItem.css";
import MemberAvatar from "../MemberAvatar/MemberAvatar";
import { MembersContext } from "../../context/MembersContext";
function MemberListItem({ memberDetail, index } ) {
  const {currentPage} = useContext(MembersContext)
  return (
    <tr>
      <td>{5 * (currentPage - 1) + (index + 1)}</td>
      <td>
        <div className="basic-info">
          <div className="small-avatar">
            <MemberAvatar
              picture={memberDetail.picture}
              name={memberDetail.name}
            />
          </div>{" "}
          <div className="info">
            <p className="name">{memberDetail.name}</p>
            <p className="email">{memberDetail.email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="position">{memberDetail.position}</p>
      </td>
      <td>
        <NavLink
          className="member-link"
          to={{
            pathname: `/member/${memberDetail.id}`,
          }}
        >
          Details
        </NavLink>
      </td>
    </tr>
  );
}

export default MemberListItem;
