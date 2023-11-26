import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AlertDialogProvider, AuthProvider, PaperThemeProvider, TRPCProvider } from "~/components/providers";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

// This is the main layout of the app
// It wraps your pages with the providers they need
const IndexLayout = () => {

    return (
        <PaperThemeProvider>
            <AuthProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <TRPCProvider>
                        <AlertDialogProvider />
                        <SafeAreaProvider>
                            {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
                            <Stack screenOptions={{
                                headerShown: false
                            }} />
                            <StatusBar />
                        </SafeAreaProvider>
                    </TRPCProvider>
                </GestureHandlerRootView>
            </AuthProvider>
        </PaperThemeProvider>
    );
};

export default IndexLayout;
