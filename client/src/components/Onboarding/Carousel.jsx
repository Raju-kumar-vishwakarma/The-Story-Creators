import { useEffect, useState } from "react";
import { images } from "../../assets/assets";
import BookingModal from "../BookingModal";
import ImageViewer from "../ImageViewer";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  // Auto switch every 3s
  useEffect(() => {
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden max-h-[90vh] ">
      {/* Slide */}
      <div className="relative min-h-[64vh] max-h-[90vh] w-full overflow-hidden">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          onClick={() => setIsImageViewerOpen(true)}
          className="block w-full min-h-[60vh] md:h-full object-cover transition-transform duration-2000 ease-out brightness-75 cursor-pointer hover:brightness-50"
          style={{ transform: "scale(1.09)" }}
        />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-white space-y-4">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Story Creators
            </h1>
            <div className="flex justify-center">
              <span className="h-[0.5px] w-28 bg-white/80 rounded-full" />
            </div>
            <p className="text-lg md:text-xl font-extralight uppercase tracking-wider text-gray-100 "
            
            >
              EVERY MOMENT TELLS A STORY-LET'S SAVE YOURS.
            </p>
            <div className="flex justify-center">
              <span className="h-[0.5px] w-28 bg-white/80 rounded-full" />
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center rounded-full hover:bg-white text-white px-7 py-2.5 text-sm font-light bg-primary-red/60 hover:text-black hover:scale-105 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            
            {/* <div className="flex justify-center gap-2 pt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>


      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 ">
        <svg
          className="relative block w-full h-[70px] "
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            fill="#ffffff"
          />
          <path
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            fill="#ffffff"
          />
          <path
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Booking Modal */}

      {/* Image Viewer */}
      <ImageViewer
        isOpen={isImageViewerOpen}
        imageIndex={current}
        images={images}
        onClose={() => setIsImageViewerOpen(false)}
        onPrev={prev}
        onNext={next}
      />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
};

export default Carousel;
