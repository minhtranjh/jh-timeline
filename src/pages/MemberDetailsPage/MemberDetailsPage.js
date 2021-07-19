import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MemberDetail from "../../components/MemberDetail/MemberDetail";
import { MembersContext } from "../../context/MembersContext";

function MemberDetailsPage() {
  const { id } = useParams();
  const [memberDetails, setMemberDetails] = useState({});
  const { findMemberById } = useContext(MembersContext);
  useEffect(() => {
    const memberDetails = getMemberDetailById(id);
    setMemberDetails(memberDetails);
  }, [id]);
  function getMemberDetailById(id) {
    const memberDetails = findMemberById(id);
    return memberDetails;
  }
  return <MemberDetail memberDetails={memberDetails} />;
}
export default MemberDetailsPage;
