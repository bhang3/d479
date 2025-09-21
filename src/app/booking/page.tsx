import { BookingSection } from "@/components/booking-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
