import { create } from "zustand";

export type ModeUnion = "light" | "dark";

interface SettingsState {
  mode: ModeUnion;
}

interface SettingsActions {
  setMode: (mode: ModeUnion) => void;
}

export const settingsStore = create<SettingsState & SettingsActions>((set) => ({
  mode: 'light',
  setMode: (mode) => {
    // storeMode(mode);
    return set(() => ({ mode: mode }));
  },
}));
