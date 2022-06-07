import React from "react";
import { urlFor } from "../../client";
import "./gallerycomponent.scss";
function GalleryComponent({ post }) {
  return (
    <div className="gallery-post__container">
      <img src={urlFor(post.imageurl)} alt="post-img" />
      <p>{post.projecttitle}</p>
      <a href={post.projectfburl}>Details</a>
    </div>
  );
}

export default GalleryComponent;
