import { Box, InputBase } from "@mui/material";

type Props = {
  icon: React.ReactNode;
  height: number;
  width: number;
};

const SearchInput = ({ icon, height, width }: Props) => {
  return (
    <Box
      sx={{
        height,
        width,
        border: "1px solid #3B5998",
        borderRadius: 10,
        display: "flex",
        padding: "14px",
        paddingRight: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
      />
      {icon}
    </Box>
  );
};

export default SearchInput;
