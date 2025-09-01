import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
// Black-themed Contact Us component styled with Tailwind CSS
// Default export so you can drop this into any React app
import api from "../api/axios";
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    // phone is optional but if provided must be digits
    if (form.phone && !/^\+?[0-9\-\s()]{6,}$/.test(form.phone))
      e.phone = "Enter a valid phone";
    return e;
  }

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);

      // Call backend API
      api
        .post("/api/contact-us", form)
        .then((res) => {
          alert("✅ Thanks! Your message has been sent.");
          setForm({ name: "", email: "", phone: "", message: "" });
        })
        .catch((err) => {
          console.error("❌ API error:", err);
          alert("Something went wrong. Please try again.");
        })
        .finally(() => setSubmitted(false));
    }
  }

  return (
    <>
      {/* Contact Section */}
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-16 px-6 pt-32">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Info */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight">
              Let’s build something{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                great together
              </span>
            </h1>

            {/* Info cards */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[240px] p-4 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-sm text-gray-300/90 font-semibold">
                  Office
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Silk Bank Rd, Bahria Town Phase 8, Lahore, Pakistan
                </p>
              </div>

              <div className="flex-1 min-w-[240px] p-4 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-sm text-gray-300/90 font-semibold">
                  Working Hours
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Mon — Fri: 9:00 AM — 6:00 PM (PKT)
                </p>
              </div>

              <div className="flex-1 min-w-[240px] p-4 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-sm text-gray-300/90 font-semibold">
                  Email
                </h3>
                <p className="mt-2 text-sm text-gray-400">inovix@gmail.com</p>
              </div>

              <div className="flex-1 min-w-[240px] p-4 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-sm text-gray-300/90 font-semibold">
                  Phone
                </h3>
                <p className="mt-2 text-sm text-gray-400">+92 300 0000000</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="twitter"
                className="p-2 rounded-lg bg-gray-900/60 border border-gray-800 hover:scale-105 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.92c-.66.29-1.37.49-2.12.58..." />
                </svg>
              </a>
              <a
                href="#"
                aria-label="github"
                className="p-2 rounded-lg bg-gray-900/60 border border-gray-800 hover:scale-105 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.49..." />
                </svg>
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="p-2 rounded-lg bg-gray-900/60 border border-gray-800 hover:scale-105 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3A2 2 0 0121 5v14..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form + map */}
          <div className="flex-1 space-y-8 w-full">
            {/* Contact Form */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/40 border border-gray-800 shadow-xl">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Name */}
                  <label className="flex-1 flex flex-col">
                    <span className="text-xs text-gray-300 mb-2">Name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    {errors.name && (
                      <span className="text-rose-400 text-xs mt-1">
                        {errors.name}
                      </span>
                    )}
                  </label>

                  {/* Email */}
                  <label className="flex-1 flex flex-col">
                    <span className="text-xs text-gray-300 mb-2">Email</span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    {errors.email && (
                      <span className="text-rose-400 text-xs mt-1">
                        {errors.email}
                      </span>
                    )}
                  </label>
                </div>

                {/* Phone */}
                <label className="flex flex-col">
                  <span className="text-xs text-gray-300 mb-2">
                    Phone (optional)
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 3xx xxx xxxx"
                    className="px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {errors.phone && (
                    <span className="text-rose-400 text-xs mt-1">
                      {errors.phone}
                    </span>
                  )}
                </label>

                {/* Message */}
                <label className="flex flex-col">
                  <span className="text-xs text-gray-300 mb-2">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget"
                    className="px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  />
                  {errors.message && (
                    <span className="text-rose-400 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </label>

                {/* Button */}
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-60"
                  >
                    {submitted ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="white"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <div className="w-full h-56 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 opacity-40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s8-4.5 8-10.5S15.866 2 12 7.5 4 10.5 4 10.5 4 16.5 12 21z"
                  />
                  <circle
                    cx="12"
                    cy="10.5"
                    r="2.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-3 text-sm text-gray-400">
                  Map placeholder — add Google Maps iframe here
                </span>
              </div>

              <div className="p-4 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="text-xs text-gray-400 text-center sm:text-left">
                  Want a meeting? Book a call and we’ll walk through the scope.
                </div>
                <a href="#" className="text-sm text-indigo-300 underline">
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
