import { LodgingSection } from "@/components/lodging-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LodgingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LodgingSection />
      </main>
      <Footer />
    </div>
  );
}
