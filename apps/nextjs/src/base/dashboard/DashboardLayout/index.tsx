import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { addAlpha } from '~/helpers/addAlpha';
import { DashboardDrawer } from './DashboardDrawer';
import { DashboardDrawerContent } from './DashboardDrawerContent';



export const DashboardLayout = ({ children }: { children: JSX.Element }) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <DashboardDrawer
                sx={{
                    "& .MuiDrawer-paper": {
                        borderWidth: 0,
                        borderRight: "none",

                        backgroundColor: 'transparent'
                    },
                }}
                variant="permanent" open={false}></DashboardDrawer>
            <DashboardDrawer
                onMouseEnter={() => {
                    handleDrawerOpen();
                }}
                onMouseLeave={() => {
                    handleDrawerClose();
                }}
                sx={{
                    position: "absolute",
                    "& .MuiDrawer-paper": {
                        borderWidth: 0,
                        borderRight: "none",
                        boxShadow: t => `0px 4px 10px ${addAlpha(t.palette.secondary.main, 0.1)}`,
                        transition: "width 0.28s ease-out",
                    },
                }}
                variant="permanent"
                open={open}
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ height: 73, px: 1 }}
                >

                    <Typography>
                        Meow
                    </Typography>
                </Stack>
                <Divider />


                <DashboardDrawerContent open={open} />

            </DashboardDrawer>
            {children}
        </Box>
    );
}