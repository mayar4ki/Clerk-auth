import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from 'react';
import { EventEmitterEnums, eventEmitter } from '~/eventEmitter';
import { getDir } from '~/utils/getDir';

const Listener = () => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        eventEmitter.addListener(
            EventEmitterEnums.ENQUEUE_SNACKBAR,
            enqueueSnackbar
        );
        return () => {
            eventEmitter.removeAllListeners(EventEmitterEnums.ENQUEUE_SNACKBAR);
        };
    }, []);

    return <></>;
};

export const SnackbarProviderWrapper = ({ children }: { children: JSX.Element }) => {

    return (
        <SnackbarProvider
            anchorOrigin={{
                horizontal: getDir('en') === "rtl" ? "right" : "left",
                vertical: "bottom",
            }}
            maxSnack={3}
            SnackbarProps={{
                dir: getDir('en')
            }}
        >
            <Listener />
            {children}
        </SnackbarProvider>
    )
}
