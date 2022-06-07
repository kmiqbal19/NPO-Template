import React, { useEffect, useState } from "react";

function PaginationEx() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const skip = (page - 1) * itemsPerPage;
  const arr = [
    "iqbal1",
    "iqbal2",
    "iqbal3",
    "iqbal4",
    "iqbal5",
    "iqbal6",
    "iqbal7",
    "iqbal8",
    "iqbal9",
    "iqbal10",
    "iqbal11",
  ];
  const pageNum = Math.ceil(arr.length / itemsPerPage);
  useEffect(() => {
    const displayPost = arr.slice(skip, skip + itemsPerPage);
    setPost(displayPost);
  }, [page]);
  return (
    <div style={{ marginTop: "20rem" }}>
      {post.map((item, i) => {
        return <li key={i + "test"}>{item}</li>;
      })}
      <button onClick={() => setPage((page) => (page === 1 ? page : page - 1))}>
        Prev
      </button>
      <button
        onClick={() => setPage((page) => (page === pageNum ? page : page + 1))}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationEx;
