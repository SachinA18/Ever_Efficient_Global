import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { DividerSection } from "../../../ElementLight/sections/DividerSection";
import { Separator } from "@radix-ui/react-separator";
import SpiderWeb from "../../../../components/ui/SpiderWeb";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AboutSection = (): JSX.Element => {
  const features = [
    {
      icon: "🛡️",
      number: "1",
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty and transparency in all our dealings.",
    },
    {
      icon: "💡",
      number: "2",
      title: "Innovation",
      description:
        "We constantly evolve and adapt to bring the latest solutions to our clients.",
    },
    {
      icon: "🫱🏻‍🫲🏽",
      number: "3",
      title: "Collaboration",
      description:
        "We believe in working together to achieve exceptional results.",
    },
    {
      icon: "📈",
      number: "4",
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
  ];

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

  return (
    <div className="relative w-full bg-everefficientlkwhite overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] hidden bg-black overflow-hidden flex items-center justify-center">
        <a href="#about" className="absolute inset-0 z-0 block">
          {/* <div className="relative w-full  min-h-screen overflow-hidden">
            <SpiderWeb />
          </div> */}
        </a>
        <div className="relative z-10 text-center px-4 max-w-[1200px]">
          <h1 className="text-everefficientlkwhite text-3xl sm:text-4xl md:text-[40px] leading-[1.2] font-bold">
            About Us
          </h1>
          {/* <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[29px]">
            <div className="flex items-center">
              <a
                className="text-everefficientlkwhite whitespace-nowrap text-sm sm:text-base"
                href="https://everefficient.lk/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
              <img
                className="w-3 h-5 sm:w-4 sm:h-[28px] ml-2"
                alt="Separator"
                src="/component-1-2-8.svg"
              />
            </div>
            <span className="text-everefficientlkcerulean-blue whitespace-nowrap text-sm sm:text-base">
              About Us
            </span>
          </div> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20 mt-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div
                  className="h-64 sm:h-80 md:h-96 rounded-[50px_50px_0px_50px] md:rounded-[80px_80px_0px_80px] bg-cover bg-center"
                  style={{ backgroundImage: "url(/digital-strategy-team-meeting.png)" }}
                />
                <div className="space-y-4 md:space-y-6">
                  <div
                    className="h-32 sm:h-40 md:h-44 rounded-full border-2 border-dashed border-[#275ba8] bg-cover bg-center"
                    style={{ backgroundImage: "url(/presenting-digital-solutions-to-clients.png)" }}
                  />
                  <div
                    className="h-32 sm:h-40 md:h-44 rounded-[0px_50px_50px_50px] md:rounded-[0px_80px_80px_80px] bg-cover bg-center"
                    style={{ backgroundImage: "url(/our-team-analyzing-data.png)" }}
                  />
                </div>
              </div>
              <Card className="bg-everefficientlkcerulean-blue rounded-[40px_40px_40px_0px] md:rounded-[50px_50px_50px_0px] p-4 md:p-6 shadow-[0px_0px_30px_5px_#0000001a] md:shadow-[0px_0px_40px_5px_#0000001a]">
                <CardContent className="flex items-center gap-3 md:gap-4 p-0">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-everefficientlkwhite">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 bg-center bg-cover"
                      style={{ backgroundImage: "url(/analytics-icon.png)" }}
                    />
                  </div>
                  <div className="text-everefficientlkwhite">
                    <div className="text-base md:text-lg font-bold">9+ Years Of</div>
                    <div className="text-base md:text-lg font-bold">Digital Excellence</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    className="h-4 w-5 md:h-5 md:w-7"
                    alt="Component"
                    src="/component-1-66.svg"
                  />
                  <span className="text-base md:text-lg font-bold tracking-widest text-everefficientlkcerulean-blue">
                    OUR STORY
                  </span>
                </div>
                <div className="w-24 md:w-32 h-0.5 bg-everefficientlkcerulean-blue"></div>
              </div>
              <div>
                <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight">
                  <span className="text-everefficientlkmirage">Pioneering </span>
                  <span className="text-everefficientlkcerulean-blue">
                    Digital<br />Transformation
                  </span>
                  <span className="text-everefficientlkmirage">
                    {' '}Since<br />2015
                  </span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                  Ever Efficient emerged from a vision to bridge the gap between traditional business practices and the digital revolution. What began as a small consulting firm has grown into a full service digital management agency, helping hundreds of businesses achieve measurable success.
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center justify-start gap-4 md:gap-6 sm:flex-row">
                  <Button className="bg-[#275ba8]  hover:bg-[#1e4a8c] rounded-[40px_40px_40px_0px] md:rounded-[50px_50px_50px_0px] h-12 md:h-14 px-6 md:px-8 shadow-[0px_0px_30px_5px_#0000000d] md:shadow-[0px_0px_40px_5px_#0000000d]">
                    <span className="text-xs md:text-sm tracking-[0.14px] leading-[25.2px]">
                      Our Services
                    </span>
                    <img
                      className="w-3 h-3 md:w-4 md:h-4 ml-2"
                      alt="Arrow"
                      src="/component-1-37.svg"
                    />
                  </Button>
                  <div className="flex items-center mt-2 gap-3 md:gap-4">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-everefficientlkblack rounded-full shadow-[-5px_5px_0px_#116e6317]">
                      <img
                        className="w-5 h-5 md:w-6 md:h-6"
                        alt="Phone"
                        src="/component-1-63.svg"
                      />
                    </div>
                    <div>
                      <div className="text-sm md:text-base font-medium text-everefficientlkcerulean-blue">
                        Get Free Consultation
                      </div>
                      <div className="text-base md:text-lg font-semibold text-everefficientlkblack">
                        +94 777 644 590
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />
      <DividerSection />

      {/* Features Section */}
      <section
        className="relative py-8 sm:py-12 px-4 sm:px-6 md:px-12 text-center text-white min-h-[300px] sm:min-h-[350px] bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('./aboutus_bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:bg-white/5 p-3 sm:p-4 rounded-lg sm:rounded-xl"
            >
              <div
                className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 inline-block transform transition-all duration-500 
                     group-hover:scale-110 sm:group-hover:scale-125 
                     group-hover:rotate-6 
                     group-hover:text-yellow-300 
                     group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] sm:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] 
                     group-hover:animate-bounce"
              >
                {item.icon}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300 group-hover:text-yellow-200">
                {item.number}
              </div>
              <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base md:text-lg transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col w-full items-center py-6 sm:py-[30px] bg-everefficientlkprussian-blue-85 bg-[url(..//background.png)] bg-cover bg-center">
        <div className="relative max-w-[1200px] w-full h-auto py-6 sm:py-10 px-4 sm:px-6">
          <div className="flex flex-col items-center mb-6 sm:mb-10">
            <div className="relative w-[200px] sm:w-[245px] h-4 sm:h-5 mb-4 sm:mb-6 border-b-2 border-[#275ba8]">
              <img
                className="absolute w-5 h-4 sm:w-6 sm:h-[21px] -top-1 left-0"
                alt="Component"
                src="/component-1-16.svg"
              />
              <div className="absolute w-[180px] sm:w-[221px] h-[28px] sm:h-[33px] -top-2 left-5 sm:left-6 text-everefficientlkcerulean-blue text-sm sm:text-base text-center tracking-widest whitespace-nowrap font-bold">
                CLIENT SUCCESS
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[50px] text-center mb-4 sm:mb-6">
              <span className="text-white">What Our Clients </span>
              <span className="text-[#275ba8]">Say</span>
            </h2>

            <p className="text-everefficientlkwhite text-sm sm:text-base text-center leading-relaxed max-w-[90%] sm:max-w-[551px]">
              Hear how we've helped businesses achieve digital transformation
              and growth.
            </p>
          </div>

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
    </div>
  );
};
