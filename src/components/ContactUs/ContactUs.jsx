import React from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import { Twitter, Github, Linkedin, Send, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Message sent successfully");

      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again.");
    }
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-gray-300">Contact our team</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  Let’s create
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    something exceptional
                  </span>
                </h1>

                <p className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
                  Whether you're launching a startup, scaling a product, or
                  building a premium digital experience — we’re ready to help
                  turn your vision into reality.
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 pt-2">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Github, label: "Github" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={item.label}
                    className="group w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03]
                    flex items-center justify-center backdrop-blur-xl
                    hover:border-indigo-500/40 hover:bg-indigo-500/10
                    transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* Premium Card */}
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10
                bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                backdrop-blur-2xl p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
                    Why work with us
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    Clean systems. Premium experiences.
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    We focus on performance, scalability, modern UI/UX, and
                    high-quality engineering to craft digital products that feel
                    polished across every device.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div
              className="relative rounded-[32px] border border-white/10
              bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 lg:p-10 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 blur-[100px]" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Send a message</h2>

                  <p className="text-gray-400">
                    Fill out the form below and we’ll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters required",
                        },
                      })}
                      className={`w-full px-4 py-4 rounded-2xl border bg-black/40 outline-none transition-all
                      ${
                        errors.name
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                          : "border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                      }`}
                    />

                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full px-4 py-4 rounded-2xl border bg-black/40 outline-none transition-all
                      ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                          : "border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                      }`}
                    />

                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      {...register("phone", {
                        pattern: {
                          value: /^\+?[0-9\-\s()]{6,}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      className={`w-full px-4 py-4 rounded-2xl border bg-black/40 outline-none transition-all
                      ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                          : "border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                      }`}
                    />

                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Project Details
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 15,
                          message: "Message must be at least 15 characters",
                        },
                      })}
                      className={`w-full px-4 py-4 rounded-2xl border bg-black/40 outline-none resize-none transition-all
                      ${
                        errors.message
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                          : "border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                      }`}
                    />

                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-2xl
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                    px-6 py-4 font-semibold text-white shadow-2xl
                    hover:scale-[1.01] transition-all duration-300
                    disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Premium Map Section */}
          <div
            className="mt-16 rounded-[32px] overflow-hidden border border-white/10
  bg-white/[0.03] backdrop-blur-2xl"
          >
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d831.7694576863308!2d73.09507226953077!3d33.499352116672576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDI5JzU3LjciTiA3M8KwMDUnNDQuNiJF!5e0!3m2!1sen!2s!4v1777570889096!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
