import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const createEmotionCache = (local: string) => {
  if (local === "ar") {
    return createCache({
      key: "mui-style-rtl",
      stylisPlugins: [prefixer, rtlPlugin],
    });
  } else {
    return createCache({
      key: "mui-style-ltr",
    });
  }
};

export default createEmotionCache;
