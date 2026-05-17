"use client";

import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Student",
    avatar: "https://i.pravatar.cc/40?img=47",
    review:
      "OpenShelf completely changed how I read. I borrowed 5 books last month without leaving my room!",
  },
  {
    id: 2,
    name: "James Mitchell",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/40?img=12",
    review:
      "The Tech category is gold. Clean Code and You Don't Know JS are must-reads and I found them here instantly.",
  },
  {
    id: 3,
    name: "Sofia Bennett",
    role: "Book Enthusiast",
    avatar: "https://i.pravatar.cc/40?img=32",
    review:
      "Love the clean design and how easy it is to find books. The borrowing process is seamless!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral text-center mb-2">
          What Our Readers Say
        </h2>
        <p className="text-center opacity-50 text-sm mb-10">
          Real experiences from our community
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-[#E8D5C0] border border-base-200 rounded-xl p-8 shadow-sm">
                <FaQuoteLeft className="text-primary text-2xl mb-4 opacity-50" />
                <p className="text-sm opacity-70 mb-6 leading-relaxed">
                  {t.review}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full shrink-0 object-contain"
                  />
                  <div>
                    <p className="font-bold text-sm text-neutral">{t.name}</p>
                    <p className="text-xs opacity-50">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
