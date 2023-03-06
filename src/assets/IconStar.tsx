import StarIcon from "@mui/icons-material/Star";
import { Box, InputAdornment } from "@mui/material";

const IconStar = () => {
  return (
    <InputAdornment position="start">
      <Box
        sx={{
          color: "white",
          border: "none",
          backgroundColor: "#3B5998",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 20,
          width: 20,
        }}
      >
        <StarIcon fontSize="small" />
      </Box>
    </InputAdornment>
  );
};
export default IconStar;
