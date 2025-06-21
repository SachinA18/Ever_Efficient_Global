import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import SpiderWeb from "../components/ui/SpiderWeb";
import HeaderSection from "../components/ui/HeaderSection";
import FooterSection from "../components/ui/FooterSection";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Office Address",
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      ringColor: "ring-blue-300",
      gradientFrom: "from-blue-100",
      gradientTo: "to-blue-200",
      content: (
        <>
          315B ANG MO KIO STREET 31,#03-317,
          <br />
          TECK GHEE VISTA, SINGAPORE 563315
        </>
      ),
    },
    {
      id: 2,
      title: "Call Us",
      icon: <Phone className="w-6 h-6 text-green-600" />,
      ringColor: "ring-green-300",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-200",
      content: "+94 777 644 590",
    },
    {
      id: 3,
      title: "Email Us",
      icon: <Mail className="w-6 h-6 text-pink-600" />,
      ringColor: "ring-pink-300",
      gradientFrom: "from-pink-100",
      gradientTo: "to-pink-200",
      content: "everefficient.official@gmail.com",
    },
  ];
  return (
    <div className="relative w-full bg-everefficientlkwhite">
      <HeaderSection />
      <section className="relative w-full h-[400px] bg-[black]  overflow-hidden hidden flex items-center justify-center">
        <a href="#about" className="absolute inset-0 z-0 block">
          <div className="flex w-full h-full">
            <SpiderWeb />
          </div>
        </a>
        <div className="relative z-10 text-center px-3 max-w-[1200px]">
          <h1 className="text-everefficientlkwhite font-everefficient-lk-semantic-heading-2-title text-[40.25px] leading-[45px] font-bold">
            Contact Us
          </h1>
          <div className="mt-4 flex items-center justify-center gap-[29.45px]">
            <div className="flex items-center">
              <a
                className="text-everefficientlkwhite font-everefficient-lk-inter-medium-title whitespace-nowrap"

              >
                Home
              </a>
              <img
                className="w-4 h-[28.8px] ml-2"
                alt="Separator"
                src="/component-1-2-8.svg"
              />
            </div>
            <span className="text-everefficientlkcerulean-blue font-everefficient-lk-semantic-item-title whitespace-nowrap">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b mt-16 from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-12">
            We're here to help and answer any question you might have.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`group p-6 text-center transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-2xl hover:ring-2 ${item.ringColor} rounded-2xl`}>
                  <CardContent>
                    <div
                      className={`mx-auto mb-4 flex items-center justify-center w-16 h-16 text-4xl rounded-full bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} group-hover:animate-pulse`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-50">
        <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-xl rounded-2xl md:grid-cols-2">
          {/* Left Image Section */}
          <div className="flex items-center justify-center bg-gray-100">
            <img
              src="/about-bg5.jpg"
              alt="Office"
              className="object-cover w-full h-full max-h-[700px] rounded-none md:rounded-l-2xl"
            />
          </div>

          {/* Right Contact Form */}
          <div className="p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              We'd love to hear from you! Fill out the form below and we'll get
              back to you soon.
            </p>


            <form
              action="https://formspree.io/f/mdkzleqk"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message..."
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />

      {/* <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.70539195056!2d80.66264422768067!3d7.29454365868474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366da4d7b2097%3A0x1f3e1102cf7aa2b5!2sKundasale!5e0!3m2!1sen!2slk!4v1718698000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default ContactSection;
