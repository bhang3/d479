"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Waves,
  TreePine,
  Mountain,
  Camera,
  Utensils,
  Music,
} from "lucide-react";

export function AttractionsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const attractions = [
    {
      id: 1,
      title: "Beach Day",
      description:
        "Sandy and rocky beaches that encircle Yellow Leaf Bay with crystal-clear waters perfect for swimming and snorkeling.",
      image: "/attractions/beach-day.jpg",
      categories: ["nature"],
      icon: <Waves className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Rainforest Adventures",
      description:
        "Explore lush tropical rainforests with zip-lining, hiking trails, and guided nature tours showcasing exotic wildlife.",
      image: "/attractions/zipline.jpg",
      categories: ["nature", "adventure"],
      icon: <TreePine className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Active Volcano Tours",
      description:
        "Visit Taniti's small but active volcano with guided tours offering spectacular views and geological insights.",
      image: "/attractions/volcano.jpg",
      categories: ["nature", "adventure"],
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Local History Museum",
      description:
        "Discover Taniti's rich cultural heritage and indigenous history through interactive exhibits and artifacts.",
      image: "/attractions/museum.jpg",
      categories: ["culture"],
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Culinary Experiences",
      description:
        "Savor local fish and rice dishes, Pan-Asian cuisine, and fresh tropical fruits at our diverse restaurants.",
      image: "/attractions/food.jpg",
      categories: ["culture", "entertainment"],
      icon: <Utensils className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "Nightlife & Entertainment",
      description:
        "Experience local pubs, microbrewery, dance clubs, and live music venues in the vibrant Merriton Landing area.",
      image: "/attractions/nightlife.jpg",
      categories: ["entertainment"],
      icon: <Music className="h-5 w-5" />,
    },
  ];

  const categories = [
    { id: "all", name: "All Attractions" },
    { id: "nature", name: "Nature" },
    { id: "adventure", name: "Adventure" },
    { id: "culture", name: "Culture" },
    { id: "entertainment", name: "Entertainment" },
  ];

  const filteredAttractions =
    activeCategory === "all"
      ? attractions
      : attractions.filter((attraction) =>
          attraction.categories.includes(activeCategory)
        );

  return (
    <section id="attractions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6 text-balance">
            Island Attractions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2">
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {filteredAttractions.map((attraction) => (
            <Card
              key={attraction.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {attraction.icon}
                  <span className="ml-1 capitalize">{attraction.category}</span>
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{attraction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {attraction.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
