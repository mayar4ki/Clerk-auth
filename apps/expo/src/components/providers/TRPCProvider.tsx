import { useAuth } from "@clerk/clerk-expo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React from "react";
import superjson from "superjson";
import { api, getBaseUrl } from "~/utils/trpc";



export function TRPCProvider(props: { children: React.ReactNode }) {
    const { getToken } = useAuth();
    const [queryClient] = React.useState(() => new QueryClient());
    const [trpcClient] = React.useState(() =>
        api.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    async headers() {
                        const authToken = await getToken();
                        return {
                            Authorization: authToken ?? undefined,
                        };
                    },
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }),
    );

    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>
        </api.Provider>
    );
}
