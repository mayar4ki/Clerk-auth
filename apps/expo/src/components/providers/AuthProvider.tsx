import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { tokenCache } from "~/utils/cache";
import { LoadingScreen } from "../LoadingScreen";


const AuthResolver = ({ children }: { children: JSX.Element }) => {
    const { isLoaded } = useAuth();

    if (!isLoaded) return <LoadingScreen />
    return (
        <>{children}</>
    )
}


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <ClerkProvider
            publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY as string}
            tokenCache={tokenCache}
        >
            <AuthResolver>
                {children}
            </AuthResolver>
        </ClerkProvider>
    )
}
