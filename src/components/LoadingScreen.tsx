import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import FbRepositoryLabel from "./FbRepositoryLabel";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", margin: 3, justifyContent: "center", alignItems: "center" }}>
        <FbRepositoryLabel small={false} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="warning" />
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 500,
            ml: 2,
            fontFamily: "Montserrat",
            color: "#3B5998 ",
          }}
        >
          loading
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
