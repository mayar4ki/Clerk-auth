import * as React from "react"
import Svg, { Path, type SvgProps } from "react-native-svg"

export function FacebookIcon(props: SvgProps) {
    return (
        <Svg
            x="0px"
            y="0px"
            viewBox="0 3 40 40"
            {...props}
        >
            <Path
                fill="#0062E0"
                d="M27.8 25.6l.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
            />
        </Svg>
    )
}

