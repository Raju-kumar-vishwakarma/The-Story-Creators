import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";

const ImageViewer = ({ isOpen, imageIndex, images, onClose, onPrev, onNext }) => {
  const [zoom, setZoom] = useState(100);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
      else if (e.key === "+") setZoom(prev => Math.min(prev + 10, 300));
      else if (e.key === "-") setZoom(prev => Math.max(prev - 10, 50));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  // Mouse wheel zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setZoom(prev => Math.max(50, Math.min(300, prev + (e.deltaY > 0 ? -10 : 10))));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  // Slideshow auto-play
  useEffect(() => {
    if (!isSlideshow || !isOpen) return;

    const interval = setInterval(() => {
      onNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isSlideshow, isOpen, onNext]);

  // Always run hooks; short-circuit rendering after hooks
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-3 hover:bg-white/10 rounded-full transition-colors z-50 backdrop-blur-sm"
        aria-label="Close image viewer"
      >
        <X size={28} className="text-white" />
      </button>

      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8">
        <img
          src={images[imageIndex]}
          alt={`Image ${imageIndex + 1}`}
          className="transition-transform duration-200"
          style={{
            transform: `scale(${zoom / 100})`,
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
        />

        {/* Watermark */}
        <div className="absolute bottom-6 center-6 text-white text-sm md:text-base opacity-80">
          <p className="text-xs md:text-sm">The Story Creators</p>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 p-3 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} className="text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 p-3 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={40} className="text-white" />
      </button>

      {/* Top Controls (Help) */}
      <div className="absolute top-3 left-3 flex gap-2 z-50">
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="p-3 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Show keyboard shortcuts"
        >
          <HelpCircle size={24} className="text-white" />
        </button>
      </div>

      {/* Side Controls (Zoom + Slideshow) */}
      <div className="absolute bottom-6 right-4 md:right-8 flex items-center gap-2 z-50 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
        <button
          onClick={() => setZoom(prev => Math.max(prev - 10, 50))}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut size={24} className="text-white" />
        </button>
        <span className="text-white text-sm min-w-[52px] text-center">{zoom}%</span>
        <button
          onClick={() => setZoom(prev => Math.min(prev + 10, 300))}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn size={24} className="text-white" />
        </button>
        <button
          onClick={() => setIsSlideshow(!isSlideshow)}
          className={`p-2 rounded-full transition-colors ${isSlideshow ? "bg-white/20" : "hover:bg-white/10"}`}
          aria-label="Toggle slideshow"
        >
          {isSlideshow ? <Pause size={22} className="text-white" /> : <Play size={22} className="text-white" />}
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-6 text-white text-sm md:text-base font-light">
        {imageIndex + 1} / {images.length}
      </div>

      {/* Help Tooltip */}
      {showHelp && (
        <div className="absolute top-16 left-3 bg-black/90 text-white text-sm p-4 rounded-lg max-w-xs z-50 border border-white/20 backdrop-blur-md">
          <h3 className="font-semibold mb-2">Keyboard Shortcuts:</h3>
          <ul className="space-y-1 text-xs md:text-sm">
            <li>← → : Navigate images</li>
            <li>Esc : Close viewer</li>
            <li>+/- : Zoom in/out</li>
            <li>Ctrl+Wheel : Zoom (mouse)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
