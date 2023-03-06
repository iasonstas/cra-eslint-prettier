import axios from "axios";
import { BASE_URL, fetchRepositories } from "./RepoContext";

describe("fetch Repositories", () => {
  const mockedResponse = [
    { id: 1, name: "repository 1" },
    { id: 2, name: "repository 2" },
  ];

  test("useFetchRepos fetches and returns the repositories data", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockedResponse);
    const result = await fetchRepositories();

    expect(axios.get).toHaveBeenCalledWith(BASE_URL);

    expect(result).toEqual(result);
  });
});
