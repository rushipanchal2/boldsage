'use server';
/**
 * @fileOverview An AI-powered blog title generator.
 *
 * - generateBlogTitle - A function that generates blog titles.
 * - GenerateBlogTitleInput - The input type for the generateBlogTitle function.
 * - GenerateBlogTitleOutput - The return type for the generateBlogTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTitleInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the blog post content, separated by commas.'),
  industryTrends: z
    .string()
    .describe('Current industry trends relevant to the blog post.'),
});
export type GenerateBlogTitleInput = z.infer<typeof GenerateBlogTitleInputSchema>;

const GenerateBlogTitleOutputSchema = z.object({
  title: z.string().describe('An SEO-optimized blog post title.'),
});
export type GenerateBlogTitleOutput = z.infer<typeof GenerateBlogTitleOutputSchema>;

export async function generateBlogTitle(input: GenerateBlogTitleInput): Promise<GenerateBlogTitleOutput> {
  return generateBlogTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTitlePrompt',
  input: {schema: GenerateBlogTitleInputSchema},
  output: {schema: GenerateBlogTitleOutputSchema},
  prompt: `You are an expert in creating SEO-optimized blog post titles.

  Based on the following keywords and industry trends, generate a compelling and SEO-friendly blog post title.

  Keywords: {{{keywords}}}
  Industry Trends: {{{industryTrends}}}

  Title:`, // Ensure the title is returned in the 'title' field of the output schema.
});

const generateBlogTitleFlow = ai.defineFlow(
  {
    name: 'generateBlogTitleFlow',
    inputSchema: GenerateBlogTitleInputSchema,
    outputSchema: GenerateBlogTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
