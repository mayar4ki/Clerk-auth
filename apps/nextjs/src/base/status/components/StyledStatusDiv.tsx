import { styled } from "@mui/material/styles";

export const StyledStatusDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h2: {
    color: "#6f6f6f",
    fontWeight: "bold",
    fontSize: "22px",
    paddingTop: "20px",
  },

  ".clip": {
    display: "inline-block",
    transform: "skew(-45deg)",
  },

  ".clip:nth-of-type(1) .shadow-digit,.clip:nth-of-type(3) .shadow-digit": {
    width: "250px",
  },

  ".clip .shadow-digit": {
    overflow: "hidden",
  },

  ".clip .shadow-digit ": {
    height: "180px",
  },

  ".clip:nth-of-type(1) .digit ": {
    right: "-40%",
  },

  ".digit ": {
    position: "relative",
    top: "8%",
    color: "white",
    background: theme.palette.primary.main,
    borderRadius: "50%",
    display: "inline-block",
    transform: "skew(45deg)",
    textAlign: "center",
  },

  ".digit": {
    width: "150px",
    fontSize: "100px",
    fontWeight: "bold",
  },
  ".clip:nth-of-type(1) .shadow-digit:after": {
    position: "absolute",
    right: "-8px",
    bottom: "0px",
    zIndex: "9999",
    height: "100%",
    width: "10px",
    background:
      "linear-gradient(90deg,transparent,rgba(173, 173, 173, 0.8),transparent)",
    borderRadius: "50%",
  },
  ".clip:nth-of-type(2) .shadow-digit ": {
    overflow: "hidden",
    position: "relative",
    boxShadow:
      "inset 20px 0px 20px -15px rgba(150, 150, 150, 80%),20px 0px 20px -15px rgba(150, 150, 150, 80%)",
  },

  ".clip:nth-of-type(2) .shadow-digit": {
    width: "130px",
  },
  ".clip:nth-of-type(2) .digit ": {
    left: "-10%",
  },

  ".clip:nth-of-type(3) .shadow-digit:after ": {
    left: "-8px",
  },

  ".clip:nth-of-type(3) .shadow-digit:after": {
    position: "absolute",
    right: "-8px",
    bottom: "0px",
    zIndex: "9999",
    height: "100%",
    width: "10px",
    background:
      "linear-gradient( 90deg, transparent, rgba(173, 173, 173, 0.8), transparent )",
    borderRadius: "50%",
  },

  " .clip:nth-of-type(3) .digit": {
    left: "-5%",
  },
}));
