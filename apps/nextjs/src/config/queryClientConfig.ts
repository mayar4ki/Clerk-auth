import { MutationCache, QueryCache, type QueryClientConfig } from "@tanstack/react-query";
import { emitEnqueueSnackbar } from "~/utils/emitEnqueueSnackbar";


const onError = (error: any) => {
    try {

        emitEnqueueSnackbar((error).message ?? { ...error }?.data.code, { variant: 'error' })

    } catch (error) {

    }
}

const mutationCache = new MutationCache({
    onError,
});

const queryCache = new QueryCache({
    onError
});




export const queryClientConfig: QueryClientConfig = {
    queryCache, mutationCache, defaultOptions: {
        queries: {
            retry: 0, refetchOnWindowFocus: false
        }
    }
}