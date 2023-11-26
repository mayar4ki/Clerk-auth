import { SignIn } from "@clerk/nextjs";
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';

export const SignInView = () => {

  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', alignItems: 'center'
      }}
    >
      <Box
        sx={{ mb: -4 }}
      >
        <SignIn
          appearance={{
            elements: {
              card: {
                boxShadow: 'none',
              }
            }, variables: {
              borderRadius: '3px', colorAlphaShade: 'red', fontFamily: 'RobotoCondensedRegular',
              colorPrimary: palette.primary.main, colorDanger: palette.error.main, colorSuccess: palette.success.main,
            }
          }}
          path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" />

      </Box>
    </Box>
  );
}



