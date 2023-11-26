import { Stack } from "expo-router";
import React from "react";
import { useShouldNotBeLogged } from "~/middlewares/useShouldNotBeLogged";


const AuthLayout = () => {
    useShouldNotBeLogged();
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="sign-in" />
    );
};

export default AuthLayout;
