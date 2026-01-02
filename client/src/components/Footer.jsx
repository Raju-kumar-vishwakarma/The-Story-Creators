import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from "lucide-react";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import BookingModal from "./BookingModal";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <footer className=" md:px-15 mx-auto border-t border-gray-200">
            <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 text-gray-800">
                {/* Left Section */}
                <div className="space-y-6 max-w-xl w-full md:w-auto">
                    <div className="space-y-3 ">
                        <NavLink to="/" aria-label="Home" className="flex items-center gap-2 md:gap-3">
                            <img src={assets.logo} alt="Logo" className="h-12 w-12 md:h-15 md:w-15 object-contain" />
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl text-black mt-2 whitespace-nowrap"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                The Story Creators
                            </h1>
                        </NavLink>
                        <h2 className="text-base md:text-lg font-extralight leading-snug">
                            EVERY MOMENT TELLS A STORY-LET'S SAVE YOURS.
                        </h2>
                        <div className="flex flex-row gap-4 mt-6">
                            <div className="pt-2">
                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="inline-flex items-center justify-center rounded-full hover:bg-black text-white px-7 py-2.5 text-sm font-light bg-primary-red/60  hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="space-y-3 text-base sm:text-xl md:text-lg font-extralight">
                        <div className="font-light leading-snug">
                            <h2>Office:</h2>
                            <div className="flex items-center gap-2">
                                
                                <a
                                     href="https://maps.google.com/maps?q=21.202583,81.574333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center text-sm hover:scale-105 transition-all duration-300"
                                >
                                    <img src={assets.googleMapIcon} alt="Google Map" className="h-6 w-8" />
                                </a>
                                <p className="font-extralight ">Street No.4, Mahadev Ghat, Tiranga Chouk, Raipur</p>
                            </div>
                        </div>
                        <div className="font-light leading-snug">
                            <h2>Phone:</h2>
                            <div className="flex items-center gap-2">
                                <Phone size={20} className="text-primary-red flex-shrink-0" />
                                <p className="font-extralight">+91 91316 28219, +91 81095 19281</p>
                            </div>
                        </div>
                        <div className="font-light leading-snug">
                            <h2>Email:</h2>
                            <div className="flex items-center gap-2">
                                <Mail size={20} className="text-primary-red flex-shrink-0" />
                                <p className="font-extralight ">photography.thestorycreators@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Navigation */}
                <div className="flex flex-row md:justify-around w-full items-start justify-start gap-20 md:gap-0 ">
                    <div className="flex flex-col gap-y-1 text-base sm:text-xl md:text-lg font-extralight">
                        <h4 className="font-light mb-1">Services</h4>
                        <NavLink to="/wedding" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Wedding</NavLink>
                        <NavLink to="/pre-wedding" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Pre-Wedding</NavLink>
                        <NavLink to="/engagement" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Engagement</NavLink>
                        <NavLink to="/films" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Films</NavLink>
                        <NavLink to="/haldi" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Haldi</NavLink>
                        <NavLink to="/birthday" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Birthday</NavLink>
                        <NavLink to="/maternity" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Maternity</NavLink>
                    </div>
                    <div className="flex flex-col gap-y-1 text-base sm:text-xl md:text-lg font-extralight ">
                        <h4 className="font-light mb-1">Quick Links</h4>
                        <NavLink to="/" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Home</NavLink>
                        <NavLink to="/our-work" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Our Work</NavLink>
                        <NavLink to="/films" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Films</NavLink>
                        <NavLink to="/contact" className="hover:underline text-gray-700 transition-all hover:animate-pulse">Contact</NavLink>
                        <NavLink to="/about-us" className="hover:underline text-gray-700 transition-all hover:animate-pulse">About Us</NavLink>
                    </div>
                    
                </div>

                {/* Social Links */}
                <div className="space-y-4 text-xl sm:text-2xl font-light leading-snug w-full md:w-auto">
                    <h4>Follow Us</h4>
                    <div className="flex gap-4 sm:gap-6 text-gray-600">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-600">
                            <Facebook size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-sky-500">
                            <Twitter size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href="https://www.instagram.com/thestorycreators_photography/?igsh=MXJtZnczbHc5ZHN1Zw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-pink-600">
                            <Instagram size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href="https://youtube.com/@thestorycreatorsphotography?si=NnaK-23HMirqsANh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-red-600">
                            <Youtube size={20} className="sm:w-6 sm:h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100 py-4 md:py-6 px-4 md:px-0 text-center text-sm md:text-lg text-gray-500 space-y-2 font-extralight">
                <p className="leading-relaxed ">Copyright © {currentYear} <span className="text-black font-normal ">TheStoryCreators</span> – All Rights Reserved.</p>
                <p className="leading-relaxed">
                    Developed by{" "}
                    <a href="https://www.zscircle.tech" target="_blank" rel="noopener noreferrer" className=" hover:text-special-red transition-colors font-extralight text-primary-red">
                        Team ZSCircle
                    </a>
                </p>
            </div>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </footer>
    );
};

export default Footer;