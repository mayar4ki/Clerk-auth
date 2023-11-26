import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ScrollingBox = styled((props: BoxProps & { isScrollingUp: boolean }) => {
    const { isScrollingUp, ...rest } = props;

    return <Box {...rest} />;
})(({ theme, isScrollingUp }) => ({
    ...(isScrollingUp
        ? {
            position: "sticky",
            top: 0,
            zIndex: theme.zIndex.drawer + 1,
            //zIndex: 10,
            animation: "dropIn 0.3s ease-out",
        }
        : {
            // transition: "opacity 0.3s",
            // opacity: 0,
        }),

    "@keyframes dropIn": {
        "0%": {
            transform: " translateY(-100px)",
        },

        "100%": {
            transform: "translateY(0)",
        },
    },
}));
