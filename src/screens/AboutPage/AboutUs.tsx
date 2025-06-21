import { FooterSection } from "../../components/ui/FooterSection";
import { HeaderSection } from "../../components/ui/HeaderSection";
import { AboutSection } from "./sections/AboutSection";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-everefficientlkwhite">
      <HeaderSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};
