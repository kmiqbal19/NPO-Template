import React from "react";
import { urlFor } from "../../client";
import "./gallerycomponent.scss";
function GalleryComponent({ post }) {
  return (
    <div className="gallery-post__container">
      <div className="gallery-post__img">
        <img src={urlFor(post.imageurl)} alt="post-img" />
      </div>
      <div className="gallery-post__text">
        <p>{post.projecttitle}</p>
        <p>{post.projectdesc}</p>
        <a href={post.projectfburl}>Learn more...</a>
      </div>
    </div>
  );
}

export default GalleryComponent;
