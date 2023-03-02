/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { IconSearch } from "../assets/icons";
import SearchInput from "./SearchInput";

import { Repository } from "../models";
import useFetchRepos from "../hooks/useFetchRepos";
import RepoItem from "./RepoItem";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState<string>("8");
  const [sortBy, setSortBy] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Repository[]>([]);
  console.log("🌊 > file: Home.tsx:17 > sortedData:", filteredData);
  const { data, isLoading, isError } = useFetchRepos();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error 404</div>;
  }

  // Calculate pagination variables
  const lastIndex = currentPage * parseInt(resultsPerPage, 10);
  const firstIndex = lastIndex - parseInt(resultsPerPage, 10);
  console.log("🌊 > file: Home.tsx:45 > lastIndex:", firstIndex, lastIndex);

  const sortedDataByType = (event: SelectChangeEvent) => {
    const { value } = event.target;
    if (data) {
      setSortBy(value);
      if (value === "name") {
        const sorted = data.sort((a: Repository, b: Repository) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setFilteredData(sorted);
      }
      if (value === "rating") {
        const sorted = data.sort(
          (a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count
        );
        setFilteredData(sorted);
      }
    }
  };

  const currentRepos = filteredData?.slice(firstIndex, lastIndex);

  const handleSelect = (event: SelectChangeEvent) => setResultsPerPage(event.target.value);
  const handlePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Box p={5}>
      <SearchInput icon={<IconSearch />} width={515} height={48} />
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
            fontFamily: "Montserrat",
            lineHeight: "27px",
            fontSize: "22px",
            fontWeight: 500,
            color: "#3B5998 ",
          }}
        >
          Repository results
        </Typography>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="sortby-label">Sort By</InputLabel>
            <Select
              labelId="sortby-label"
              label="Sort By"
              value={sortBy}
              onChange={sortedDataByType}
              sx={{ marginRight: 4, width: 100 }}
            >
              <MenuItem value="name">name</MenuItem>
              <MenuItem value="rating">rating</MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              fontFamily: "Montserrat",
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

      <List
        sx={{
          minHeight: 400,
          minWidth: 768,
          padding: 1,
          border: "1px solid #3B5998",
          borderRadius: 2,
        }}
      >
        {currentRepos?.map((repo: Repository) => (
          <RepoItem key={repo.id} repo={repo} selected={selected} setSelected={setSelected} />
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handlePage}>Prev</Button>

        <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </Box>
    </Box>
  );
};

export default Home;
