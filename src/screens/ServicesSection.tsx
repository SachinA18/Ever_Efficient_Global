import { motion } from "framer-motion";
import FooterSection from "../components/ui/FooterSection";
import HeaderSection from "../components/ui/HeaderSection";
// Service data for mapping
const services = [
  {
    id: 1,
    category: "DIGITAL SOLUTIONS",
    title: "Strategic Digital Marketing",
    description:
      "Comprehensive digital marketing solutions to boost your online presence and drive measurable results. Our data-driven approach ensures maximum ROI for your marketing investments.",
    features: [
      {
        icon: "/component-1-2-12.svg",
        title: "Search Engine Optimization (SEO):",
        description: "Improve visibility and organic rankings",
      },
      {
        icon: "/component-1-2-19.svg",
        title: "Pay-Per-Click Advertising:",
        description: "Targeted campaigns on Google and social media",
      },
      {
        icon: "/component-1-2-16.svg",
        title: "Email Marketing:",
        description: "Nurture leads with automated sequences",
      },
      {
        icon: "/component-1-2-23.svg",
        title: "Analytics & Reporting:",
        description: "Transparent performance tracking",
      },
    ],
    ctaText: "Get Marketing Audit",
    ctaLink: "https://everefficient.lk/services.html",
    iconPrefix: "/component-1-2-37.svg",
    image: "/digital-marketing-strategy-session.png",
    hasBg: false,
  },
  {
    id: 2,
    category: "ONLINE PRESENCE",
    title: "Professional Social Media Management",
    description:
      "We build authentic brand connections through strategic social media management that engages your audience and grows your community.",
    features: [
      {
        icon: "/component-1-2-28.svg",
        title: "Strategy Development:",
        description: "Platform-specific roadmaps",
      },
      {
        icon: "/component-1-2-18.svg",
        title: "Content Creation:",
        description: "Engaging posts and visuals",
      },
      {
        icon: "/component-1-2-33.svg",
        title: "Community Management:",
        description: "Daily engagement",
      },
      {
        icon: "/component-1-2-24.svg",
        title: "Performance Analysis:",
        description: "Continuous optimization",
      },
    ],
    ctaText: "View Our Portfolio",
    ctaLink: "#",
    iconPrefix: "/component-1-2-37.svg",
    image: "/social-media-content-creation.png",
    hasBg: true,
  },
  {
    id: 3,
    category: "VISUAL STORYTELLING",
    title: "Professional Photography & Videography",
    description:
      "High-quality visual content that captures your brand essence and communicates your unique value proposition across all platforms.",
    features: [
      {
        icon: "/component-1-2-39.svg",
        title: "Product Photography:",
        description: "Showcase your offerings",
      },
      {
        icon: "/component-1-2-21.svg",
        title: "Brand Videos:",
        description: "Tell your company story",
      },
      {
        icon: "/component-1-2-30.svg",
        title: "Event Coverage:",
        description: "Professional documentation",
      },
      {
        icon: "/component-1-2-34.svg",
        title: "Post-Production:",
        description: "Expert editing services",
      },
    ],
    ctaText: "View Our Gallery",
    ctaLink: "#",
    iconPrefix: "/component-1-2-26.svg",
    image: "/professional-photography-session.png",
    hasBg: false,
  },
  {
    id: 4,
    category: "DIGITAL PRESENCE",
    title: "Custom Web Development",
    description:
      "Results-driven websites that combine stunning design with seamless functionality to convert visitors into customers.",
    features: [
      {
        icon: "/component-1-2-25.svg",
        title: "Custom Website Design:",
        description: "Unique brand-aligned designs",
      },
      {
        icon: "/component-1-2-35.svg",
        title: "E-commerce Solutions:",
        description: "Secure online stores",
      },
      {
        icon: "/component-1-2-38.svg",
        title: "Mobile Optimization:",
        description: "Flawless mobile experience",
      },
      {
        icon: "/component-1-2-27.svg",
        title: "Maintenance & Support:",
        description: "Ongoing technical care",
      },
    ],
    ctaText: "Request A Quote",
    ctaLink: "#",
    iconPrefix: "/component-1-2-36.svg",
    image: "/web-development-process.png",
    hasBg: true,
  },
  {
    id: 5,
    category: "STRATEGIC GROWTH",
    title: "Business Consulting Services",
    description:
      "Expert guidance to optimize your operations, streamline processes, and position your business for sustainable growth in the digital age.",
    features: [
      {
        icon: "/component-1-2-1.svg",
        title: "Business Analysis:",
        description: "Comprehensive operational review",
      },
      {
        icon: "/component-1-2-2.svg",
        title: "Process Optimization:",
        description: "Efficiency improvements",
      },
      {
        icon: "/component-1-2.svg",
        title: "Strategic Planning:",
        description: "Long-term roadmap",
      },
      {
        icon: "/component-1-2-4.svg",
        title: "Team Training:",
        description: "Digital skills development",
      },
    ],
    ctaText: "Schedule Consultation",
    ctaLink: "#",
    iconPrefix: "/component-1-2-32.svg",
    image: "/business-consulting-meeting.png",
    hasBg: false,
  },
];

const ServicesSection = () => {
  return (
    <div className="relative w-full mt-16 bg-everefficientlkwhite">
      <HeaderSection />
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`w-full flex justify-center py-[50px] px-4 ${
            service.hasBg ? "bg-everefficientlkathens-gray" : "bg-white"
          }`}
        >
          <div className="max-w-[1200px] w-full rounded-3xl overflow-hidden ">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              {/* Left Content */}
              <div className="flex-1 w-full px-4 space-y-6">
                {/* Category and Title */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b-2 border-[#275ba8] pb-2">
                    {service.iconPrefix === "#" ? (
                      <div className="w-[22px] h-[22px] text-everefficientlkcerulean-blue">
                        <span className="text-xl"></span>
                      </div>
                    ) : (
                      <img
                        src={service.iconPrefix}
                        alt="Category icon"
                        className="w-5 h-5"
                      />
                    )}
                    <span className="text-lg font-semibold uppercase tracking-[3px] text-everefficientlkcerulean-blue">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl text-everefficientlkmirage">
                    <span>{service.title.split(" ")[0]}</span>{" "}
                    <span className="text-[#275ba8]">
                      {service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-[15px] md:text-[16.5px] leading-[26px] text-zinc-00 font-normal">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <img src={feature.icon} alt="Feature icon" className="w-4 h-4 mt-1" />
                      <div className="text-[#757f95] text-[14px] md:text-[15px] leading-[25px]">
                        <span className="font-bold">{feature.title}</span>
                        <span className="ml-1">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <div className="pt-4">
                  <Button
                    className="h-[50px] bg-[#275ba8] hover:bg-[#1e4a8a] rounded-[50px_50px_50px_0px] shadow-md transition-all duration-300"
                    asChild
                  >
                    <a
                      
                      className="flex items-center px-6"
                    >
                      <span className="text-white text-sm font-medium tracking-[1px]">
                        {service.ctaText}
                      </span>
                      <ArrowRightIcon className="ml-2 w-[15px] h-[15px]" />
                    </a>
                  </Button>
                </div> */}
              </div>

              {/* Right Image */}
              <div className="relative flex-1 w-full px-4">
                <div className="absolute w-full max-w-[520px] h-[360px] top-0 left-0 bg-everefficientlkblack rounded-[50px_50px_50px_0px] rotate-[-6deg] z-0 opacity-10 hidden md:block" />
                <div
                  className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] max-w-[520px] bg-cover bg-center rounded-[100px_100px_100px_0px] z-10 shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      <FooterSection />
    </div>
  );
};

export default ServicesSection;
