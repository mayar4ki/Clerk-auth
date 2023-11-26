import { Session } from "next-auth";
import { create } from "zustand";

export type ModeUnion = "light" | "dark";

interface MeStore {
    me: Omit<Session, 'sessionToken' | 'password'> | null;
    setMe: (data: Omit<Session, 'sessionToken' | 'password'> | null) => void;

}



export const useMeStore = create<MeStore>((set) => ({
    me: null,
    setMe: (data) => {
        return set(() => ({ me: data }));
    },
}));
