import React from "react";
import FAQ from "../components/Onboarding/FAQ";
import { assets } from "../assets/assets";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="w-full px-4 sm:px-6 lg:px-12 mt-20 pt-10  md:pt-16">
                <div className="mx-auto max-w-6xl text-center space-y-4">
                    <h1
                        className="text-3xl md:text-4xl text-black font-semibold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-extralight leading-relaxed md:pb-5">
                        Passionate storytellers preserving the emotions, colors, and energy of every celebration.
                    </p>
                </div>
            </section>

            {/* Story + Highlights */}
            <section className="w-full px-4 sm:px-6 lg:px-12 pb-14 mt-8">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-5">
                            <h3 className="text-2xl md:text-3xl font-light text-black md:text-start text-center">Our Story</h3>
                            <p className="text-gray-700 leading-relaxed font-light text-center md:text-start">
                                The Story Creators began with a simple promise: every couple deserves a film and photo story that
                                feels honest, artful, and alive. From the first hello to the final frame, we listen closely so your
                                film reflects who you are—not a template.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-light text-center md:text-start">
                                We blend documentary instincts with cinematic polish, focusing on real interactions, true colors,
                                and the little in-between moments that become your family’s favorite memories.
                            </p>                            <p className="text-gray-700 leading-relaxed font-extralight text-center md:text-start">
                                What started as a passion for capturing authentic love stories has evolved into a mission: to preserve
                                the essence of your celebration in a way that feels timeless. We've documented over 120 weddings,
                                traveled to 50+ cities, and built a reputation on trust, creativity, and meticulous attention to detail.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl shadow-xl">
                                <img 
                                    src={assets.wedding9} 
                                    alt="Our Photography Work" 
                                    className="w-full h-[450px] md:h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards Section */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                            <h4 className="text-xl md:text-2xl font-light text-black mb-3">Documentary heart, cinematic finish</h4>
                            <p className="text-gray-700 leading-relaxed font-light">
                                We capture the day as it unfolds, then weave it together with clean pacing, intentional music,
                                and true-to-life color so your story feels timeless.
                            </p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                            <h4 className="text-xl md:text-2xl font-light text-black mb-3">People first, always</h4>
                            <p className="text-gray-700 leading-relaxed font-light">
                                We keep you relaxed, guide only when needed, and prioritize comfort so your smiles, tears, and
                                laughter are genuine—not posed.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                        <div className="rounded-2xl border border-gray-100 px-4 md:px-5 py-8 text-center bg-gray-50">
                            <div className="text-2xl md:text-3xl font-light text-black">120+</div>
                            <p className="text-sm text-gray-600 font-light">Weddings documented</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 px-4 md:px-5 py-8 text-center bg-gray-50">
                            <div className="text-2xl md:text-3xl font-light text-black">50+</div>
                            <p className="text-sm text-gray-600 font-light">Cities covered</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 px-4 md:px-5 py-8 text-center bg-gray-50">
                            <div className="text-2xl md:text-3xl font-light text-black">4.9 ★</div>
                            <p className="text-sm text-gray-600 font-light">Client happiness</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 px-4 md:px-5 py-8 text-center bg-gray-50">
                            <div className="text-2xl md:text-3xl font-light text-black">All day</div>
                            <p className="text-sm text-gray-600 font-light">From first look to last dance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach + CTA */}
            <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-gray-50">
                <div className="mx-auto max-w-6xl space-y-10">
                    <div className="text-center space-y-3">
                        <h3 className="text-2xl md:text-3xl font-light text-black">How We Work</h3>
                        <p className="text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
                            A steady, human-first process that keeps you present while we safeguard the details.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                            <h4 className="text-lg font-light text-black mb-2">Listen deeply</h4>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                                We learn your story, your comfort level, and the moments you care about most so the coverage is
                                personal and stress-free.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                            <h4 className="text-lg font-light text-black mb-2">Guide lightly</h4>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                                We keep things moving with gentle direction only when needed—leaving space for natural laughter,
                                quiet looks, and family warmth.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                            <h4 className="text-lg font-light text-black mb-2">Deliver with care</h4>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                                Thoughtful editing, clean storytelling, and reliable timelines so you can relive the day with zero
                                stress and full heart.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black text-white rounded-2xl px-6 md:px-8 py-6 shadow-md">
                        <div className="space-y-1 text-center sm:text-left">
                            <p className="text-lg md:text-xl font-light">Ready to save your story?</p>
                            <p className="text-sm md:text-base text-gray-200 font-extralight">
                                Tell us the moments that matter most. We will handle the rest with heart.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm md:text-base font-light shadow hover:shadow-md transition"
                        >
                            Start a conversation
                        </a>
                    </div>
                </div>
            </section>
            <FAQ className=""/>
        </div>
    );
};

export default AboutUs;