import React from "react";
import "./MemberAvatar.css";
function MemberAvatar({ picture, name }) {
  return (
    <div className="avatar-box">
      <img className="avatar" src={picture} alt={`${name}'s avatar`} />
    </div>
  );
}

export default MemberAvatar;
