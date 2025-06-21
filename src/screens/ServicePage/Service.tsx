import { ServicesSection } from "./sections/ServicesSection";
import { HeaderSection } from "../../components/ui/HeaderSection/HeaderSection";
import { FooterSection } from "../../components/ui/FooterSection";

export const Service = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-everefficientlkwhite">
      <HeaderSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};
