import { useQuery } from "react-query";
import { useMemo } from "react";
import axios from "axios";
import { Repository } from "../models";

const getAllRepos = async () => {
  const response = await axios.get<Repository[]>(
    "https://api.github.com/users/facebook/repos?per_page=100"
  );

  return response.data;
};

const useFetchRepos = () => {
  const getRepoData = useQuery<Repository[]>("repos", getAllRepos);

  const repoData = useMemo(() => getRepoData, [getRepoData]);
  return repoData;
};

export default useFetchRepos;
