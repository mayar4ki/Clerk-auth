import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from "react-native";

void SplashScreen.preventAutoHideAsync();



/**
 * Description
 * - this components will get user data and app assets before opening the app 
 */
export const ResolverProvider = ({ children }: { children: JSX.Element }) => {

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {

                await loadAsync({
                    'RobotoCondensedRegular': require('../../../assets/fonts/RobotoCondensed-Regular.ttf'),
                    'RobotoCondensedBold': require('../../../assets/fonts/RobotoCondensed-Bold.ttf'),
                });

                await new Promise(resolve => setTimeout(resolve, 5000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }



    return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {children}
    </View>
}

