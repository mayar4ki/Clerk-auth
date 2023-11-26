import { create } from 'zustand';

interface AlertDialogStore {
    body: string | null,
    set: (res: string | null) => void,
}

export const useAlertDialog = create<AlertDialogStore>(set => ({
    body: null,
    set: (res) => set(() => ({ body: res })),
}))
