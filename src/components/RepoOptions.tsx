import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Repository } from "../models";
import { RepoContext } from "../context/RepoContext";

const RepoOptions = ({
  handleSelect,
  setSortBy,
  sortBy,
  resultsPerPage,
}: {
  resultsPerPage: string;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  handleSelect: (event: SelectChangeEvent) => void;
}) => {
  const { filteredRepositories, setFilteredRepositories } = useContext(RepoContext);

  const sortedDataByType = (event: SelectChangeEvent) => {
    const { value } = event.target;
    if (filteredRepositories && setFilteredRepositories) {
      setSortBy(value);
      if (value === "name") {
        const sorted = filteredRepositories.sort((a: Repository, b: Repository) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setFilteredRepositories(sorted);
      }
      if (value === "rating") {
        const sorted = filteredRepositories.sort(
          (a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count
        );
        setFilteredRepositories(sorted);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 7,
        marginBottom: 2,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          lineHeight: "27px",
          fontSize: "22px",
          fontWeight: 500,
          color: "#3B5998 ",
        }}
      >
        Repository results
      </Typography>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="sortby-label">Sort By</InputLabel>
          <Select
            labelId="sortby-label"
            label="Sort By"
            value={sortBy}
            onChange={sortedDataByType}
            sx={{ marginRight: 4, minWidth: 100 }}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="rating">Stars count</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              lineHeight: "27px",
              alignSelf: "center",
              fontSize: "13px",
              fontWeight: 500,
              color: "#3B5998 ",
            }}
          >
            results per page
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <Select
              sx={{ marginRight: 4 }}
              labelId="resultsPerPage-label"
              value={resultsPerPage}
              onChange={handleSelect}
            >
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default RepoOptions;
