import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StyledStatusDiv } from "~/base/status/components/StyledStatusDiv";
import { statusCounter } from "~/utils/statusCounter";

const Status500View = () => {
  const code: [string, string, string] = ["5", "0", "0"];
  // eslint-disable-next-line
  useEffect(statusCounter(code), []);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Status - 500</title>
      </Head>

      <StyledStatusDiv>
        <Box sx={{ position: "relative", zoom: { xs: 0.5, lg: 1 } }}>
          <div className="clip">
            <div className="shadow-digit">
              <span className="digit thirdDigit">{code[0]}</span>
            </div>
          </div>
          <div className="clip">
            <div className="shadow-digit">
              <span className="digit secondDigit">{code[1]}</span>
            </div>
          </div>
          <div className="clip">
            <div className="shadow-digit">
              <span className="digit firstDigit">{code[2]}</span>
            </div>
          </div>
        </Box>
        <h2 style={{ textAlign: "center" }}>
          There was an error, please try again later
        </h2>
        <h2 style={{ textAlign: "center" }}>
          The server encountered an internal error and was not able to complete
          your request
        </h2>
        <Button
          onClick={() => router.push("/")}
          startIcon={<RefreshIcon />}
          variant="contained"
          sx={{ mt: 6 }}
        >
          Try again
        </Button>
      </StyledStatusDiv>
    </>
  );
};

export default Status500View;
