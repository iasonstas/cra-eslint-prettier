import { useQuery } from "react-query";
import { useMemo } from "react";
import axios from "axios";
import { Repository } from "../models";

export const BASE_URL = "https://api.github.com/users/facebook/repos?per_page=100";

export const getAllRepos = async () => {
  const response = await axios.get<Repository[]>(BASE_URL);

  return response.data;
};

const useFetchRepos = () => {
  const getRepoData = useQuery<Repository[]>("repos", getAllRepos);

  const repoData = useMemo(() => getRepoData, [getRepoData]);
  return repoData;
};

export default useFetchRepos;
