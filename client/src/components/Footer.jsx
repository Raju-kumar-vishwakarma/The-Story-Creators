import { Instagram, Youtube } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black/80 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
                    {/* Company */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-widest text-gray-300">Company</h3>
                        <ul className="space-y-3">
                            <li><NavLink to="/" className="text-gray-400 hover:text-white transition">Home</NavLink></li>
                            <li><NavLink to="/our-work" className="text-gray-400 hover:text-white transition">Our Work</NavLink></li>
                            <li><NavLink to="/about-us" className="text-gray-400 hover:text-white transition">About Us</NavLink></li>
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Services</NavLink></li>
                            <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-widest text-gray-300">Services</h3>
                        <ul className="space-y-3">
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Wedding</NavLink></li>
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Pre-Wedding</NavLink></li>
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Engagement</NavLink></li>
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Films</NavLink></li>
                            <li><NavLink to="/service" className="text-gray-400 hover:text-white transition">Events</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact India */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-widest text-gray-300">India</h3>
                        <div className="space-y-4 text-gray-400">
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Address</p>
                                <p className="text-sm">Bhilai, Chhattisgarh</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Email</p>
                                <p className="text-sm hover:text-white transition"><a href="mailto:photography.thestorycreators@gmail.com">photography.thestorycreators@gmail.com</a></p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Phone</p>
                                <p className="text-sm hover:text-white transition"><a href="tel:+919131628219">91316 28219</a></p>
                                <p className="text-sm hover:text-white transition"><a href="tel:+918109519281">+91 81095 19281</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Social & Copyright */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-widest text-gray-300">Follow</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/thestorycreators_photography/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                                <Instagram size={24} />
                            </a>
                            <a href="https://youtube.com/@thestorycreatorsphotography?si=NnaK-23HMirqsANh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                                <Youtube size={24} />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700"></div>

                {/* Bottom Bar */}
                <div className="pb-4 text-center mt-4">
                        <p className="text-gray-500 text-xs">© {currentYear} The Story Creators All Rights Reserved</p> 
                 </div>
            </div>
        </footer>
    );
};

export default Footer;
