import { appRouter, createExpressContext } from '@acme/api';
import { authWebhook } from '@acme/webhook';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import express from 'express';
import { env } from './env';

const app = express();
const port = env.EXPRESS_PORT ?? 3000;


app.use('/api/trpc', createExpressMiddleware({
    router: appRouter,
    createContext: createExpressContext
}))

app.use('/api/webhooks/user', express.json(), (req, res) => {

    authWebhook(req.body, req.headers).then(({ code, msg }) => {
        res.status(code).json({ message: msg });
    }).catch(() => {
        res.status(500).json({ message: 'webhook error' });
    })

})

app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});