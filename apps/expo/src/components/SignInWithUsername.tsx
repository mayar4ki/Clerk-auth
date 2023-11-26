import React from "react";
import { View } from "react-native";

import { useSignIn } from "@clerk/clerk-expo";
import { Text, TextInput, TouchableOpacity } from "react-native";


export const SignInWithUsername = () => {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }


    };
    return (
        <View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                />
            </View>

            <View>
                <TextInput
                    value={password}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={onSignInPress}>
                <Text>Sign in</Text>
            </TouchableOpacity>



        </View>
    );
}
