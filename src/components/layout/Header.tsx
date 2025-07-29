
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    isDropdown: true,
    dropdownItems: [
      { href: '/services/ai-products', label: 'AI-Based Products' },
      { href: '/services/cybersecurity', label: 'Cybersecurity' },
      { href: '/services/import-export', label: 'Import/Export' },
      { href: '/services/software-development', label: 'Software Development' },
      { href: '/services/software-services', label: 'Software Services' },
    ],
  },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (link: (typeof navLinks)[0], isMobile = false) => {
    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

    if (link.isDropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
              isActive ? 'text-primary' : 'text-muted-foreground',
               isMobile && 'justify-between w-full'
            )}
          >
            {link.label} <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isMobile ? 'start' : 'center'}>
            {link.dropdownItems?.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href} onClick={() => isMobile && setIsMobileMenuOpen(false)}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        href={link.href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground'
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-card/80 backdrop-blur-sm border-b' : 'bg-card/50'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Boldsage Digital</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => renderNavLink(link))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-bold">Boldsage Digital</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => renderNavLink(link, true))}
                </nav>
                 <Button asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
