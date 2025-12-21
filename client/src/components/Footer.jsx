import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container mx-auto border-t border-gray-200">
            <div className="w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-10 text-gray-800">
                {/* Left Section */}
                <div className="space-y-12 max-w-xl">
                    <div className="space-y-3">
                        <NavLink to="/" onClick={() => setOpen(false)} aria-label="Home" className="flex items-center gap-3 ">
                            <img src={assets.logo} alt="Logo" className="h-15 w-15 object-contain " />
                            <h1
                                className=" text-3xl md:text-4xl text-black mt-2 text-nowrap"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                The Story Creators
                            </h1>
                        </NavLink>
                        <h2 className="text-xl font-extralight leading-snug">
                            EVERY MOMENT TELLS A STORY-LET'S SAVE YOURS.
                        </h2>
                    </div>
                    <div className="space-y-3">
                        <div className="font-medium leading-snug">
                            <h2>Office:</h2>
                            <p className="font-extralight">Street No.4, Mahadev Ghat, Tiranga Chouk, Raipur</p>
                        </div>
                        <div className="font-medium leading-snug">
                            <h2>Email:</h2>
                            <p className="font-extralight">photography.thestorycreators@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Center Navigation */}
                <div className="flex md:justify-around w-full itmems-start justify-start gap-30 md:gap-0">
                    <div className="flex flex-col gap-x-10 gap-y-2 text-xl font-extralight">
                    <h4 className="font-light">Quick Links</h4>
                    <NavLink to="/" className="hover:underline">Home</NavLink>
                 
                 
                    <NavLink to="/our-work" className="hover:underline">Our Work</NavLink>
                    <NavLink to="/films" className="hover:underline">Films</NavLink>
                       <NavLink to="/service" className="hover:underline">Service</NavLink>
                    <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                       <NavLink to="/about-us" className="hover:underline">About Us</NavLink>


                </div>
                <div className="flex flex-col gap-x-10 gap-y-2 text-xl font-extralight">
                    <h4 className="font-light">Services</h4>
                    <NavLink to="/wedding" className="hover:underline">Wedding</NavLink>
                    <NavLink to="/pre-wedding" className="hover:underline">Pre-Wedding</NavLink>
                    <NavLink to="/engagement" className="hover:underline">Engagement</NavLink>
                    <NavLink to="/films" className="hover:underline">Films</NavLink>
                    <NavLink to="/career" className="hover:underline">Career</NavLink>
                    <NavLink to="/events" className="hover:underline">Events</NavLink>
                </div>
                </div>


                {/* Social Links */}
                <div className="space-y-4 text-2xl font-light leading-snug">
                    <h4>Follow Us</h4>
                    <div className="flex gap-6 text-gray-600 text-xl">

                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <Facebook size={24} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <Twitter size={24} />
                        </a>
                        <a href="https://www.instagram.com/thestorycreators_photography/?igsh=MXJtZnczbHc5ZHN1Zw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <Instagram size={24} />
                        </a>
                        <a href="https://youtube.com/@thestorycreatorsphotography?si=NnaK-23HMirqsANh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500 space-y-1">
                <p>Copyright © {currentYear} ZSCircle – All Rights Reserved.</p>
                <p>
                    Developed by{" "}
                    <a href="https://www.zscircle.tech" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-special-red">
                        Team ZSCircle
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;