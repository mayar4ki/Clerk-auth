import { Backdrop } from "@mui/material";
import Image from "next/image";
import { PointsLoader } from "./PointsLoader";

const Splash = () => {
  return (
    <Backdrop open={true}  >
      <Image src='/next.svg' width={300} height={30}
        style={{ marginBottom: -20 }}
        alt='' />
      <PointsLoader className=" " />
    </Backdrop>

  );
};

export default Splash;
