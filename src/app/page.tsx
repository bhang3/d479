import { Header } from "@/components/header";
// import { HomeSection } from "@/components/home-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{/* <HomeSection /> */}</main>
      <Footer />
    </div>
  );
}
