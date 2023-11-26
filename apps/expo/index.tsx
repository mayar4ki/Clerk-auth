import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import type { RequireContext } from "expo-router/build/types";
import Reactotron from 'reactotron-react-native';
import { ResolverProvider } from "~/components/providers/ResolverProvider";
if (__DEV__) {
  import("./ReactotronConfig").then(() => {
    Object.defineProperty(console, "tron", {
      get: () => Reactotron,
      configurable: false,
      enumerable: false,
    });
  });
}


export function App() {
  const ctx = require.context("./src/app");
  return <ResolverProvider>
    <ExpoRoot context={ctx as RequireContext} />
  </ResolverProvider>

}

registerRootComponent(App);
