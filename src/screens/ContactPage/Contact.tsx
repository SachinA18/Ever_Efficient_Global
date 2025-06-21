
import { FooterSection } from "../../components/ui/FooterSection";
import { HeaderSection } from "../../components/ui/HeaderSection";
import { ContactSection } from "./sections/ContactSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-everefficientlkwhite">
      <HeaderSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
