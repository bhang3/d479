"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Send } from "lucide-react";
import dayjs from "dayjs";

export function BookingSection() {
  const today = dayjs();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodation: "",
    activities: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your interest! We will contact you soon to finalize your Taniti adventure."
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Plan Your Visit
          </h2>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-primary" />
                Book Your Stay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin">Check-in Date</Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) =>
                        handleInputChange("checkIn", e.target.value)
                      }
                      min={today.toString()}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout">Check-out Date</Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) =>
                        handleInputChange("checkOut", e.target.value)
                      }
                      min={today.toString()}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("guests", value)
                      }
                      required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5+">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("accommodation", value)
                      }
                      required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hostel">Budget Hostel</SelectItem>
                        <SelectItem value="hotel">Family Hotel</SelectItem>
                        <SelectItem value="bnb">Bed & Breakfast</SelectItem>
                        <SelectItem value="resort">Four-Star Resort</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="activities">Interested Activities</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("activities", value)
                      }
                      required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beaches">Beaches</SelectItem>
                        <SelectItem value="adventure">Adventures</SelectItem>
                        <SelectItem value="culture">
                          Culture & History
                        </SelectItem>
                        <SelectItem value="tours">Guided Tours</SelectItem>
                        <SelectItem value="culinary">
                          Culinary Experiences
                        </SelectItem>
                        <SelectItem value="all">Everything!</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Special Requests or Questions</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about any special requirements, dietary restrictions, or questions you have..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
