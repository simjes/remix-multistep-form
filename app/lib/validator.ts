import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'
import { names } from '~/lib/people'

export const contactValidator = withZod(
  z.object({
    name: z.string().min(1, { message: 'Name required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
    // approver: z.object({
    //   id: z.number(),
    //   name: z.string().refine((val) => names.includes(val), {
    //     message: 'Choose an approver',
    //   }),
    // }),
    // 'approver[id]': z.number(),
    // 'approver[name]': z.number(),
    approver: z.string().refine((val) => names.includes(val), {
      message: 'Choose an approver',
    }),
  }),
)

export const boatValidator = withZod(
  z.object({
    boat: z
      .object({
        id: z.number(),
        name: z.string(),
        height: z.string(),
        length: z.string(),
        crew: z.string(),
      })
      .required(),
  }),
)

// export const validator = withZod(
//   z.object({
//     name: z.string().min(1, { message: 'Name required' }),
//     email: z
//       .string()
//       .min(1, { message: 'Email is required' })
//       .email('Must be a valid email'),
//     approver: z
//       .object({
//         id: z.number(),
//         name: z.string(),
//       })
//       .required(),
//     boat: z
//       .object({
//         id: z.number(),
//         name: z.string(),
//         height: z.string(),
//         length: z.string(),
//         crew: z.string(),
//       })
//       .required(),
//   }),
// )
