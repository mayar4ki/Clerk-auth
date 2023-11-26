import { UserButton, useAuth } from '@clerk/nextjs';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { NotificationPopover, type NotificationPopoverRef } from './NotificationPopover';

const AuthShowcase: React.FC = () => {
    const { isSignedIn } = useAuth();


    return (
        <div >
            {isSignedIn && (
                <div className="flex items-center justify-center ml-4">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: "2.4rem",
                                    height: "2.4rem",
                                }
                            }
                        }}
                        afterSignOutUrl='/'
                    />
                </div>
            )}
            {!isSignedIn && (
                <Typography component='div' className=' flex  gap-x-1'>
                    <Typography component={Link} href='/auth/sign-in'>
                        Sign In
                    </Typography>
                    <Typography>
                        /
                    </Typography>
                    <Typography component={Link} href='/auth/sign-up'>
                        Sign Up
                    </Typography>
                </Typography>
            )}
        </div>
    );
};


export const AppHeader = () => {
    const router = useRouter();
    const { isSignedIn } = useAuth();

    const notificationPopoverRef = useRef<NotificationPopoverRef>(null);

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ pt: 2, pb: 1.5, px: { xs: 2, md: 14 }, overflow: 'hidden', position: 'sticky', top: 0, zIndex: 20 }}
            bgcolor='background.paper'
            className=' shadow-md '
        >

            <div className=' flex gap-x-12 '>
                <Button
                    sx={{
                        p: 1, borderRadius: 3, m: 0,
                        // textShadow: t => ` 0.5px 0.5px 0.5px ${t.palette.secondary.main}`
                    }}
                    onClick={() => router.push('/')}
                >
                    <Typography
                        variant='h5'
                    >Home</Typography>
                </Button>

            </div>


            <Stack direction='row' alignItems='center' columnGap={1} >
                {isSignedIn && <Tooltip title="Notifications">
                    <IconButton
                        onClick={notificationPopoverRef.current?.handleClick}
                    >
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                </Tooltip>}

                <NotificationPopover ref={notificationPopoverRef} />



                {isSignedIn && <Tooltip title="Dashboard">
                    <IconButton
                        onClick={() => router.push('/dashboard')}
                    >
                        <SpaceDashboardOutlinedIcon />
                    </IconButton>
                </Tooltip>}


                <AuthShowcase />




            </Stack>

        </Stack>
    )
}
