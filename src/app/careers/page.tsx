import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, MapPin, Users } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    id: 'swe-01',
    title: 'Senior Software Engineer (AI/ML)',
    location: 'Remote',
    department: 'Engineering',
    description: 'We are looking for an experienced software engineer to design, develop, and deploy our next generation of AI-powered products. You will work with a talented team on challenging problems in NLP and computer vision.',
  },
  {
    id: 'cy-01',
    title: 'Cybersecurity Analyst',
    location: 'Pune, India',
    department: 'Security',
    description: 'Join our Security Operations Center (SOC) to monitor, detect, and respond to threats. This role requires a keen analytical mind and a passion for protecting digital assets.',
  },
  {
    id: 'bd-01',
    title: 'Business Development Manager',
    location: 'Mumbai, India',
    department: 'Sales',
    description: 'Drive growth by identifying new business opportunities and building relationships with enterprise clients across our service verticals. Strong communication and strategic thinking skills are a must.',
  },
];

const testimonials = [
    {
      name: 'Sunita Rao',
      title: 'Software Engineer',
      avatar: 'https://placehold.co/100x100',
      dataAiHint: 'woman portrait professional',
      quote: "Boldsage has an incredible culture of learning and collaboration. I'm constantly challenged with interesting projects and supported by a brilliant team.",
    },
    {
      name: 'Amit Patel',
      title: 'Security Consultant',
      avatar: 'https://placehold.co/100x100',
      dataAiHint: 'man portrait professional',
      quote: "The work we do is impactful, and the company truly invests in our professional development. It's a great place to grow your career.",
    },
  ];

export default function CareersPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">Join Our Team</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Be part of a company that's shaping the future. We're looking for passionate, innovative minds to grow with us.
          </p>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-primary">Working at Boldsage</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    We foster a culture of excellence, innovation, and respect.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <Users className="h-12 w-12 mx-auto text-accent"/>
                    <h3 className="font-headline mt-4 text-xl font-semibold">Collaborative Culture</h3>
                    <p className="mt-2 text-muted-foreground">We believe the best ideas come from teamwork and open communication.</p>
                </div>
                <div className="p-6">
                    <Briefcase className="h-12 w-12 mx-auto text-accent"/>
                    <h3 className="font-headline mt-4 text-xl font-semibold">Great Benefits</h3>
                    <p className="mt-2 text-muted-foreground">Competitive salary, health insurance, and continuous learning opportunities.</p>
                </div>
                <div className="p-6">
                    <ArrowRight className="h-12 w-12 mx-auto text-accent"/>
                    <h3 className="font-headline mt-4 text-xl font-semibold">Career Growth</h3>
                    <p className="mt-2 text-muted-foreground">We invest in your development with clear paths for advancement.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary">Current Job Openings</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Find your next opportunity at Boldsage.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {jobOpenings.map(job => (
                <AccordionItem value={job.id} key={job.id}>
                  <AccordionTrigger className="font-headline text-lg hover:no-underline">
                    <div>
                        {job.title}
                        <div className="flex gap-4 text-sm font-normal text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/> {job.department}</span>
                            <span className="flex items-center gap-1"><MapPin className="h-4 w-4"/> {job.location}</span>
                        </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button>Apply Now</Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">From Our Team</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
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
    </>
  );
}
