import EventEmitter from "events";

/**
 * Important
 * - this  `eventEmitter` has a enum at the same file make sure to use it 
 */
export const eventEmitter = new EventEmitter();


/**
 * Description
 * - this enum will be used when you want to remove/add listener to the `eventEmitter`
 * 
 * Note
 * - make sure to use it every time you use the `eventEmitter`
 */
export enum EventEmitterEnums {
    ENQUEUE_SNACKBAR = 'enqueueSnackbar',
}
