import React from "react";
import { servicesData } from "../assets/assets";


const Services = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 ">
        {/* Title */}
        <div className="mb-10 md:mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-black mb-12 text-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our All Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{servicesData.map((service, idx) => (
						<a
							key={`${service.name}-${idx}`}
							href={service.href || "#"}
							className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow-sm border border-gray-100 h-[220px] md:h-[260px]"
						>
							{/* Background image */}
							{service.image ? (
								<img
									src={service.image}
									alt={service.name}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
									loading="lazy"
								/>
							) : (
								<div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200" />
							)}

							{/* Overlay */}
							  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />

							{/* City name */}
							<div className="absolute bottom-4 left-5 ">
								<h3 className="text-2xl md:text-3xl font-semibold text-primary-red drop-shadow">
									{service.name}
								</h3>
							</div>
						</a>
					))}
				</div>
      </div>
    </section>
  );
};

export default Services;
