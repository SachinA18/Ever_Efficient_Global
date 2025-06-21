// src/sections/OverlapSection.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";


import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { ParticlesBackground } from "../../../../data/ParticlesBackground";

// Slide content data
const slides = [
  {
    image: "./1.jpg",
    heading: "Strategic Business Management",
    description:
      "We help businesses thrive in the digital age through innovative solutions and strategic planning.",
    buttons: [
      {
        text: "Why Choose Us",
        href: "/About",
        className: "bg-[#275ba8] hover:bg-[#1e4a8c] text-everefficientlkwhite",
      },
      {
        text: "Get Started",
        href: "/Services",
        className: "bg-white hover:bg-gray-100 text-everefficientlkmirage",
      },
    ],
  },
  {
    image: "./2.jpg",
    heading: "Best in Digital Solutions",
    description:
      "Transform your business with cutting-edge digital strategies and efficient management solutions tailored for growth in today's competitive landscape.",
    buttons: [
      {
        text: "Our Services",
        href: "/Services",
        className: "bg-[#275ba8] hover:bg-[#1e4a8c] text-everefficientlkwhite",
      },
    ],
  },
  {
    image: "./3.jpg",
    heading: "Data-Driven Success Stories",
    description:
      " Over a decade of delivering personalized solutions with clear ROI. Let our proven experience work for your business growth.",
    buttons: [
      {
        text: "About Us",
        href: "/About",
        className: "bg-white hover:bg-gray-100 text-everefficientlkmirage",
      },
    ],
  },
];

export const OverlapSection = (): JSX.Element => {
  //framer effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="relative flex items-center justify-center w-full h-screen">
            {/* Background image + overlay */}
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 object-cover w-full h-full brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-everefficientlkblue-zodiac-70 to-everefficientlkblue-zodiac-70 mix-blend-multiply"></div>
        
            {/* Slide Content */}
            <div className="container relative z-10 px-10 py-24 mx-auto text-center">
              <motion.h1
                key={`heading-${index}`} // Re-render this on slide change
                className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-everefficientlkwhite"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                {slide.heading}
              </motion.h1>
        
              <motion.p
                key={`desc-${index}`} // Re-render this on slide change
                className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-zinc-300"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                {slide.description}
              </motion.p>
        
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                {slide.buttons.map((button, i) => (
                  <Button
                    key={i}
                    variant="default"
                    className={`
                      group relative h-14 px-10 rounded-full 
                      font-medium text-base transition-all duration-300 
                      hover:scale-105 
                      hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.15)] 
                      ${button.className}
                    `}
                    asChild
                  >
                    <a
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <span className="tracking-wide transition-colors duration-300 ">
                        {button.text}
                      </span>
                      <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </section>
  );
};
