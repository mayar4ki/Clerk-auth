import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { type FC, type ReactNode } from 'react';

import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { addAlpha } from '~/helpers/addAlpha';

const BootstrappedListItem: FC<{
    open: boolean, text: string, to: string,
    Icon: ReactNode
}> = ({ open, text, to, Icon }) => {

    const router = useRouter();

    const isActive = router.pathname.endsWith(to)


    return <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
            onClick={() => router.push(to)}
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                ...(isActive ? {
                    backgroundColor: t => addAlpha(t.palette.primary.main, 0.1),
                    ":hover": {
                        backgroundColor: t => addAlpha(t.palette.primary.main, 0.2),
                    }
                } : {})
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', ...(isActive ? {
                        color: 'secondary.main'
                    } : {})
                }}
            >
                {Icon}
            </ListItemIcon>
            <ListItemText primary={text} sx={{
                opacity: open ? 1 : 0
                , ...(isActive ? {
                    color: 'secondary.main'
                } : {})
            }} />
        </ListItemButton>
    </ListItem>
}

export type DashboardDrawerContentProps = {
    open: boolean
}
export const DashboardDrawerContent: FC<DashboardDrawerContentProps> = ({ open }) => {
    return (
        <>
            <List>

                <BootstrappedListItem
                    open={open}
                    text='Dashboard'
                    to='/dashboard'
                    Icon={<SpaceDashboardOutlinedIcon />}
                />

                <BootstrappedListItem
                    open={open}
                    text='Pricing'
                    to='/dashboard/pricing'
                    Icon={<MonetizationOnOutlinedIcon />}
                />
            </List>
            <Divider />
            <List>

                <BootstrappedListItem
                    open={open}
                    text='Charts'
                    to='/dashboard/charts'
                    Icon={<BarChartIcon />}
                />
            </List>
        </>
    )
}
