import { ContactSection } from "@/components/new/contact-section";
import { IntroSection } from "@/components/new/intro-section";
import { NewFooter } from "@/components/new/new-footer";
import { NewHeader } from "@/components/new/new-header";
import { ProfileTabs } from "@/components/new/profile-tabs";

export const metadata = {
  title: "New",
};

export default function NewPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 sm:px-6">
      <NewHeader />
      <IntroSection />
      <ProfileTabs />
      <ContactSection />
      <NewFooter />
    </main>
  );
}
