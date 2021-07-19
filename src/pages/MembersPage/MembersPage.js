import React, { useContext } from "react";
import MemberList from "../../components/MemberList/MemberList";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import { MembersContext } from "../../context/MembersContext";
import "./MembersPage.css";
function MembersPage() {
  const { pagedList, currentPage, handlePagingListMember, totalPages } =
    useContext(MembersContext);
  return (
    <div className="members">
      <div className="list-head">
        <h2 className="list-title">Members</h2>
        <p className="member-count">29 Total</p>
      </div>
      <MemberList listMembers={pagedList} />
      <PaginationBar
        currentPage={currentPage}
        handlePagingListMember={handlePagingListMember}
        totalPages={totalPages}
      />
      )
    </div>
  );
}

export default MembersPage;
