import React from "react";
import MemberAvatar from "../MemberAvatar/MemberAvatar";
import MemberDetailInfoBox from "../MemberDetailInfoBox/MemberDetailInfoBox";
import "./MemberDetail.css";
function MemberDetail({ memberDetails }) {
  return (
    <div className="member-detail-wrapper">
      <div className="member-detail">
        <div className="detail-left">
          <div className="avatar-wrapper">
            <MemberAvatar
              picture={memberDetails.picture}
              name={memberDetails.name}
            />
          </div>
        </div>
        <div className="detail-right">
          <MemberDetailInfoBox memberDetails={memberDetails} />
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
