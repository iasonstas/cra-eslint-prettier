import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { Box, InputAdornment } from "@mui/material";

export const IconSearch = () => {
  return (
    <InputAdornment position="end">
      <Box
        sx={{
          color: "white",
          border: "none",
          backgroundColor: "#3B5998",
          borderRadius: "50%",
          height: 37,
          opacity: 0.48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 38,
        }}
      >
        <SearchIcon />
      </Box>
    </InputAdornment>
  );
};

export const IconStar = () => {
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
