import type { EnqueueSnackbar } from "notistack";
import { EventEmitterEnums, eventEmitter } from "~/eventEmitter";

export const emitEnqueueSnackbar: EnqueueSnackbar = (...args) => {
    eventEmitter.emit(EventEmitterEnums.ENQUEUE_SNACKBAR, ...args)
    return 'EventEmitterEnums.ENQUEUE_SNACKBAR'
}

