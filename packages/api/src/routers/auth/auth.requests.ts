import { z } from 'zod';


export const authRequests = {
    signup: z.object({
        email: z.string().email(),
        name: z.string(),
        password: z.string().min(4).max(12),
    }),
    login: z.object({
        email: z.string().email(),
        password: z.string().min(4).max(12),
    }),
    setPassword: z.object({
        oldPassword: z.string(),
        newPassword: z.string().min(4).max(12),
        terminateAllSessions: z.boolean()
    }),
    linkAccount: z.object({

    }),
}


