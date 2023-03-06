import { Box, InputBase, InputBaseProps } from "@mui/material";
import { useContext } from "react";
import { RepoContext } from "../context/RepoContext";
import { Repository } from "../models";

interface Props extends InputBaseProps {
  icon: React.ReactNode;
  height: number;
  width: number;
}
const SearchInput = ({ icon, height, width, ...props }: Props) => {
  const { repositories, setFilteredRepositories } = useContext(RepoContext);

  const searchFilter = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (repositories && setFilteredRepositories) {
      const sorted = repositories.filter((repo: Repository) =>
        repo.name.toLocaleLowerCase().includes(event.target.value)
      );
      if (sorted.length > 0) setFilteredRepositories(sorted);
      else setFilteredRepositories([]);
    }
  };
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
        {...props}
      />
      {icon}
    </Box>
  );
};

export default SearchInput;
