import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { PrimaryLayout } from "@/layouts/primary";
import Link from "next/link";

export default function NotFound() {
  return (
    <PrimaryLayout>
      <Header />
      <main className="flex flex-1 items-center py-16">
        <section className="flex max-w-lg flex-col gap-5">
          <p className="text-sm font-medium text-muted-foreground">404</p>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              This page drifted out of orbit.
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              The page you are looking for does not exist, or it moved during
              the redesign.
            </p>
          </div>
          <Button asChild className="w-fit">
            <Link href="/">Back home</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </PrimaryLayout>
  );
}
