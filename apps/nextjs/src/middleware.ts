import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: [/^(?!\/dashboard).*$/]
});


// Stop Middleware running on static files
export const config = {
    matcher: [
        /*
         * Match request paths except for the ones starting with:
         * - _next
         * - static (static files)
         * - favicon.ico (favicon file)
         *
         * This includes images, and requests from TRPC.
         */
        "/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)"
    ],
};
