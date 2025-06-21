import { motion } from "framer-motion";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";

const serviceCards = [
  {
    id: 1,
    title: "Digital Marketing Solutions",
    description:
      "Strategic campaigns to boost your online presence, drive qualified traffic, and convert leads into customers.",
    image: "/digital-marketing-strategy.png",
    rating: 4.8,
    features: [{ icon: "/component-1-65.svg", text: "Data-Driven" }],
    details: [
      { icon: "/component-1-58.svg", text: "ROI Tracking" },
      { icon: "/component-1-72.svg", text: "Ongoing" },
    ],
    badge: {
      text: "Strategic",
      icon: "/component-1-70.svg",
    },
    pricing: "Custom Packages",
  },
  {
    id: 2,
    title: "Social Media Management",
    description:
      "Build authentic brand connections through tailored content strategies and community engagement across all platforms.",
    image: "/social-media-management.png",
    rating: 5.0,
    features: [{ icon: "/component-1-66.svg", text: "Multi-Platform" }],
    details: [
      { icon: "/component-1-12.svg", text: "Audience Growth" },
      { icon: "/component-1-1.svg", text: "Monthly Plans" },
    ],
    badge: {
      text: "Engagement",
      icon: "/component-1-3.svg",
    },
    pricing: "Custom Packages",
  },
  {
    id: 3,
    title: "Photography & Videography",
    description:
      "High-quality visual content that captures your brand essence and communicates your unique value proposition.",
    image: "/professional-photography.png",
    rating: 5.0,
    features: [{ icon: "/component-1-6.svg", text: "Professional" }],
    details: [
      { icon: "/component-1-14.svg", text: "Content Packages" },
      { icon: "/component-1-2.svg", text: "Production" },
    ],
    badge: {
      text: "Visual Storytelling",
      icon: "/component-1-9.svg",
    },
    pricing: "Project-Based",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="relative flex items-center justify-center mb-4">
          <div className="relative pb-2 border-b-2 border-everefficientlkcerulean-blue w-[239px] flex items-center">
            <img
              className="w-[29px] h-[21px]"
              alt="Component"
              src="/component-1-74.svg"
            />
            <div className="ml-2 text-2xl font-semibold text-everefficientlkcerulean-blue">
              OUR SOLUTIONS
            </div>
          </div>
        </div>

        <div className="text-center text-5xl font-semibold max-w-[576px]">
          <h2 className="text-everefficientlkmirage">Transform Your</h2>
          <h2>
            <span className="text-everefficientlkmirage">Business With </span>
            <span className="text-everefficientlkcerulean-blue">
              Digital<br />Excellence
            </span>
          </h2>
          <p className="mt-6 text-lg font-normal text-zinc-700 text-[15px] leading-7 text-center max-w-[516px]">
            Comprehensive digital services designed to elevate your brand and drive measurable growth.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {serviceCards.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="group relative rounded-[50px_50px_50px_0px] overflow-hidden bg-white/60 backdrop-blur-md shadow-[12px_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[16px_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015]">
              <CardContent className="p-0">
                <div className="relative p-5 pb-0">
                  <div
                    className="w-full h-[236px] rounded-[40px_40px_40px_0px] bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div
                      className={`absolute top-[15px] ${service.id === 1 ? "right-[15px]" : "right-auto"} ${
                        service.id === 3
                          ? "left-[187px]"
                          : service.id === 2
                          ? "left-[193px]"
                          : "left-auto"
                      } bg-zinc-900 backdrop-blur-md rounded-[40px_40px_40px_0px] shadow-md flex items-center px-4 py-2`}
                    >
                      <img className="w-4 h-4" alt="Icon" src={service.badge.icon} />
                      <span className="ml-2 text-everefficientlkwhite font-medium text-[14px] tracking-wide">
                        {service.badge.text}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Feature icon"
                      src={service.features[0].icon}
                    />
                    <span className="font-medium text-[15px] text-everefficientlkslate-gray">
                      {service.features[0].text}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          className="w-[16px] h-[16px]"
                          alt="Star"
                          src={
                            star <= Math.floor(service.rating)
                              ? "/component-1.svg"
                              : "/component-1-61.svg"
                          }
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-sm font-semibold text-everefficientlkcerulean-blue">
                      ({service.rating})
                    </span>
                  </div>
                </div>

                <div className="px-6 pt-1">
                  <a
                    href="https://everefficient.lk/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] font-semibold text-everefficientlkmirage hover:text-everefficientlkcerulean-blue transition-colors"
                  >
                    {service.title}
                  </a>
                  <p className="mt-2 text-[15px] text-everefficientlkslate-gray leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 px-6 pt-4 pb-5 border-t border-[#00000014]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <img className="w-4 h-4" alt="Detail icon" src={detail.icon} />
                          <span className="ml-2 text-[15px] text-everefficientlkslate-gray font-medium">
                            {detail.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Badge className="bg-everefficientlkcerulean-blue text-everefficientlkwhite rounded-[50px_50px_50px_0px] text-[15px] py-1 px-3 shadow-lg transition-all duration-200">
                      {service.pricing}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
