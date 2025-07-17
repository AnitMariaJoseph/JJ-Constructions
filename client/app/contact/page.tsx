
"use client"; 

import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); 
    console.log("Form submitted:", formData); // Replace with actual backend call
    setSubmitted(true); 
  }

  return (
    <main className="mx-auto px-4">
      {
      <section className="w-full bg-blue-950 py-20">
      <h1 className="text-5xl font-bold mb-6 text-center text-yellow-600">Contact Us</h1>
      <p className="text-center text-yellow-600 mb-7">
  We'd love to hear from you! Whether it's a question, feedback, or a new project idea — drop us a message below.
      </p>
      </section>
} 
      <section className="max-w-2xl mx-auto py-2 px-4">
      {submitted ? (
        <p className="text-green-600  text-center">Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
      </section>
    </main>
  );
}
