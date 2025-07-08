import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-200 rounded-full mb-6">
            <div className="w-8 h-8 bg-green-600 rounded-full" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments captured from our workshops, events, and educational missions across India.
          </p>
        </div>
      </section>

      {/* Image Slider */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`${src}?auto=format&fit=crop&w=1200&q=80`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] sm:h-[500px] object-cover cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-10 text-center">
            Explore All Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition duration-300 bg-white cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative">
            <img
              src={`${selectedImage}?auto=format&fit=crop&w=1400&q=90`}
              alt="Preview"
              className="rounded-xl w-full h-auto max-h-[90vh] object-contain shadow-2xl transition-all duration-300"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Capture the Change
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Each picture tells a story of learning, growth, and community impact.
            Want to be part of the next photo?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="px-6 py-3 bg-[#F59E0B] text-black font-semibold rounded-lg border-2 border-white hover:bg-green-700 hover:text-white transition
"
            >
              Become a Volunteer
            </a>
            <a
              href="/mission"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition"
            >
              View Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
