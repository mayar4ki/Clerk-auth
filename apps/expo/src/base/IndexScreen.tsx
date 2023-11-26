import { SignedIn, SignedOut, } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { LoadingScreen } from "~/components/LoadingScreen";

const IndexScreen = () => {

    return <LoadingScreen>
        <SignedIn>
            <Redirect href='/app' />
        </SignedIn>

        <SignedOut>
            <Redirect href='/auth' />
        </SignedOut>
    </LoadingScreen>
};

export default IndexScreen;
