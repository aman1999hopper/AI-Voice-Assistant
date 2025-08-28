"use client";

import { useState, FormEvent, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("success");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // 👇 20 seconds baad form dobara dikhao
        setTimeout(() => {
          setStatus("idle");
        }, 10000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-16 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-200">
          Wed love to hear from you! Get in touch with us below.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

          {status === "success" ? (
            <p className="text-green-400 animate-pulse">
              ✅ Thank you! Your message has been sent.
              <br />
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-400"
                required
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors p-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info (same as your code) */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📍 Our Office</h3>
            <p>123 Main Street, Jaipur, Rajasthan, India</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📞 Call Us</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">✉️ Email Us</h3>
            <p>support@example.com</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.607927768151!2d75.78727097532102!3d26.822965676704485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6d6aaaaaa%3A0x123456789abcdef!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
