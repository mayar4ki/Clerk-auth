import { DefaultSeo } from "next-seo";
import DefaultSEO from '../../../next-seo.config';



export const DefaultSEOProviderWrapper = ({ children }: { children: JSX.Element }) => {

    return (
        <>
            <DefaultSeo {...DefaultSEO('en')} />
            {children}
        </>
    )
}
