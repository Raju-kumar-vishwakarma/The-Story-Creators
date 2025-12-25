import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Camera,
  Send
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-[#f7f5f2] via-[#ebe7e2] to-[#cfcac4] border-t border-black/10 overflow-hidden">
      {/* subtle animated glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_60%)] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-20 animate-[fadeUp_1s_ease-out]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div
                className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg 
                group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
              >
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                The Story Creators
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-sm">
              Every moment tells a story — let’s preserve yours with cinematic,
              timeless photography crafted with emotion.
            </p>

            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center
                  hover:bg-black hover:text-white hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* 🌈 MAP ICON WITH PULSE + BOUNCE */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <span
                className="relative w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 
                  flex items-center justify-center shadow-xl
                  animate-bounce group-hover:animate-none"
              >
                <span className="absolute inset-0 rounded-full animate-ping bg-pink-400 opacity-40" />
                <MapPin className="w-5 h-5 text-white relative z-10" />
              </span>

              <span className="leading-snug group-hover:text-black transition">
                Street No.4, Mahadev Ghat <br />
                Tiranga Chouk, Raipur
              </span>
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              {["Home", "Our Work", "Films", "Contact", "About Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="relative inline-block hover:text-black transition after:absolute
                    after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black
                    hover:after:w-full after:transition-all after:duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              {[
                "Wedding",
                "Pre-Wedding",
                "Engagement",
                "Films",
                "Haldi",
                "Birthday",
                "Maternity",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:translate-x-2 inline-block transition-transform duration-300 hover:text-black"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER + CONTACT */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Stay Updated
            </h3>

            <p className="text-base md:text-lg text-gray-700">
              Get photography tips, offers & behind-the-scenes stories directly
              in your inbox.
            </p>

            <div
              className="flex rounded-full overflow-hidden border border-black/30 bg-white shadow-md
              focus-within:ring-2 focus-within:ring-black transition"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-base outline-none"
              />
              <button className="bg-black text-white px-6 hover:bg-gray-800 hover:scale-105 transition">
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-3 space-y-4 text-base md:text-lg text-gray-700">
              <a
                href="tel:+919131628219"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <Phone className="w-5 h-5" />
                +91 91316 28219
              </a>

              <a
                href="mailto:photo@storycreators.com"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <Mail className="w-5 h-5" />
                photo@storycreators.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base md:text-lg text-gray-700">
            © 2025{" "}
            <span className="font-medium text-gray-900">
              The Story Creators
            </span>{" "}
            — All Rights Reserved.
          </p>
          <div className="flex gap-8 text-base md:text-lg">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
