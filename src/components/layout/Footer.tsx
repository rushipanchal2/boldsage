import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">Boldsage Digital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Innovate. Secure. Deliver. Your trusted partner in technology solutions.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline font-semibold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/services/ai-products" className="text-muted-foreground hover:text-primary">AI Products</Link></li>
                <li><Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary">Cybersecurity</Link></li>
                <li><Link href="/services/import-export" className="text-muted-foreground hover:text-primary">Import/Export</Link></li>
                <li><Link href="/services/software-development" className="text-muted-foreground hover:text-primary">Software Development</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Boldsage Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
