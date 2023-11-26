import Box from "@mui/material/Box"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"
import { DashboardLayout } from "~/base/dashboard/DashboardLayout"
import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"



export const Layout = ({ children }: { children: JSX.Element }) => {

    // I'm thinking about trying something new for the nested routes 
    // I want to control the whole app layout from this component using a public store 
    const router = useRouter();
    const memoChildren = useMemo(() => children, [router.pathname])


    const hasDashboard = useCallback((children: JSX.Element) => {

        return <>
            {router.pathname.startsWith('/dashboard') && !router.isFallback ? <DashboardLayout>
                {children}
            </DashboardLayout> : <>{children}</>
            }
        </>
    }, [router.pathname])


    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh", overflow: 'hidden'
        }} >
            <AppHeader />
            <div className=" flex flex-col grow overflow-hidden ">
                {hasDashboard(children)}
            </div>
            <AppFooter />
        </Box>
    )
}

