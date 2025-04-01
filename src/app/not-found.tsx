import { NavMenu } from "@/components/nav-menu";
import { Sidebar } from "@/components/sidebar";
import { Link, ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Not Found",
};

export default function NotFound({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <NavMenu />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar />

        <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
          <div className="flex h-full flex-col gap-4">
            <h1>Woah, this doesn&apos;t exist.</h1>
            <p>
              It looks I don&apos;t have what you&apos;re looking for. Sorry!
            </p>
            <Link href="/">Go Back Home</Link>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </ViewTransitions>
  );
}
