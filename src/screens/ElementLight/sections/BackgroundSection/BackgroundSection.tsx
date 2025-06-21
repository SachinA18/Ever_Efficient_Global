import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion"
import { InfiniteSlider } from "../../../../components/ui/infinite-slider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Kumara Sahan",
    role: "Business Owner",
    quote:
      "\"What sets Ever Efficient apart is their strategic approach. They don't just execute tasks",
    image: "/kumara-sahan.png",
  },
  {
    id: 2,
    name: "Rajiv Fernando",
    role: "Business Owner",
    quote:
      '"Ever Efficient transformed our online presence completely. Our website traffic increased',
    image: "/rajiv-fernando.png",
  },
  {
    id: 3,
    name: "Priyanka De Silva",
    role: "Business Owner",
    quote:
      '"Their social media strategy took our engagement from 200 to 15,000+ followers in one',
    image: "/priyanka-de-silva.png",
  },
  {
    id: 4,
    name: "Dinesh Perera",
    role: "Business Owner",
    quote:
      '"The professional photography and video content they created became the cornerstone of o',
    image: "/dinesh-perera.png",
  },
];

export const BackgroundSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center py-[30px] bg-everefficientlkprussian-blue-85 bg-[url(..//background.png)] bg-cover bg-center">
      <div className="relative max-w-[1200px] w-full h-auto py-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-[245px] h-5 mb-6 border-b-2 border-[#275ba8]">
            <img
              className="absolute w-6 h-[21px] -top-1 left-0"
              alt="Component"
              src="/component-1-16.svg"
            />
            <div className="absolute w-[221px] h-[33px] -top-2.5 left-6 font-everefficient-lk-inter-bold-upper font-[number:var(--everefficient-lk-inter-bold-upper-font-weight)] text-everefficientlkcerulean-blue text-[length:var(--everefficient-lk-inter-bold-upper-font-size)] text-center tracking-[var(--everefficient-lk-inter-bold-upper-letter-spacing)] leading-[var(--everefficient-lk-inter-bold-upper-line-height)] whitespace-nowrap [font-style:var(--everefficient-lk-inter-bold-upper-font-style)]">
              CLIENT SUCCESS
            </div>
          </div>

          <h2 className="text-[50.2px] text-center font-['Inter',Helvetica] font-semibold mb-6">
            <span className="text-white leading-[55px]">What Our Clients </span>
            <span className="text-[#275ba8] leading-[55px]">Say</span>
          </h2>

          <p className="text-everefficientlkwhite text-[18.9px] text-center leading-[28.8px] max-w-[551px] font-['Inter',Helvetica] font-normal">
            Hear how we've helped businesses achieve digital transformation and
            growth.
          </p>
        </div>

        {/* Testimonial cards */}
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full px-4 pb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="w-[250px] sm:w-[274.5px] h-auto sm:h-[280px] bg-everefficientlkwhite rounded-[30px_30px_30px_0px] sm:rounded-[40px_40px_40px_0px] border-b-[3px] sm:border-b-[5px] border-[#275ba8] relative mx-auto">
                  <CardContent className="p-4 sm:p-0">
                    <div className="flex mt-4 sm:mt-[29px] ml-4 sm:ml-[25px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          className="w-4 h-3 sm:w-[18px] sm:h-4 mr-1 sm:mr-[4px]"
                          alt="Star rating"
                          src="/component-1.svg"
                        />
                      ))}
                    </div>
                    <div className="w-full sm:w-56 h-auto sm:h-[86px] mt-3 sm:mt-4 ml-4 sm:ml-[25px]">
                      <div className="relative w-full sm:w-[220px] h-auto sm:h-[87px]">
                        <p className="text-everefficientlkslate-gray text-xs sm:text-sm leading-relaxed italic">
                          {testimonial.quote}
                        </p>
                        <img
                          className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4"
                          alt="More"
                          src="/component-1-18.svg"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4 ml-4 sm:ml-[25px] pb-4 sm:pb-0">
                      <div className="flex flex-col w-16 sm:w-[75px] items-start p-1 rounded-[50px] border-2 border-dashed border-[#275ba8]">
                        <div
                          className="w-14 h-14 sm:w-[63px] sm:h-[63px] rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${testimonial.image})`,
                          }}
                        />
                      </div>
                      <div className="ml-2 sm:ml-[10px]">
                        <h3 className="text-everefficientlkmirage text-base sm:text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-everefficientlkcerulean-blue text-sm sm:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-2 sm:top-0 right-4 sm:right-[30px] flex flex-col w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-everefficientlkcerulean-blue rounded-[30px_30px_30px_0px] sm:rounded-[50px_50px_50px_0px]">
                      <img
                        className="w-5 h-6 sm:w-[26px] sm:h-[31px]"
                        alt="Quote icon"
                        src="/component-1-21.svg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
  
      </div>
   
    </section>
  );
};
