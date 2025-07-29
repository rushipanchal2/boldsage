import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, BrainCircuit, ScanEye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const aiSolutions = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Natural Language Processing (NLP)',
    description: 'Unlock insights from text data with our advanced NLP models for sentiment analysis, text summarization, and chatbots.',
  },
  {
    icon: <ScanEye className="h-8 w-8 text-primary" />,
    title: 'Computer Vision',
    description: 'Automate visual tasks with AI-powered image recognition, object detection, and video analysis solutions.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Machine Learning Models',
    description: 'Develop predictive models and data-driven solutions to forecast trends, optimize operations, and personalize user experiences.',
  },
];

export default function AiProductsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">AI-Based Products & Solutions</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Harnessing the power of Artificial Intelligence to build smarter, more efficient businesses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">Overview of AI Capabilities</h2>
              <p className="mt-4 text-muted-foreground">
                At Boldsage, we specialize in transforming complex data into actionable intelligence. Our AI and Machine Learning services are designed to help you automate processes, gain deeper insights, and create innovative products that give you a competitive edge.
              </p>
              <p className="mt-4 text-muted-foreground">
                From custom model development to integrating AI into existing systems, our team provides end-to-end solutions tailored to your specific industry and business needs. We focus on delivering measurable results, ensuring your investment in AI translates to real-world business value.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://placehold.co/600x450"
                    alt="AI and robotics"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="artificial intelligence"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary">Our AI Solutions</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Specific applications to solve your most pressing challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiSolutions.map((solution) => (
              <Card key={solution.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {solution.icon}
                  <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="cta" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center bg-secondary rounded-lg p-12">
          <h2 className="font-headline text-3xl font-bold text-primary">
            Ready to Integrate AI?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's explore how our AI expertise can revolutionize your business operations.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss Your AI Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
