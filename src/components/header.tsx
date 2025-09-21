import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Attractions", href: "/attractions" },
    { name: "Dining", href: "/dining" },
    { name: "Lodging", href: "/lodging" },
    { name: "Plan Your Visit", href: "/plan-visit" },
    { name: "Practical Info", href: "/practical-info" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            Taniti
          </Link>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
