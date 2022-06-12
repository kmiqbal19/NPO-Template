import React from "react";
import { urlFor } from "../../client";
import "./gallerycomponent.scss";
import { motion } from "framer-motion";
function GalleryComponent({ post }) {
  return (
    <div className="gallery-post__container">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        className="gallery-post__img"
      >
        <img src={urlFor(post.imageurl)} alt="post-img" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ delay: 0.4 }}
        className="gallery-post__text"
      >
        <p>{post.projecttitle}</p>
        <p>{post.projectdesc}</p>
        <a href={post.projectfburl}>Learn more...</a>
      </motion.div>
    </div>
  );
}

export default GalleryComponent;
