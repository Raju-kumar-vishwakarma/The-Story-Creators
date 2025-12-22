const SocialButtons = () => (
  <div className="fixed right-4 md:right-6 bottom-24 flex flex-col gap-3 z-50">
    <div className="relative group">
      <a
        href="https://www.instagram.com/thestorycreators_photography/?igsh=MXJtZnczbHc5ZHN1Zw%3D%3D&utm_source=qr#"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Instagram"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-transform duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4.3" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Instagram
      </span>
    </div>

    <div className="relative group">
      <a
        href="https://wa.me/919131628219"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-[#25D366] text-white transition-transform duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
        >
          <path d="M20.5 3.5A11 11 0 0 0 3.6 16.9L3 21l4.2-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5ZM12 20a9 9 0 0 1-4.6-1.3l-.3-.1-2.5.7.7-2.4-.2-.3A9 9 0 1 1 12 20Zm5.2-6.9c-.3-.2-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.1 8.1 0 0 1-1.5-2c-.2-.4 0-.5.1-.6l.4-.5.2-.3a.6.6 0 0 0 0-.6c0-.1-.6-1.5-.8-2S9.1 6 8.8 6s-.7 0-1 .2-.9.8-.9 2a4.2 4.2 0 0 0 .9 2.4A9.5 9.5 0 0 0 12 14.8a5.1 5.1 0 0 0 2.2.5 2.5 2.5 0 0 0 1.7-.6 2 2 0 0 0 .4-1.2c.1-.2.1-.4-.1-.5Z" />
        </svg>
      </a>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        WhatsApp
      </span>
    </div>
  </div>
);

export default SocialButtons;
