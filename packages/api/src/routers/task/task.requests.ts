import { z } from 'zod';


export const taskRequests = {
    index: z.object({
        params: z.optional(z.any()),
    }),
    create: z.object({
        title: z.string(),
        description: z.string()
    }),
    show: z.object({
        id: z.string(),
    }),
    update:
        z.object({
            title: z.optional(z.string()),
            description: z.optional(z.string())
        }),
    delete: z.object({
        id: z.string(),
    })
}
