import React from "react";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
import { Footer } from "@/components/footer";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
