import React, { useState, useEffect } from "react";
import "./gallery.scss";
import { client } from "../../client";
import { GalleryComponent } from "../../Components";
import Pagination from "react-sanity-pagination";
function Gallery() {
  const [galleryPost, setGalleryPost] = useState([]);
  const ITEMS_PER_PAGE = 3;
  const itemsToSend = [];
  useEffect(() => {
    const fetchPosts = async () => {
      const query = "*[_type == 'gallery']";
      const res = await client.fetch(query);
      console.log(res);
      itemsToSend.push(...res);
    };
    fetchPosts();
  }, []);
  const action = (page, range, items) => {
    console.log(`📄 Page: ${page}, 🌀 Items: `, items);
    // Update State
    setGalleryPost(items);
  };
  return (
    <div className="gallery__container">
      <div>
        {galleryPost.map((post, index) => {
          return <GalleryComponent post={post} key={`galleryItem-${index}`} />;
        })}
      </div>

      <Pagination
        items={itemsToSend}
        action={action}
        postsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}

export default Gallery;
