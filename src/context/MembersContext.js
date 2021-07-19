import React, { useEffect, useState } from "react";
import data from "../data/data";
export const MembersContext = React.createContext();
function MembersProvider({ children }) {
  const [listMembers, setListMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pagedList, setPagedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchListMember();
  }, []);
  function fetchListMember() {
    const newData = data.sort((a, b) => {
      return new Date(a.joinedDate) - new Date(b.joinedDate);
    });
    const pagedList = newData.slice(0, 5);
    setListMembers(newData);
    setTotalPages(10);
    setPagedList(pagedList);
  }
  function handlePagingListMember(page) {
    const newList = listMembers;
    const pagedList = newList.slice((page - 1) * 5, 5 * page);
    setCurrentPage(page);
    setPagedList(pagedList);
  }
  function findMemberById(id) {
    let user;
    listMembers.forEach((item) => {
      if (item.id === id) {
        user = item;
      }
    });
    return user;
  }
  return (
    <MembersContext.Provider
      value={{
        totalPages,
        currentPage,
        listMembers,
        pagedList,
        findMemberById: findMemberById,
        handlePagingListMember: handlePagingListMember,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
}

export default MembersProvider;
