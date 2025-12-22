import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const getActivePage = ({ isActive }) => ({
        color: isActive ? "#C23700" : "#000",
    });


    return (
        <nav className="fixed top-0 mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 h-20 border-b border-gray-300 transition-all left-0 right-0 z-40 backdrop-blur-xl bg-white/95 ">

            <NavLink to="/" onClick={() => setOpen(false)} aria-label="Home" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-15 w-15 object-contain " />
                <h1
                    className="hidden sm:block text-2xl sm:text-3xl md:text-4xl text-black mt-2"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                    The Story <span className="text-special-red">Creators</span>
                </h1>
            </NavLink>

            <div className="hidden md:flex items-center gap-8 text-nowrap text-lg font-extralight ">

                <NavLink to="/" style={getActivePage} className="nav-link hover:opacity-70 transition">Home</NavLink>
                <NavLink to="/our-work" style={getActivePage} className="nav-link hover:opacity-70 transition">Our Work</NavLink>
                <NavLink to="/films" style={getActivePage} className="nav-link hover:opacity-70 transition">Films</NavLink>
                <NavLink to="/contact" style={getActivePage} className="nav-link hover:opacity-70 transition">Contact</NavLink>
                <NavLink to="/about-us" style={getActivePage} className="nav-link hover:opacity-70 transition">About</NavLink>
            </div>

            <div className="flex items-center gap-6 md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    className="flex items-center gap-2 transition-all"
                >
                    {open ? (
                        // Close icon (X)
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        // Hamburger icon
                        <img src={assets.MenuIcon} alt="Close Menu" className="w-7"/>
                    )}

                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed top-0  left-0 w-full max-h-[calc(100vh-52px)] sm:max-h-[calc(100vh-61px)] bg-white/95 backdrop-blur-2xl mt-20 flex flex-col items-center gap-8 px-5 md:hidden z-50 border-t border-gray-300 overflow-y-auto animate-slideDown shadow-lg border-b-black/10 text-2xl font-extralight py-8">
                    <NavLink to="/" onClick={() => setOpen(false)} style={getActivePage} className="hover:opacity-70 transition ">Home</NavLink>
                    <NavLink to="/our-work" onClick={() => setOpen(false)} style={getActivePage} className=" hover:opacity-70 transition">Our Work</NavLink>
                    <NavLink to="/films" onClick={() => setOpen(false)} style={getActivePage} className=" hover:opacity-70 transition">Films</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} style={getActivePage} className=" hover:opacity-70 transition">Contact</NavLink>
                    <NavLink to="/about-us" onClick={() => setOpen(false)} style={getActivePage} className=" hover:opacity-70 transition ">About</NavLink>
                </div>
            )}

        </nav>
    )
}

export default Navbar;
