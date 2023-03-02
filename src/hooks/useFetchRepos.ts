import { useQuery } from "react-query";
import { useMemo } from "react";
import { Repository } from "../models";

const getAllRepos = () => {
  return fetch("https://api.github.com/users/facebook/repos?per_page=100").then((res) =>
    res.json()
  );
};

const useFetchRepos = () => {
  const getRepoData = useQuery<Repository[]>("repos", getAllRepos);

  const repoData = useMemo(() => getRepoData, [getRepoData]);

  return repoData;
};

export default useFetchRepos;
