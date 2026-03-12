import BlogCard from "./BlogCard";

const BlogList = ({ blogs, onSelect }) => {
  if (!blogs.length) return <p>No blogs available.</p>;
  return (
    <div className="blog-list">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} onClick={onSelect} />)}
    </div>
  );
};

export default BlogList;