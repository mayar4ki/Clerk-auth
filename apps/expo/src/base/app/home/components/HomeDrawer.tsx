import { type DrawerContentComponentProps } from '@react-navigation/drawer';

import { useAuth, useUser } from '@clerk/clerk-expo';
import IonIcons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { type ReactNode } from 'react';
import { View } from 'react-native';
import { Avatar, Divider, TouchableRipple, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '~/components/styled/Typography';


const NavItem = (props: {
  onPress: () => void;
  Icon: ReactNode;
  text: string;
  closeDrawer: Function

}) => {


  const { colors } = useTheme();

  return (

    <TouchableRipple
      className=' py-3 px-5 my-1 flex flex-row justify-start items-center  '
      rippleColor={colors.secondaryContainer}
      onPress={() => {
        props.onPress()
        props.closeDrawer()

      }}
    >
      <>
        {props.Icon}
        <View className=' mx-3'>
          <Typography color='primary' variant='titleMedium' >
            {props.text}
          </Typography>
        </View>

      </>
    </TouchableRipple>
  )
}




export const HomeDrawer = (props: DrawerContentComponentProps) => {

  const { colors } = useTheme();

  const router = useRouter()

  const { user } = useUser()

  const { signOut } = useAuth();






  return (
    <SafeAreaView className=' flex-1  '>
      <View className='flex-1 '>

        <TouchableRipple style={{ paddingHorizontal: 17, paddingVertical: 5 }}

          onPress={() => { router.push('/app/profile') }}

        >
          <>

            {user?.imageUrl ? <Avatar.Image
              source={{ uri: user?.imageUrl }}
              size={45}
            /> : <Avatar.Text
              size={45}
              style={{ backgroundColor: colors.secondary }}
              label={user?.fullName?.[0]?.toUpperCase() ?? '?'}
            />}


            <Typography
              style={{ textTransform: 'capitalize' }}
              color="primary"
              variant="bodyLarge">
              {user?.fullName}
            </Typography>
            <Typography color="outline" variant="bodyMedium">
              {user?.emailAddresses.map(el => el.emailAddress)[0] ?? user?.phoneNumbers.map(el => el.phoneNumber)[0]}
            </Typography>
          </>
        </TouchableRipple>

        <Divider horizontalInset={true} style={{ marginVertical: 4 }} />

        <NavItem
          closeDrawer={() => props.navigation.closeDrawer()}
          Icon={<IonIcons name={"home-outline"} size={22} />}
          text='Home'
          onPress={() => { router.push('/app/home') }}
        />


        <Divider horizontalInset={true} style={{ marginVertical: 11 }} />

        <NavItem
          closeDrawer={() => props.navigation.closeDrawer()}
          Icon={<IonIcons name={"log-out"} size={22} />}
          text='Logout'
          onPress={() => {
            void signOut()
          }}

        />
      </View>


      <View className=' my-2'>


        <Divider horizontalInset={true} style={{ marginVertical: 4 }} />
        <Typography
          style={{ textTransform: 'uppercase', alignSelf: 'center' }}
          color="outline"
          variant="bodySmall">
          Version Alpha v.1.0.0
        </Typography>
      </View>
    </SafeAreaView>
  );
};


