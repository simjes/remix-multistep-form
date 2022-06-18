import { z } from 'zod'
import { zfd } from 'zod-form-data'

export const ContactZod = z.object({
  name: z.string().min(1, { message: 'Name required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Must be a valid email'),
  approver: z.object(
    {
      id: zfd.numeric(),
      name: zfd.text(),
    },
    {
      required_error: 'Choose an approver',
    },
  ),
})

export const BoatZod = z.object({
  boat: z.object(
    {
      id: zfd.numeric(),
      name: z.string(),
      height: z.string(),
      length: z.string(),
      crew: z.string(),
    },
    {
      required_error: 'Select a ship',
    },
  ),
})

export const SummaryZod = z.object({})
export const CombinedZod = BoatZod.merge(ContactZod)
export type RegistrationForm = z.infer<typeof CombinedZod>
