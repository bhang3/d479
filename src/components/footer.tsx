import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Taniti</h3>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="pl-8">
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors">
                  About Taniti
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions"
                  className="hover:text-primary transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="hover:text-primary transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/lodging"
                  className="hover:text-primary transition-colors">
                  Lodging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@taniti.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (123) 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Taniti</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Bao Tran Hang</p>
        </div>
      </div>
    </footer>
  );
}
