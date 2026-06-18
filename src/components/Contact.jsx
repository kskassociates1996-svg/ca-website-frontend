import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const API_URL = import.meta.env.VITE_API_URL;

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      `${API_URL}/api/contact`,
      formData
    );

    alert(res.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    });

  } catch (err) {
    console.log(err);
    alert("Failed to send message");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* FULL SCREEN LOADER */}
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option>GST Filing</option>
          <option>Income Tax Filing</option>
          <option>Tax Audit</option>
          <option>Company Registration</option>
          <option>Others</option>
        </select>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading} className="submit-btn">
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact;
