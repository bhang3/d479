"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Waves,
  Mountain,
  Heart,
  Shield,
} from "lucide-react";
import Image from "next/image";

import BlueWatersHotel from "@/assets/lodging/blue-waters-hotel.jpg";
import RainforestBedBreakfast from "@/assets/lodging/rainforest-bed-breakfast.jpg";
import RockyLodge from "@/assets/lodging/rocky-lodge.jpg";
import TanitiGrandResort from "@/assets/lodging/taniti-grand-resort.jpg";
import TanitiHostel from "@/assets/lodging/taniti-hostel.jpg";
import YellowBayDeluxeResort from "@/assets/lodging/yellow-bay-deluxe-resort.jpg";

export function LodgingSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const accommodations = [
    {
      id: 1,
      name: "Taniti Grand Resort",
      category: "resort",
      rating: 4,
      price: "$$$",
      image: TanitiGrandResort,
      description:
        "Our premier four-star resort offering luxury accommodations with stunning ocean views and world-class amenities.",
      amenities: ["Ocean View", "Pool", "Spa", "Restaurant", "WiFi", "Parking"],
    },
    {
      id: 2,
      name: "Blue Waters Hotel",
      category: "hotel",
      rating: 3,
      price: "$$",
      image: BlueWatersHotel,
      description:
        "A charming family-owned hotel with personalized service and authentic Tanitian hospitality.",
      amenities: ["Garden View", "Restaurant", "WiFi", "Family Rooms"],
    },
    {
      id: 3,
      name: "Rainforest Bed & Breakfast",
      category: "bnb",
      rating: 4,
      price: "$$",
      image: RainforestBedBreakfast,
      description:
        "Wake up to the sounds of nature in our eco-friendly B&B nestled in the tropical rainforest.",
      amenities: ["Nature View", "Breakfast", "WiFi", "Hiking Access"],
    },
    {
      id: 4,
      name: "Taniti Hostel",
      category: "hostel",
      rating: 3,
      price: "$",
      image: TanitiHostel,
      description:
        "Clean, safe, and affordable accommodation perfect for budget travelers and backpackers.",
      amenities: ["Shared Kitchen", "Common Area", "WiFi", "Lockers"],
    },
    {
      id: 5,
      name: "Yellow Bay Deluxe Resort",
      category: "resort",
      rating: 4,
      price: "$$$$",
      image: YellowBayDeluxeResort,
      description:
        "An exclusive five-star resort featuring private villas, fine dining, and unmatched luxury along Yellow Bay’s pristine shoreline.",
      amenities: [
        "Sunset View",
        "Private Villas",
        "Pool",
        "Spa",
        "Fitness Center",
        "Breakfast",
        "WiFi",
      ],
    },
    {
      id: 6,
      name: "Rocky Lodge",
      category: "hotel",
      rating: 3,
      price: "$$",
      image: RockyLodge,
      description:
        "Family-owned lodge offering spectacular mountain and volcano views with hiking trail access.",
      amenities: ["Mountain View", "Restaurant", "WiFi", "Hiking Trails"],
    },
  ];

  const categories = [
    { id: "all", label: "All Accommodations" },
    {
      id: "resort",
      label: "Resorts",
    },
    {
      id: "hotel",
      label: "Hotels",
    },
    {
      id: "bnb",
      label: "B&Bs",
    },
    {
      id: "hostel",
      label: "Hostels",
    },
  ];

  const filteredAccommodations =
    activeCategory === "all"
      ? accommodations
      : accommodations.filter((acc) => acc.category === activeCategory);

  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "Ocean View": <Waves className="h-4 w-4" />,
      "Mountain View": <Mountain className="h-4 w-4" />,
      "Garden View": <Heart className="h-4 w-4" />,
      "Nature View": <Heart className="h-4 w-4" />,
      "Sunset View": <Heart className="h-4 w-4" />,
      WiFi: <Wifi className="h-4 w-4" />,
      Parking: <Car className="h-4 w-4" />,
      Restaurant: <Utensils className="h-4 w-4" />,
      Breakfast: <Coffee className="h-4 w-4" />,
    };
    return icons[amenity] || <Shield className="h-4 w-4" />;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Where to Stay in Taniti
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Luxury Resort</h3>
            <p className="text-sm text-muted-foreground">
              Four-star amenities with premium ocean views and world-class
              service
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Family Hotels</h3>
            <p className="text-sm text-muted-foreground">
              Small, family-owned properties offering authentic Tanitian
              hospitality
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Bed & Breakfasts</h3>
            <p className="text-sm text-muted-foreground">
              Charming accommodations with personalized service and local
              breakfast
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Budget Hostels</h3>
            <p className="text-sm text-muted-foreground">
              Clean, safe, and affordable options perfect for budget travelers
            </p>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2">
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAccommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  placeholder="blur"
                  priority
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-foreground">
                    {accommodation.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                  {[...Array(accommodation.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <CardHeader>
                <div>
                  <CardTitle className="text-xl mb-2">
                    {accommodation.name}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {accommodation.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-xs bg-secondary/50 px-2 py-1 rounded">
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
