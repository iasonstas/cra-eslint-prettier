import { Box, InputBase, SelectChangeEvent } from "@mui/material";
import { Repository } from "../models";

type Props = {
  icon: React.ReactNode;
  height: number;
  width: number;
  searchFilter: (event: any) => void;
};

const SearchInput = ({ icon, height, width, searchFilter }: Props) => {
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
        onChange={searchFilter}
        inputProps={{ "aria-label": "Search" }}
      />
      {icon}
    </Box>
  );
};

export default SearchInput;
