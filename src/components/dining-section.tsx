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
  Utensils,
  Coffee,
  Wine,
  Fish,
  Leaf,
  Clock,
  ChefHat,
} from "lucide-react";

export function DiningSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const restaurants = [
    {
      id: 1,
      name: "Daily Catch",
      type: "Local Cuisine",
      description:
        "Traditional Tanitian fish and rice dishes prepared with authentic island spices and fresh daily catches.",
      image: "/dining/daily-catch.jpg",
      category: "local",
      priceRange: "$$",
      hours: "11 AM - 10 PM",
      specialties: [
        "Grilled Island Fish",
        "Coconut Rice",
        "Tropical Fruit Salad",
      ],
    },
    {
      id: 2,
      name: "Taniti Brewing Company",
      type: "Microbrewery & Pub",
      description:
        "Local microbrewery featuring craft beers and hearty pub fare in a relaxed island atmosphere.",
      image: "/dining/brewing-co.jpg",
      category: "drinks",
      priceRange: "$",
      hours: "4 PM - 12 AM",
      specialties: ["Island IPA", "Fish & Chips", "Local Beer Flights"],
    },
    {
      id: 3,
      name: "Legendary Spice",
      type: "Pan-Asian Fusion",
      description:
        "Contemporary Pan-Asian cuisine blending traditional flavors with modern island ingredients.",
      image: "/dining/legendary-spice.jpg",
      category: "international",
      priceRange: "$$$",
      hours: "5 PM - 11 PM",
      specialties: ["Thai Curry", "Sushi Rolls", "Vietnamese Pho"],
    },
    {
      id: 4,
      name: "Sunrise Café",
      type: "American Breakfast",
      description:
        "Classic American breakfast and brunch favorites with a tropical twist and fresh local coffee.",
      image: "/dining/sunrise-cafe.jpg",
      category: "american",
      priceRange: "$",
      hours: "6 AM - 2 PM",
      specialties: ["Pancakes", "Island Coffee", "Fresh Fruit Bowls"],
    },
    {
      id: 5,
      name: "Volcano Grill",
      type: "Fine Dining",
      description:
        "Upscale dining with premium steaks and international cuisine, featuring panoramic volcano views.",
      image: "/dining/volcano-grill.jpg",
      category: "american",
      priceRange: "$$$$",
      hours: "6 PM - 10 PM",
      specialties: ["Prime Ribeye", "Lobster Tail", "Wine Selection"],
    },
    {
      id: 6,
      name: "Taniti Island Kitchen",
      type: "Local Cuisine",
      description:
        "Authentic Tanitian home-style meals featuring freshly caught fish, root vegetables, and tropical fruits, served in a warm, family-style setting.",
      image: "/dining/taniti-island-kitchen.jpg",
      category: "local",
      priceRange: "$",
      hours: "10 AM - 9 PM",
      specialties: ["Grilled Reef Fish", "Coconut Rice", "Breadfruit Stew"],
    },
  ];

  const categories = [
    { id: "all", name: "All Dining", icon: <Utensils className="h-4 w-4" /> },
    { id: "local", name: "Local Cuisine", icon: <Fish className="h-4 w-4" /> },
    {
      id: "international",
      name: "International",
      icon: <ChefHat className="h-4 w-4" />,
    },
    { id: "american", name: "American", icon: <Coffee className="h-4 w-4" /> },
    { id: "drinks", name: "Bars & Pubs", icon: <Wine className="h-4 w-4" /> },
  ];

  const filteredRestaurants =
    activeCategory === "all"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === activeCategory
        );

  const diningInfo = {
    overview: [
      {
        icon: <Wine className="h-6 w-6 text-primary" />,
        title: "Local Microbrewery",
        description:
          "Enjoy craft beers brewed on the island, plus local pubs and bars throughout Merriton Landing.",
      },
      {
        icon: <Leaf className="h-6 w-6 text-primary" />,
        title: "Fresh Local Ingredients",
        description:
          "Most restaurants feature fresh daily catches, tropical fruits, and locally grown produce.",
      },
      {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Alcohol Service Hours",
        description:
          "Drinking age is 18. Alcohol sales prohibited from midnight to 9 AM daily.",
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Dining in Taniti
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {diningInfo.overview.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">{item.icon}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2">
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {restaurant.priceRange}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  {restaurant.type}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{restaurant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {restaurant.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {restaurant.hours}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  View Menu & Reserve
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-accent-foreground">
            Holiday Notice
          </h3>
          <p className="text-muted-foreground">
            Restaurants may have limited hours or be closed during national
            holidays. We recommend calling ahead during holiday periods.
          </p>
        </div>
      </div>
    </section>
  );
}
