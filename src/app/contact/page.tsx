import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., AI Solution Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project or question." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Submit Form
                </Button>
              </form>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground">General Inquiries: <a href="mailto:info@boldsage.com" className="text-accent hover:underline">info@boldsage.com</a></p>
                      <p className="text-muted-foreground">Careers: <a href="mailto:careers@boldsage.com" className="text-accent hover:underline">careers@boldsage.com</a></p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-start gap-4">
                     <div className="flex-shrink-0 mt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-muted-foreground">Main Office: <a href="tel:+911234567890" className="text-accent hover:underline">+91 123 456 7890</a></p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-start gap-4">
                     <div className="flex-shrink-0 mt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Office Location</h3>
                      <p className="text-muted-foreground">123 Tech Park, Pune, Maharashtra, 411057, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 h-80 w-full rounded-lg overflow-hidden shadow-sm relative">
                <Image src="https://placehold.co/800x400" layout="fill" objectFit="cover" alt="Map to Boldsage office" data-ai-hint="map location"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
