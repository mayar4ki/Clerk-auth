import HomeIcon from "@mui/icons-material/Home";
import { Box, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StyledStatusDiv } from "~/base/status/components/StyledStatusDiv";
import { statusCounter } from "~/utils/statusCounter";

const Status403View = () => {
  const code: [string, string, string] = ["4", "0", "3"];
  // eslint-disable-next-line
  useEffect(statusCounter(code), []);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Status - 403</title>
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
          You do not have access to this page or resource.
        </h2>

        <Button
          onClick={() => router.push("/")}
          startIcon={<HomeIcon />}
          variant="contained"
          sx={{ mt: 6 }}
        >
          Go to home page
        </Button>
      </StyledStatusDiv>
    </>
  );
};

export default Status403View;
