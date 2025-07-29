import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const leadershipTeam = [
  { name: 'Aditya Sharma', title: 'Founder & CEO', avatar: 'https://placehold.co/150x150', dataAiHint: 'man portrait' },
  { name: 'Priya Singh', title: 'Chief Technology Officer', avatar: 'https://placehold.co/150x150', dataAiHint: 'woman portrait' },
  { name: 'Rohan Mehta', title: 'Head of Cybersecurity', avatar: 'https://placehold.co/150x150', dataAiHint: 'man portrait professional' },
  { name: 'Anjali Desai', title: 'Director of Global Trade', avatar: 'https://placehold.co/150x150', dataAiHint: 'woman portrait professional' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">About Boldsage</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            We are a team of innovators, strategists, and problem-solvers dedicated to shaping the future of technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://placehold.co/600x450"
                    alt="Boldsage office"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="modern office"
                />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded on the principles of innovation and integrity, Boldsage Pvt. Ltd. began with a vision to bridge the gap between complex business challenges and cutting-edge technological solutions. From a small team of passionate developers, we have grown into a multi-faceted organization serving a global clientele.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our journey is one of continuous learning and adaptation, driven by a relentless pursuit of excellence and a commitment to our clients' success. We believe in building long-term partnerships, grounded in trust and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses with intelligent, secure, and reliable technology solutions that drive efficiency, foster innovation, and create sustainable value in a rapidly evolving digital landscape.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a globally recognized leader in technology services and solutions, renowned for our expertise, our commitment to quality, and our transformative impact on the industries we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">Meet Our Leadership</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            The driving force behind our innovation and success.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="h-32 w-32 border-4 border-primary/10">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="font-headline mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-accent">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
