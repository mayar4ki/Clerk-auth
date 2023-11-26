import { getCookie, hasCookie, setCookie } from "cookies-next";
import { ModeUnion } from "../store/settingsStore";

export function storeMode(mode: ModeUnion) {
  setCookie("mode", mode, { maxAge: 60 * 60 * 24 * 30 });
}

export function getMode() {
  if (hasCookie("mode")) {
    return getCookie("mode") as ModeUnion;
  } else {
    return "light";
  }
}
