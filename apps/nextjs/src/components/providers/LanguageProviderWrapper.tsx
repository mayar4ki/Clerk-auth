import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setLocale } from "yup";
import { getDir } from "~/utils/getDir";
import { ar, en } from "../../../locales/validation";

export type LanguageProviderWrapperProps = {
    children: JSX.Element;
    emotionCache: EmotionCache;
    messages: unknown
};

export const LanguageProviderWrapper = ({ children, emotionCache }: LanguageProviderWrapperProps) => {
    const { locale: lang } = useRouter()

    useEffect(() => {
        setLocale(lang === "ar" ? ar : en);
        document.dir = getDir(lang ?? 'en');
    }, [lang]);
    return (
        <CacheProvider value={emotionCache}>
            {children}
        </CacheProvider>
    )
}
