import { useState } from "react";
import { toast } from 'sonner';
import { useAppContext } from "../context/AppContext";
import ButtonLoader from "../components/ButtonLoader";

const ContactPage = () => {
    const defaultFormData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };

    const { axios } = useAppContext();

    const [formData, setFormData] = useState(defaultFormData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/api/contact", formData);
            if (data.success) {
                toast.success(data.message);
                setFormData(defaultFormData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 py-10 md:py-16 min-h-screen bg-white mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
						    style={{ fontFamily: "'Great Vibes', cursive" }}
		    >Contact Us</h1>

            <div className="flex flex-col-reverse md:flex-row justify-center gap-20 mt-4 md:mt-10">
                <div className="flex-1 max-w-md">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 mt-6 text-sm"
                    >
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-500"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-500"
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-500"
                            type="tel"
                            placeholder="Phone number (optional)"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-500"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-500 resize-none"
                            placeholder="Your message..."
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        ></textarea>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`rounded-full px-6 py-2.5 text-sm md:text-base font-semibold text-white transition-all duration-300 transform ${
                                    loading
                                        ? "bg-primary-red/60 cursor-not-allowed scale-95 opacity-75"
                                        : "bg-black/80 hover:bg-primary-red hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
                                }`}
                            >
                                {loading ? <ButtonLoader/> : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
{/* 
                <img
                    className="hidden md:block md:mr-16 mb-16 md:mt-10 max-h-96 object-contain rounded"
                    src={assets.ContactImage}
                    alt="Contact Us"
                /> */}
            </div>
        </div>
    );
};

export default ContactPage;

