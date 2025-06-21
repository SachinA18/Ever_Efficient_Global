import {
  ChevronRightIcon,
  LinkedinIcon,
  LucideFacebook,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Button } from "./button";
//import { FaWhatsapp } from "react-icons/fa";

// Data for quick links
const quickLinks = [
  { text: "Home", url: "/" },
  { text: "Services", url: "/Services" },
  { text: "About Us", url: "/About" },
  { text: "Contact Us", url: "/Contact" },
];

// Data for contact information
const contactInfo = [
  {
    icon: <PhoneIcon className="w-4 h-4 text-gray-200" />,
    text: "+94 777 644 590",
    url: null,
  },
  {
    icon: <MapPinIcon className="w-3 h-4 text-gray-200" />,
    text: "315B ANG MO KIO STREET 31,#03-317,TECK GHEE VISTA, SINGAPORE 563315",
    url: null,
  },
  {
    icon: <MailIcon className="w-4 h-4 text-gray-200" />,
    text: "Everefficient.Official@gmail.com",
    url: "mailto:Everefficient.Official@gmail.com",
  },
];

const FooterSection = () => {
  return (
    <footer className="w-full px-4 py-8 md:px-10 bg-everefficientlkblack">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Info Section */}
          <div className="flex flex-col space-y-4">
            <div className="w-[180px] h-[45px] bg-[url(/resize.png)] bg-cover bg-center" />
            <p className="text-sm leading-relaxed text-everefficientlkwhite">
              Transform your business with cutting-edge digital strategies and
              efficient management solutions
            </p>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-everefficientlkcerulean-blue rounded-[10px_10px_10px_0px] flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-everefficientlkalice-blue hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-everefficientlkalice-blue">
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:ml-28">
            <h3 className="mb-4 text-lg font-semibold text-everefficientlkwhite">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-sm transition text-everefficientlkwhite hover:text-everefficientlkcerulean-blue"
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-everefficientlkwhite">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-everefficientlkwhite">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-3 text-sm text-everefficientlkshark-75 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#275ba8]"
            />

            <Button className="w-full md:w-auto h-[53px] bg-[#275ba8] hover:bg-[#1e4a8a] rounded-[50px_50px_50px_0px] shadow-lg text-sm text-white tracking-wide">
              SUBSCRIBE NOW
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4 mt-12 border-t sm:flex-row border-white/10">
          <span className="text-sm text-center text-everefficientlkalice-blue sm:text-left">
            Privacy Policy | Powered By{" "}
            <a
              href="https://everefficient.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline transition-colors duration-200"
            >
              EVER EFFICIENT Business Management (Pvt) Ltd.
            </a>
          </span>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ever-efficient"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-[10px_10px_10px_0px] text-everefficientlkcerulean-blue hover:scale-105 transition"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/94707446334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-[10px_10px_10px_0px] text-everefficientlkcerulean-blue hover:scale-105 transition"
            >
              {/*<FaWhatsapp className="w-5 h-5" />*/}
            </a>
            <a
              href="https://www.facebook.com/everefficient.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-[10px_10px_10px_0px] text-everefficientlkcerulean-blue hover:scale-105 transition"
            >
              <LucideFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
