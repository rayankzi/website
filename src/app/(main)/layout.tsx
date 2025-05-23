import { NavMenu } from "@/components/nav-menu";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <NavMenu />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar />

        <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
          {children}

          <Footer />
        </div>
      </div>
    </ViewTransitions>
  );
}
