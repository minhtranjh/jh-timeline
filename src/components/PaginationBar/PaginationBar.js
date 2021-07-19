import React, {  useEffect, useState } from "react";
import "./PaginationBar.css";
function PaginationBar({ currentPage, handlePagingListMember, totalPages }) {
  const [listLiTags, setListLiTags] = useState([]);
  useEffect(() => {
    pagingListMember();
  }, []);
  function pagingListMember(page = currentPage) {
    handlePagingListMember(page);
    renderListPageNumber(page);
  }

  function renderListPageNumber(page) {
    let listLiTag = [];
    let beforeCurrentPage = page - 1;
    let afterCurrentPage = page + 1;
    if (page > 1) {
      const prevButton = createPagingPrevButton(page);
      listLiTag.push(prevButton);
    }
    if (page > 2) {
      const pageNumber = createPageNumber(1);
      listLiTag.push(pageNumber);
    }
    if (page > 3) {
      const dots = createPagingDot("dot-r");
      listLiTag.push(dots);
    }
    if (page === totalPages) {
      beforeCurrentPage = beforeCurrentPage - 2;
    } else if (page === totalPages - 1) {
      beforeCurrentPage = beforeCurrentPage - 1;
    }
    if (page === 1) {
      afterCurrentPage = afterCurrentPage + 2;
    } else if (page === 2) {
      afterCurrentPage = afterCurrentPage + 1;
    }
    for (
      let pageNum = beforeCurrentPage;
      pageNum <= afterCurrentPage;
      pageNum++
    ) {
      if (pageNum > totalPages) {
        continue;
      }
      if (pageNum === 0) {
        pageNum = pageNum + 1;
      }
      const pageNumber = createPageNumber(pageNum, page);
      listLiTag.push(pageNumber);
    }
    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        const dots = createPagingDot("dot-l");
        listLiTag.push(dots);
      }
      const pageNumber = createPageNumber(totalPages);
      listLiTag.push(pageNumber);
    }
    if (page < totalPages) {
      const nextBtn = createPagingNextButton(page);
      listLiTag.push(nextBtn);
    }
    setListLiTags(listLiTag);
  }
  function createPagingPrevButton(page) {
    const liTag = (
      <li
        key="prev"
        onClick={() => pagingListMember(page - 1)}
        className="page-btn prev"
      >
        <span>
          <i className="fas fa-angle-left"></i>
          Prev
        </span>
      </li>
    );
    return liTag;
  }
  function createPagingNextButton(page) {
    const liTag = (
      <li
        key="next"
        onClick={() => pagingListMember(page + 1)}
        className="page-btn next"
      >
        <span>
          Next
          <i className="fas fa-angle-left"></i>
        </span>
      </li>
    );
    return liTag;
  }
  function createPageNumber(num, page) {
    const liTag = (
      <li
        key={num}
        onClick={() => pagingListMember(num)}
        className={page === num ? "page-item is-active" : "page-item"}
      >
        <span> {num}</span>
      </li>
    );
    return liTag;
  }
  function createPagingDot(key) {
    const liTag = (
      <li key={key} className="page-item">
        <span>...</span>
      </li>
    );
    return liTag;
  }
  return (
    <div className="pagination-bar">
      <ul className="page-list">{listLiTags}</ul>
    </div>
  );
}

export default PaginationBar;
