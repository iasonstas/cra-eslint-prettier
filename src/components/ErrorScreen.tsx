import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ErrorScreen = () => {
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
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: 500,
          ml: 2,
          color: "#3B5998 ",
        }}
      >
        Error 404
      </Typography>
    </Box>
  );
};

export default ErrorScreen;
