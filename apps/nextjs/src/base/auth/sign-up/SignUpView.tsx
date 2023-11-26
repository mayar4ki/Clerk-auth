import Box from '@mui/material/Box';

import { SignUp } from "@clerk/nextjs";
import { useTheme } from "@mui/material";


export const SignUpView = () => {


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
                <SignUp
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
                    path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />

            </Box>
        </Box>
    );
}


