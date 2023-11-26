import type { ExpoConfig } from "@expo/config";

const CLERK_PUBLISHABLE_KEY = "pk_test_ZG9taW5hbnQtYnVsbGZyb2ctNjcuY2xlcmsuYWNjb3VudHMuZGV2JA";

const defineConfig = (): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  scheme: "myapp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon2.png",
    resizeMode: "contain",
    backgroundColor: "#f7f8f9",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#f7f8f9",
    },
  },
  extra: {
    eas: {
      // projectId: "your-project-id",

    },
    CLERK_PUBLISHABLE_KEY
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
