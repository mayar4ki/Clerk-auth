import { Drawer } from "expo-router/drawer";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import { HomeDrawer } from "./components/HomeDrawer";


import { Ionicons } from '@expo/vector-icons';
import {
    DrawerActions,
    useNavigation,
} from '@react-navigation/native';


export const HomeLayout = () => {

    const { colors } = useTheme<RNPaper.Theme>();
    const navigation = useNavigation()

    return (
        <Drawer
            screenOptions={{
                title: '',
                headerLeft(props) {
                    return <IconButton
                        icon={() =>
                            <Ionicons name="chevron-forward" size={34} color="black" />}
                        iconColor={colors.primary}
                        size={27}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }}
                    />
                },
                headerStyle: {
                    backgroundColor: colors.background
                }
                , headerShadowVisible: false
            }}
            drawerContent={p => <HomeDrawer {...p} />}
        >

        </Drawer>
    );
};

