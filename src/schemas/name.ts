import {z} from 'zod';

export const nameSchema = z.object({
  firstName: z.string().min(1, '名前は必須です'),
  lastName: z.string().min(1, '苗字は必須です'),
});

export type NameSchema = z.infer<typeof nameSchema>;