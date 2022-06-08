import React, { useState, useEffect } from "react";
import "./gallery.scss";
import { client } from "../../client";
import { GalleryComponent } from "../../Components";

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
    <div className="gallery__container">
      <div className="gallery__content">
        {loading && <h1>loading...</h1>}
        {galleryPost.map((post, index) => {
          return <GalleryComponent post={post} key={`galleryItem-${index}`} />;
        })}
      </div>
      <div className="gallery__pagination-bar">
        <button
          onClick={() => setPage((page) => (page === 1 ? page : page - 1))}
        >
          Prev
        </button>
        <button
          onClick={() =>
            setPage((page) => (page === pageCount ? page : page + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
