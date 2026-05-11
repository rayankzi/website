import { ContactSection } from "@/components/contact-section";
import { IntroSection } from "@/components/intro-section";
import { ProfileTabs } from "@/components/profile-tabs";
import { SkillsSection } from "@/components/skills-section";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <ProfileTabs />
      <ContactSection />
    </>
  );
}
