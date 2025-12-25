 import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    console.log(formData);
    alert("Thank you for your message!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center xl:mt-13 p-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-neutral-900/80 to-black/90 z-10" />
        <img
          src="/bgimg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            Professional Photography
          </span>

          <h1 className="text-5xl font-bold">
            Let's Create Something Beautiful
          </h1>

          <p className="text-lg text-neutral-300">
            Share your vision with us. Whether it's a portrait session, event
            coverage, or commercial project, we're here to bring your ideas to
            life.
          </p>
          <div className="space-y-6 text-white">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                {/* Mail Icon */}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7l9 6 9-6M4 7h16v10H4z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-neutral-300 text-sm">
                  hello@photography.studio
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                {/* Phone Icon */}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-neutral-300 text-sm">(555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                {/* Location Icon */}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.4 6-10a6 6 0 10-12 0c0 4.6 6 10 6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>

              <div>
                <p className="font-semibold">Studio</p>
                <p className="text-neutral-300 text-sm">
                  123 Creative Ave, Studio City, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-neutral-900">Get in Touch</h2>
          <p className="text-neutral-600 mt-2 mb-6">
            Fill out the form and we'll be in touch soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full h-12 border border-neutral-300 px-4 rounded-md focus:ring-2 focus:ring-neutral-200 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full h-12 border border-neutral-300 px-4 rounded-md focus:ring-2 focus:ring-neutral-200 outline-none"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-12 border border-neutral-300 px-4 rounded-md"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full h-12 border border-neutral-300 px-4 rounded-md bg-white"
            >
              <option value="">Select a service</option>
              <option value="pre-wedding">Pre-Wedding Shoot</option>
              <option value="wedding">Wedding Photography</option>
              <option value="engagement">Engagement Session</option>
              <option value="portrait">Portrait Photography</option>
              <option value="event">Event Coverage</option>
              <option value="commercial">Commercial Photography</option>
              <option value="family">Family Portraits</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your project..."
              required
              className="w-full border border-neutral-300 px-4 py-2 rounded-md resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-neutral-900 text-white font-medium rounded-md hover:bg-neutral-800 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

