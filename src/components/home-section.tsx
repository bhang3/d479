import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Utensils, Bed } from "lucide-react";
import Link from "next/link";

export function HomeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/home.jpg')`,
        }}>
        <div className="absolute inset-0 home-overlay" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-7xl font-serif font-bold mb-6 text-balance">
          Discover Taniti
        </h1>

        <div className="grid grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <Link href="/attractions">
            <Button
              size="lg"
              className="w-full h-20 bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Explore Attractions</span>
            </Button>
          </Link>

          <Link href="/dining">
            <Button
              size="lg"
              className="w-full h-20 bg-accent/90 hover:bg-accent text-accent-foreground backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center gap-2">
              <Utensils className="h-5 w-5" />
              <span className="text-sm font-medium">Dining Options</span>
            </Button>
          </Link>

          <Link href="/lodging">
            <Button
              size="lg"
              className="w-full h-20 bg-secondary/90 hover:bg-secondary text-secondary-foreground backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center gap-2">
              <Bed className="h-5 w-5" />
              <span className="text-sm font-medium">Find Lodging</span>
            </Button>
          </Link>

          <Link href="/plan-visit">
            <Button
              size="lg"
              className="w-full h-20 bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Plan Your Visit</span>
            </Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 text-lg px-12 py-4 rounded-full font-semibold shadow-lg">
              Book Your Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
