import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

const advantageCards = [
  {
    id: 1,
    title: "Proven Experience",
    description: "10+ years delivering\nsuccessful digital\ntransformations",
    iconUrl: "/proven-results.png",
  },
  {
    id: 2,
    title: "Personalized\nApproach",
    description: "Strategies tailored to your\nunique business needs",
    iconUrl: "/custom-solutions.png",
  },
  {
    id: 3,
    title: "Measurable\nResults",
    description: "Clear ROI tracking with\ntransparent reporting",
    iconUrl: "/analytics.png",
  },
  {
    id: 4,
    title: "Cutting-Edge\nSolutions",
    description: "Always ahead of digital\ntrends and technologies",
    iconUrl: "/innovation.png",
  },
];

export const OverlapGroupSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 bg-everefficientlkblack ">
      <div className="relative px-10 w-full h-full bg-[url(/image-1.png)] bg-cover">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-[253px] h-5 border-b-2 [border-bottom-style:solid] border-[#275ba8] relative">
              <img
                className="absolute w-6 h-[21px] -top-1.5 left-0"
                alt="Component"
                src="/component-1-60.svg"
              />
              <div className="w-[230px] left-6 absolute h-[33px] -top-2.5 font-everefficient-lk-inter-bold-upper font-[number:var(--everefficient-lk-inter-bold-upper-font-weight)] text-everefficientlkcerulean-blue text-[length:var(--everefficient-lk-inter-bold-upper-font-size)] tracking-[var(--everefficient-lk-inter-bold-upper-letter-spacing)]  whitespace-nowrap [font-style:var(--everefficient-lk-inter-bold-upper-font-style)]">
                OUR ADVANTAGES
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="mb-6">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[49.4px] leading-[55px]">
                  <span className="text-white">Why Businesses</span>
                  <br />
                  <span className="text-everefficientlkcerulean-blue">
                    Choose Us
                  </span>
                </h2>
              </div>
              <div className="max-w-[551px] mb-10 [font-family:'Inter',Helvetica] font-normal text-everefficientlkwhite text-[16.8px] tracking-[0] leading-[28.8px]">
                At Ever Efficient, we combine strategic thinking with digital
                expertise to deliver solutions that drive real business growth
                and measurable results.
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {advantageCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="group w-full h-[160px] bg-white backdrop-blur-lg rounded-[50px_50px_50px_0px] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.25)] hover:scale-[1.02] relative overflow-hidden"
                    >
                      <CardContent className="relative h-full p-0">
                        <div className="flex items-center justify-center w-20 h-20 absolute top-5 -left-5 bg-everefficientlkcerulean-blue rounded-[50px_50px_50px_0px] shadow-lg transition-all group-hover:-translate-x-1">
                          <div
                            className="w-[45px] h-[45px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${card.iconUrl})` }}
                          />
                        </div>

                        <div className="absolute left-[85px] top-[22px] pr-5">
                          <h3 className="text-[20px] font-semibold text-everefficientlkmirage leading-[24px] mb-1">
                            {card.title}
                          </h3>
                          <p className="text-sm text-everefficientlkslate-gray leading-[1.6] whitespace-pre-line">
                            {card.description}
                          </p>
                        </div>

                        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-everefficientlkcerulean-blue/10 blur-xl" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative flex-1"
            >
              <div className="relative w-full h-[394px]">
                <div className="absolute w-full h-full rounded-[138.07px_0px_138.07px_138.07px] bg-[url(/digital-strategy-meeting.png)] bg-cover bg-[50%_50%]" />
                <div className="absolute w-full h-full top-[15px] left-[-15px] rounded-[138.07px_0px_138.07px_138.07px] border-[5px] border-solid border-everefficientlkcerulean-blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
