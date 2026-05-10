import { ContactSection } from "@/components/contact-section";
import { IntroSection } from "@/components/intro-section";
import { ProfileTabs } from "@/components/profile-tabs";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <ProfileTabs />
      <ContactSection />
    </>
  );
}
