import { Box } from "@mui/system";
import axios from "axios";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import LoadingScreen from "../components/LoadingScreen";

import { Repository } from "../models";

type RepoContextType = {
  repositories: Repository[];
  setRepositories?: Dispatch<SetStateAction<Repository[]>>;
  filteredRepositories: Repository[];
  setFilteredRepositories?: Dispatch<SetStateAction<Repository[]>>;
};
export const BASE_URL = "https://api.github.com/users/facebook/repos?per_page=100";

export const RepoContext = createContext<RepoContextType>({
  repositories: [],
  setRepositories: () => {},
  filteredRepositories: [],
  setFilteredRepositories: () => {},
});

export const fetchRepositories = async () => {
  const response = await axios.get<Repository[]>(BASE_URL);
  return response.data;
};

export default function RepoProvider({ children }: { children: React.ReactNode }) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);

  const contextValue = useMemo(
    () => ({ repositories, filteredRepositories, setFilteredRepositories }),
    [repositories, filteredRepositories, setFilteredRepositories]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRepositories();
        setRepositories(response);
      } catch (error) {
        setIsError(true);
      } finally {
        console.log("test");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (repositories) setFilteredRepositories(repositories);
  }, [repositories]);

  useEffect(() => {
    if (filteredRepositories) setFilteredRepositories(filteredRepositories);
  }, [filteredRepositories]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <Box>Error 404</Box>;
  }
  return <RepoContext.Provider value={contextValue}>{children}</RepoContext.Provider>;
}
