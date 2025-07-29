'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const allCaseStudies = [
  {
    id: 1,
    title: 'AI-Powered Inventory Management for Retail Giant',
    category: 'AI',
    industry: 'Retail',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'retail store',
    summary: 'Developed a machine learning model to predict stock needs, reducing overstock by 30% and stockouts by 25%.',
  },
  {
    id: 2,
    title: 'Comprehensive Security Overhaul for a Fintech Startup',
    category: 'Cybersecurity',
    industry: 'Finance',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'financial data',
    summary: 'Implemented a 24/7 SOC and conducted rigorous penetration testing, achieving ISO 27001 compliance in 6 months.',
  },
  {
    id: 3,
    title: 'Global Logistics Platform for Electronics Distributor',
    category: 'Import/Export',
    industry: 'Logistics',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'cargo ship',
    summary: 'Built a custom platform to manage international shipments, improving tracking accuracy and reducing customs delays.',
  },
  {
    id: 4,
    title: 'Custom ERP System for Manufacturing Firm',
    category: 'Software Development',
    industry: 'Manufacturing',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'factory production',
    summary: 'Created a bespoke ERP solution that integrated all business functions, from production to sales, increasing operational efficiency.',
  },
  {
    id: 5,
    title: 'NLP-driven Customer Service Chatbot',
    category: 'AI',
    industry: 'E-commerce',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'customer support',
    summary: 'Launched an AI chatbot that resolved 60% of customer queries automatically, improving response times and satisfaction.',
  },
  {
    id: 6,
    title: 'Incident Response and Recovery for Healthcare Provider',
    category: 'Cybersecurity',
    industry: 'Healthcare',
    image: 'https://placehold.co/600x400',
    dataAiHint: 'hospital corridor',
    summary: 'Successfully managed a critical security incident, restored systems with minimal downtime, and enhanced their security posture.',
  },
];

const filters = ['All', 'AI', 'Cybersecurity', 'Import/Export', 'Software Development'];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All'
    ? allCaseStudies
    : allCaseStudies.filter((study) => study.category === activeFilter);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">Our Success Stories</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours overcome challenges and achieve their goals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-card p-2 rounded-lg shadow-sm flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'ghost'}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(activeFilter === filter && 'text-primary-foreground')}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                <div className="relative h-56 w-full">
                  <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" data-ai-hint={study.dataAiHint} />
                </div>
                <CardHeader>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{study.category}</Badge>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardTitle className="font-headline pt-2">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{study.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-accent">
                    <Link href="#">Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
