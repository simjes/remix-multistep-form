import { z } from 'zod'
import { names } from '~/lib/people'

export const ContactZod = z.object({
  name: z.string().min(1, { message: 'Name required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Must be a valid email'),
  approver: z.string().refine((val) => names.includes(val), {
    message: 'Choose an approver',
  }),
})
// export const ContactWithZod = withZod(ContactZod)

export const BoatZod = z.object({
  boat: z.object(
    {
      name: z.string(),
    },
    {
      required_error: 'Select a ship',
    },
  ),
})
// export const BoatWithZod = withZod(BoatZod)

export const SummaryZod = z.object({})
// export const SummaryWithZod = z.object({})

export type RegistrationForm = z.infer<typeof ContactZod | typeof BoatZod>
