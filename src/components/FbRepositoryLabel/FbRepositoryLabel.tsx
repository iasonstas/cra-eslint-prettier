import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FbSvg from "../../assets/FbSvg";

const FbRepositoryLabel = ({ small }: { small: boolean }) => {
  return (
    <Box sx={{ display: "flex", margin: 3, justifyContent: "center", alignItems: "center" }}>
      <FbSvg small={small} />
      <Typography
        sx={{
          fontSize: small ? "20px" : "40px",
          fontWeight: 700,
          ml: small ? 0.5 : 2,

          color: "#3B5998 ",
        }}
      >
        Repository
      </Typography>
    </Box>
  );
};

export default FbRepositoryLabel;
