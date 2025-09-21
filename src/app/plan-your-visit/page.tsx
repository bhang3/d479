import { PlanYourVisitSection } from "@/components/plan-your-visit-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PlanYourVisitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PlanYourVisitSection />
      </main>
      <Footer />
    </div>
  );
}
