import { Stack } from "expo-router";
import React from "react";
import { useShouldBeLogged } from "~/middlewares/useShouldBeLogged";


export const AppLayout = () => {
    useShouldBeLogged();
    return (
        <Stack
            screenOptions={{
                headerShown: false, animation: 'slide_from_right'
            }}
            initialRouteName="home"

        />
    );
};

