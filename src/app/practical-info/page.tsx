import { PracticalInfoSection } from "@/components/practical-info-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PracticalInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PracticalInfoSection />
      </main>
      <Footer />
    </div>
  );
}
