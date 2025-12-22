import { X, MessageCircle, Phone, Instagram, Mail } from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

const bookingOptions = [
    {
      id: 1,
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-500/70 hover:bg-green-500",
      link: "https://wa.me/919131628219",
      description: "Quick chat on WhatsApp"
    },
    {
      id: 2,
      name: "Call",
      icon: Phone,
      color: "bg-blue-500/70 hover:bg-blue-500",
      link: "tel:+919131628219",
      description: "Direct phone call"
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-500/70 hover:bg-pink-500",
      link: "https://www.instagram.com/thestorycreators_photography/?igsh=MXJtZnczbHc5ZHN1Zw%3D%3D&utm_source=qr",
      description: "Message on Instagram"
    },
    {
      id: 4,
      name: "Email",
      icon: Mail,
      color: "bg-red-500/70 hover:bg-red-500",
      link: "mailto:photography.thestorycreators@gmail.com",
      description: "Send us an email"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm coursor-pointer"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white/80 backdrop-blur-2xl shadow-2xl p-6 md:p-10 max-w-md w-full mx-4 animate-fadeInUp rounded-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-black mb-2">Book Now</h2>
          <p className="text-gray-600 text-sm font-extralight">Choose your preferred way to book</p>
        </div>

        {/* Booking Options */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 ">
          {bookingOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <a
                key={option.id}
                href={option.link}
                target={option.id !== 2 ? "_blank" : undefined}
                rel={option.id !== 2 ? "noopener noreferrer" : undefined}
                className={`flex rounded-2xl  flex-col items-center justify-center p-4 md:p-6 text-white font-semibold transition-all duration-300 transform hover:scale-105 ${option.color}`}
              >
                <IconComponent size={32} className="mb-2" />
                <span className="text-sm md:text-base">{option.name}</span>
              </a>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p className="mb-2 font-light">Or reach us directly at:</p>
          <p className="text-gray-800 font-extralight">+91 91316 28219</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
