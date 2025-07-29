import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BrainCircuit, CodeXml, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'AI-Based Products',
    description: 'Developing cutting-edge AI solutions to automate processes and drive innovation.',
    link: '/services/ai-products',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with robust, multi-layered security strategies and services.',
    link: '/services/cybersecurity',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Import/Export Electronics',
    description: 'Facilitating global trade of electronics with reliable logistics and supply chain management.',
    link: '/services/import-export',
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Software Development',
    description: 'Building custom software products and providing expert services for your business needs.',
    link: '/services/software-development',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Tech Innovators',
    avatar: 'https://placehold.co/100x100',
    dataAiHint: 'man portrait',
    quote: "Boldsage's AI solution revolutionized our workflow, increasing efficiency by 40%. Their expertise and support are unparalleled.",
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Secure Corp',
    avatar: 'https://placehold.co/100x100',
    dataAiHint: 'woman portrait',
    quote: 'The cybersecurity audit was thorough and insightful. We now feel much more confident in our security posture thanks to the Boldsage team.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Innovate. Secure. Deliver.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Boldsage empowers businesses with intelligent AI, robust cybersecurity, and bespoke software solutions, driving growth in a digital-first world.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Core Expertise</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Delivering excellence across diverse technology verticals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="link" asChild className="mt-4 text-accent">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">
                Why Partner with Boldsage?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We blend deep industry knowledge with technological prowess to deliver solutions that are not just effective, but transformative.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our certified professionals are leaders in their respective fields.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      We tailor our solutions to your unique challenges and goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Proven Results</h3>
                    <p className="text-muted-foreground">
                      A track record of successful projects and satisfied clients.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="https://placehold.co/600x400"
                    alt="Team collaborating"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="team collaboration"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">What Our Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Building trust, one successful partnership at a time.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="cta" className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Let's discuss how Boldsage can help you achieve your technology goals. Schedule a free consultation with our experts today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
