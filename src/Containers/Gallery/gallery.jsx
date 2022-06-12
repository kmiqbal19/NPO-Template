import React, { useState, useEffect } from "react";
import "./gallery.scss";
import { client } from "../../client";
import { GalleryComponent, Footer } from "../../Components";

function Gallery() {
  const [galleryPost, setGalleryPost] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setloading] = useState(false);
  const ITEMS_PER_PAGE = 4;
  const skip = ITEMS_PER_PAGE * (page - 1);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const query = "*[_type == 'gallery'] | order(_createdAt)";
      const res = await client.fetch(query);

      setPageCount(Math.ceil(res.length / ITEMS_PER_PAGE));
      const posts = await res.slice(skip, skip + ITEMS_PER_PAGE);
      setGalleryPost(posts);
      setloading(false);
    };
    fetchPosts();
  }, [page, skip]);

  return (
    <>
      {loading ? (
        <div className="loading__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "1rem",
              background: "none",
              display: "block",
              shapeRendering: "auto",
            }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="30" cy="50" fill="#93dbe9" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
              ></animate>
            </circle>
            <circle cx="70" cy="50" fill="#689cc5" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="0s"
              ></animate>
            </circle>
            <circle cx="30" cy="50" fill="#93dbe9" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="fill-opacity"
                values="0;0;1;1"
                calcMode="discrete"
                keyTimes="0;0.499;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </circle>
          </svg>
          <span>Loading.....</span>
        </div>
      ) : (
        <div className="gallery__container">
          <div className="gallery__content">
            {galleryPost.map((post, index) => {
              return (
                <GalleryComponent post={post} key={`galleryItem-${index}`} />
              );
            })}
          </div>
          <div className="gallery__pagination-bar">
            <button
              disabled={page === 1}
              onClick={() => setPage((page) => (page === 1 ? page : page - 1))}
            >
              Prev
            </button>
            <select value={page} onChange={(e) => setPage(e.target.value)}>
              <optgroup label="page">
                {Array(pageCount)
                  .fill(null)
                  .map((_, i) => {
                    return <option key={`page${i + 1}`}>{i + 1}</option>;
                  })}
              </optgroup>
            </select>
            <button
              disabled={page === pageCount}
              onClick={() =>
                setPage((page) => (page === pageCount ? page : page + 1))
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Gallery;
