import { AttractionsSection } from "@/components/attractions-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AttractionsSection />
      </main>
      <Footer />
    </div>
  );
}
