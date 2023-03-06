import React, { useContext, useState } from "react";
import { Box, List, Pagination, SelectChangeEvent } from "@mui/material";

import { Container } from "@mui/system";

import SearchInput from "../components/SearchInput";
import { Repository } from "../models";
import RepoItem from "../components/RepoItem";
import { RepoContext } from "../context/RepoContext";
import SortBy from "../components/RepoOptions";
import IconSearch from "../assets/SearchIcon";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState<string>("8");
  const [sortBy, setSortBy] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const { repositories, filteredRepositories } = useContext(RepoContext);

  // Calculate pagination variables
  const lastIndex = currentPage * parseInt(resultsPerPage, 10);
  const firstIndex = lastIndex - parseInt(resultsPerPage, 10);
  const pageCount = repositories && Math.floor(repositories.length / parseInt(resultsPerPage, 10));

  const currentRepos = filteredRepositories?.slice(firstIndex, lastIndex);
  const handleSelect = (event: SelectChangeEvent) => setResultsPerPage(event.target.value);

  return (
    <Container>
      <Box m={5}>
        <SearchInput icon={<IconSearch />} width={515} height={48} />
        <SortBy
          resultsPerPage={resultsPerPage}
          handleSelect={handleSelect}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
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
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
              setCurrentPage(value);
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
