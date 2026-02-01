import { useState } from "react";
import { toast } from 'sonner';
import ButtonLoader from "../components/ButtonLoader";

const ContactPage = () => {
    const defaultFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setResult("Sending...");

            const formDataForSubmit = new FormData();
            formDataForSubmit.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);
            formDataForSubmit.append("name", `${formData.firstName} ${formData.lastName}`);
            formDataForSubmit.append("email", formData.email);
            formDataForSubmit.append("phone", formData.phone);
            formDataForSubmit.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataForSubmit
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                toast.success("Message sent successfully!");
                setFormData(defaultFormData);
            } else {
                console.log("Error", data);
                setResult(data.message);
                toast.error(data.message || "Failed to submit form");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
            setResult("Error submitting form");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white mt-16 md:mt-20 py-6 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Section - Company Info */}
                    <div className="hidden lg:flex flex-col justify-start pt-8">
                        <h1
                            className="text-3xl md:text-5xl font-light text-black mb-12 "
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Contact Us
                        </h1>
                        <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
                            Email, call, or complete the form to learn how The Story Creators can help capture your special moments.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-12">
                            <div>
                                <a href="mailto:photography.thestorycreators@gmail.com" className="text-gray-800 text-lg hover:text-primary-red transition-colors">
                                    photography.thestorycreators@gmail.com
                                </a>
                            </div>
                            <div>
                                <a href="tel:+919131628219" className="text-gray-800 text-lg hover:text-primary-red transition-colors">
                                    +91 9131 628219
                                </a>
                            </div>
                        </div>

                        {/* Support Sections */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-light text-black mb-3">Customer Support</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-extralight">
                                    Our support team is available around the clock to address any concerns or questions you may have.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                                {/* Card 1 */}
                                <div className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="text-base font-medium text-black mb-2 group-hover:text-black/80">
                                        Photography
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Wedding, pre-wedding, engagement, and event photography services.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="text-base font-medium text-black mb-2 group-hover:text-black/80">
                                        Videography
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Professional video coverage for your special moments and events.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <h4 className="text-base font-medium text-black mb-2 group-hover:text-black/80">
                                        Inquiries
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        For general inquiries, please contact us and we'll respond promptly.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="flex items-center justify-center mt-8">
                        <div className="w-full max-w-md lg:bg-white lg:rounded-2xl lg:border lg:border-gray-200 lg:p-8 ">
                            <h2 className="text-3xl md:text-2xl font-light text-black mb-3 md:mb-2 text-center md:text-left"
                                style={{ fontFamily: "'Playfair Display', serif" }}>
                                Get in Touch
                            </h2>
                            <p className="text-gray-500 text-base md:text-sm mb-6 md:mb-8 font-extralight text-center md:text-left">You can reach us anytime</p>

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-4">
                                {/* Name Row */}
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <input
                                        className="px-4 py-3.5 md:py-3 border border-gray-200 rounded-lg outline-none text-gray-700 focus:border-primary-red/60 focus:ring-1 focus:ring-primary-red/30 transition-all placeholder-gray-400 text-sm"
                                        type="text"
                                        placeholder="First name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="px-4 py-3.5 md:py-3 border border-gray-200 rounded-lg outline-none text-gray-700 focus:border-primary-red/60 focus:ring-1 focus:ring-primary-red/30 transition-all placeholder-gray-400 text-sm"
                                        type="text"
                                        placeholder="Last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <svg className="absolute left-3 top-4 md:top-3.5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    <input
                                        className="w-full pl-10 pr-4 py-3.5 md:py-3 border border-gray-200 rounded-lg outline-none text-gray-700 focus:border-primary-red/60 focus:ring-1 focus:ring-primary-red/30 transition-all placeholder-gray-400 text-sm"
                                        type="email"
                                        placeholder="Your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <div className="absolute left-3 top-4 md:top-3.5 flex items-center">
                                        <select className="bg-transparent outline-none text-gray-700 text-sm font-medium pr-2 border-r border-gray-200">
                                            <option value="+91">+91</option>
                                        </select>
                                    </div>
                                    <input
                                        className="w-full pl-16 pr-4 py-3.5 md:py-3 border border-gray-200 rounded-lg outline-none text-gray-700 focus:border-primary-red/60 focus:ring-1 focus:ring-primary-red/30 transition-all placeholder-gray-400 text-sm"
                                        type="tel"
                                        placeholder="Phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    className="w-full px-4 py-3.5 md:py-3 border border-gray-200 rounded-lg outline-none text-gray-700 focus:border-primary-red/60 focus:ring-1 focus:ring-primary-red/30 transition-all placeholder-gray-400 text-sm resize-none"
                                    placeholder="How can we help?"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                ></textarea>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-3.5 md:py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform text-sm ${loading
                                            ? "bg-gray-400 cursor-not-allowed opacity-75"
                                            : "bg-black hover:bg-primary-red active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
                                        }`}
                                >
                                    {loading ? <ButtonLoader /> : "Submit"}
                                </button>

                                {/* Terms */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
