import {z} from 'zod';
import { nameSchema } from '../../../../../schemas/name';

export const formSchema = z.object({
  name: nameSchema,
});

export type FormSchema = z.infer<typeof formSchema>;