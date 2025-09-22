import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Mountain } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      number: "500",
      label: "Square Miles",
      description: "Of diverse terrain",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "20,000",
      label: "Local Population",
      description: "Indigenous People",
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      number: "1",
      label: "Active Volcano",
      description: "Safe to visit",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6 text-balance">
            About the Island
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Taniti is a small, tropical island in the Pacific. While the island
            has an area of less than 500 square miles, the terrain is varied and
            includes both sandy and rocky beaches, a small but safe harbor, lush
            tropical rainforests, and a mountainous interior that includes a
            small, active volcano.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">A Growing Paradise</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Taniti has an indigenous population of about 20,000. Until a
              recent increase in tourism, most of the Tanitian economy was
              dominated by fishing or agriculture.
            </p>
          </div>
          <div className="relative">
            <img
              src="/about/about.jpg"
              alt="Traditional Tanitian village"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
