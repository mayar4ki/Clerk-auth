import { protectedProcedure, router } from '../../trpc';
import { taskRequests } from './task.requests';


export const taskRouter = router({
    index: protectedProcedure.input(taskRequests.index).query(({ input: { params }, ctx }) => {

        return "index"
    }),
    create: protectedProcedure.input(taskRequests.create).query(({ input }) => {
        return "create"
    }),
    show: protectedProcedure.input(taskRequests.show).query(({ input }) => {
        return "show"
    }),
    update: protectedProcedure.input(taskRequests.update).query(({ input }) => {

        return "update"
    }),
    delete: protectedProcedure.input(taskRequests.delete).query(({ input: { id } }) => {

        return "delete"
    }),
});