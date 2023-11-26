import { db } from "@acme/db";
import type {
    SignedInAuthObject,
    SignedOutAuthObject,
} from "@clerk/nextjs/api";
import { API_KEY, API_URL, API_VERSION, SECRET_KEY, getAuth } from "@clerk/nextjs/server";

import { decodeJwt, signedInAuthObject, signedOutAuthObject } from "@clerk/clerk-sdk-node";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";


type CreateContextOptions = {
    auth: SignedInAuthObject | SignedOutAuthObject;
};

/**
 * This helper generates the "internals" for a tRPC context.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
const createInnerContext = (opts: CreateContextOptions) => {
    return {
        db,
        auth: opts.auth
    };
};


export const createNextContext = (opts: CreateNextContextOptions) => {
    return createInnerContext({ auth: getAuth(opts.req) });
};


const parseJwt = (req: CreateExpressContextOptions['req']) => {
    const headerToken = req.headers.authorization?.replace("Bearer ", "");
    return decodeJwt(headerToken || "");
};

export const createExpressContext = ({ req }: CreateExpressContextOptions) => {

    const options = {
        apiKey: API_KEY,
        secretKey: SECRET_KEY,
        apiUrl: API_URL,
        apiVersion: API_VERSION,
        authStatus: req.headers['authStatus'],
        authMessage: req.headers['authMessage'],
        authReason: req.headers['authReason'],
    };

    let auth: SignedInAuthObject | SignedOutAuthObject;

    try {
        const jwt = (parseJwt(req));
        auth = signedInAuthObject(jwt.payload, { ...options, token: jwt.raw.text })
    } catch (error) {
        auth = signedOutAuthObject(options);
    }

    return createInnerContext({ auth });
};

