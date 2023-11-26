import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export const useShouldNotBeLogged = () => {

  const router = useRouter();

  const { isSignedIn } = useAuth();

  useEffect(() => {

    if (isSignedIn) {
      router.replace("/app")
    }

  }, [isSignedIn])

}
