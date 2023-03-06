import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment } from "@mui/material";

const IconSearch = () => {
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

export default IconSearch;
