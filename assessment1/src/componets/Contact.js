import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email!");
      return;
    }

    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;