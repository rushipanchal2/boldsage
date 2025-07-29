'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { onGenerateTitle } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Loader2, Lightbulb } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Title
        </>
      )}
    </Button>
  );
}

export default function BlogPage() {
  const initialState = { message: '', generatedTitle: '' };
  const [state, formAction] = useFormState(onGenerateTitle, initialState);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold">AI Blog Title Generator</h1>
          <p className="mt-2 text-lg opacity-90 max-w-3xl mx-auto">
            Leverage our AI to craft compelling, SEO-optimized blog titles that capture attention and drive traffic.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <form action={formAction}>
              <CardHeader>
                <CardTitle className="font-headline">Generate a New Title</CardTitle>
                <CardDescription>
                  Enter keywords and industry trends to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    name="keywords"
                    placeholder="e.g., artificial intelligence, machine learning, business"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industryTrends">Industry Trends</Label>
                  <Textarea
                    id="industryTrends"
                    name="industryTrends"
                    placeholder="e.g., focus on ethical AI, generative AI in marketing"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <SubmitButton />
                {state.message === 'error' && (
                   <p className="text-sm font-medium text-destructive">{state.message}</p>
                )}
              </CardFooter>
            </form>
          </Card>

          {state.generatedTitle && (
            <Card className="mt-8 bg-secondary">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Lightbulb className="text-accent h-6 w-6" />
                  Generated Title Suggestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">{state.generatedTitle}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
