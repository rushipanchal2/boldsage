import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lock, Shield, FileScan } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const securityServices = [
  {
    icon: <FileScan className="h-8 w-8 text-primary" />,
    title: 'Penetration Testing & VAPT',
    description: 'Identify and mitigate vulnerabilities in your networks, applications, and systems before attackers can exploit them.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Managed SOC Services',
    description: '24/7 monitoring, threat detection, and incident response from our state-of-the-art Security Operations Center.',
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Compliance & Governance',
    description: 'Achieve and maintain compliance with industry standards like ISO 27001, GDPR, and HIPAA with our expert guidance.',
  },
];

export default function CybersecurityPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">Cybersecurity Services</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Defending your digital frontier with proactive and intelligent security solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://placehold.co/600x450"
                    alt="Cybersecurity operations center"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="cybersecurity"
                />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">A Proactive Approach to Security</h2>
              <p className="mt-4 text-muted-foreground">
                In today's evolving threat landscape, a reactive security posture is not enough. Boldsage provides comprehensive, multi-layered cybersecurity services designed to protect your organization from the inside out. We help you anticipate threats, detect breaches early, and respond effectively.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of certified security experts utilizes advanced tools and proven methodologies to safeguard your critical data, infrastructure, and reputation. We act as an extension of your team, providing the expertise you need to navigate the complexities of digital security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Security Offerings</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Comprehensive services to cover every aspect of your security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityServices.map((service) => (
              <Card key={service.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center bg-secondary rounded-lg p-12">
          <h2 className="font-headline text-3xl font-bold text-primary">
            Secure Your Business Today
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't wait for a breach. Contact us for a free security consultation and learn how we can protect your assets.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
