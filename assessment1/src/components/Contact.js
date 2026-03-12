import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields required!");
      return;
    }

    alert("Message Sent!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;