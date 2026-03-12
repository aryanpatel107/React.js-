import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "React Basics for Beginners",
    author: "Krish Patel",
    readTime: "5 min read",
    category: "React"
  },
  {
    id: 2,
    title: "Understanding useState",
    author: "Neha Sharma",
    readTime: "4 min read",
    category: "Hooks"
  },
  {
    id: 3,
    title: "CSS Tips for Modern UI",
    author: "Amit Shah",
    readTime: "3 min read",
    category: "UI"
  }
];

function BlogList() {
  return (
    <div className="blogContainer">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;