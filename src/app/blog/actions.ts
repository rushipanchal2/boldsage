'use server';

import {
  generateBlogTitle,
} from '@/ai/flows/ai-blog-title-generator';
import { z } from 'zod';

const formSchema = z.object({
  keywords: z.string().min(1, 'Keywords are required.'),
  industryTrends: z.string().min(1, 'Industry trends are required.'),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  generatedTitle?: string;
};

export async function onGenerateTitle(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data',
      issues,
    };
  }

  try {
    const { keywords, industryTrends } = parsed.data;
    const result = await generateBlogTitle({ keywords, industryTrends });
    
    return {
      message: 'success',
      generatedTitle: result.title,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to generate title. Please try again.',
    };
  }
}
