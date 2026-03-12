import { useState } from "react";
import "./App.css";

const posts = [
  {
    id: 1,
    tag: "React",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "React Basics for Beginners",
    desc: "Learn components, props, state and how React builds UI using JSX.",
    content:
      "React is a powerful JavaScript library for building user interfaces. It uses components and state to update UI efficiently.",
    author: "Krish Patel",
    time: "5 min read",
  },
  {
    id: 2,
    tag: "Hooks",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Understanding useState in React",
    desc: "useState is the most common hook. Learn how to update UI without DOM code.",
    content:
      "useState allows you to create and manage state inside functional components without refreshing the page.",
    author: "Taksh Sharma",
    time: "4 min read",
  },
  {
    id: 3,
    tag: "UI",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    title: "CSS Tips for Modern UI",
    desc: "Make your UI look premium with spacing, shadows and gradients.",
    content:
      "Modern UI design focuses on spacing, typography, and visual hierarchy to create beautiful user experiences.",
    author: "Dhruv Shah",
    time: "3 min read",
  },
  {
    id: 4,
    tag: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title: "JavaScript Events Explained",
    desc: "Click, submit, change events and how React handles them.",
    content:
      "JavaScript events allow you to respond to user interactions like clicks, typing, and form submissions.",
    author: "Tirth Desai",
    time: "6 min read",
  },
];

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="container">
        <button className="backBtn" onClick={() => setSelectedPost(null)}>
          ← Back
        </button>

        <div className="details">
          <img src={selectedPost.image} alt="" />
          <h1>{selectedPost.title}</h1>
          <p className="meta">
            {selectedPost.author} • {selectedPost.time}
          </p>
          <p>{selectedPost.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <h2>BlogSpace</h2>
          <p>Simple Blog UI - React SPA</p>
        </div>
        <button>All Posts</button>
      </header>

      <h1 className="title">Latest Posts</h1>

      <div className="grid">
        {posts.map((post) => (
          <div
            className="card"
            key={post.id}
            onClick={() => setSelectedPost(post)}
          >
            <div className="image-wrapper">
              <img src={post.image} alt={post.title} />
              <span className="tag">{post.tag}</span>
            </div>
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <div className="footer">
                <span>{post.author}</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;