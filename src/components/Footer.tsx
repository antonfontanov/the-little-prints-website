import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/ae0cf63b379a9c48a9bc8b575fbffd4cb0aee8c6.png";

export function Footer() {
  return (
    <footer className="bg-warm-brown text-cream py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="The Little Prints logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl text-terracotta tracking-tight">The Little Prints</span>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Preserving childhood memories one artwork at a time. Transform your child's creativity into timeless keepsakes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-terracotta">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                How It Works
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Examples
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-terracotta">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Order Status
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-sm text-cream/80 hover:text-terracotta transition-colors">
                Returns
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-terracotta">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-cream/80">hello@thelittleprints.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-cream/80">1-800-ARTWORK</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta mt-0.5" />
                <span className="text-sm text-cream/80 leading-relaxed">
                  123 Creative Street<br />
                  Art District, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/60">
              © 2024 The Little Prints. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-cream/60 hover:text-terracotta transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-cream/60 hover:text-terracotta transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}