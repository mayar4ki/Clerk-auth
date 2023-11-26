import type { DefaultSeoProps } from 'next-seo';

const DefaultSEO = (lang: string): DefaultSeoProps => {

    const base: DefaultSeoProps = {
        description: "Hello ",
        openGraph: {
            images: [{ url: '/next.svg', width: 5, height: 5 }]
        }
    }

    switch (lang) {
        case 'en':
            return ({
                ...base,
                title: 'Hello'
            })
        case 'zh-ch':
            return ({
                ...base,
                title: 'Hi'
            })
        case 'zh-tw':
            return ({
                ...base,
                title: 'Hi'
            })

        default:
            return ({
                ...base,
                title: 'Hello'
            })
    }
}

export default DefaultSEO