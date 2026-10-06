import { WorkPage } from "@/components/work-page";

export const metadata = {
  title: "Work — Grid",
  description: "Rayan Kazi's work experience, presented as a modular card grid.",
};

export default function WorkGridPage() {
  return <WorkPage concept={3} />;
}
