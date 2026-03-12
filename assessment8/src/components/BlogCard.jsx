import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="card">
      <span className="tag">{blog.category}</span>
      <h3>{blog.title}</h3>
      <p className="meta">
        ✍ {blog.author} • {blog.readTime}
      </p>
    </div>
  );
}

export default BlogCard;