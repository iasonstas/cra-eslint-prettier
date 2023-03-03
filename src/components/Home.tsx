import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { Container } from "@mui/system";
import { IconSearch } from "../assets/icons";
import SearchInput from "./SearchInput";

import { Repository } from "../models";
import useFetchRepos from "../hooks/useFetchRepos";
import RepoItem from "./RepoItem";
import LoadingScreen from "./LoadingScreen";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<Repository[]>([]);

  const [resultsPerPage, setResultsPerPage] = useState<string>("8");
  const [sortBy, setSortBy] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const { data, isLoading, isError } = useFetchRepos();

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <Box>Error 404</Box>;
  }

  // Calculate pagination variables
  const lastIndex = currentPage * parseInt(resultsPerPage, 10);
  const firstIndex = lastIndex - parseInt(resultsPerPage, 10);
  const pageCount = data && Math.floor(data.length / parseInt(resultsPerPage, 10));

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

  const searchFilter = (event: SelectChangeEvent) => {
    if (data) {
      const sorted = data.filter((repo: Repository) =>
        repo.name.toLocaleLowerCase().includes(event.target.value)
      );
      if (sorted.length > 0) setFilteredData(sorted);
      else setFilteredData([]);
    }
  };

  const currentRepos = filteredData?.slice(firstIndex, lastIndex);

  const handleSelect = (event: SelectChangeEvent) => setResultsPerPage(event.target.value);
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <Container>
      <Box m={5}>
        <SearchInput icon={<IconSearch />} width={515} height={48} searchFilter={searchFilter} />
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
        <Box sx={{ display: "flex", margin: 1, justifyContent: "flex-end" }}>
          <Pagination
            count={pageCount}
            color="primary"
            shape="rounded"
            variant="outlined"
            page={currentPage}
            onChange={handlePage}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
