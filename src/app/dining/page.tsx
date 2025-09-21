import { DiningSection } from "@/components/dining-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DiningSection />
      </main>
      <Footer />
    </div>
  );
}
