import { ContactSection } from "@/components/new/contact-section";
import { IntroSection } from "@/components/new/intro-section";
import { ProfileTabs } from "@/components/new/profile-tabs";

export const metadata = {
  title: "New",
};

export default function NewPage() {
  return (
    <>
      <IntroSection />
      <ProfileTabs />
      <ContactSection />
    </>
  );
}
