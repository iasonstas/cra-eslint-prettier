import axios from "axios";
import { BASE_URL, getAllRepos } from "./useFetchRepos";

describe("fetch Repositories", () => {
  const mockedResponse = [
    { id: 1, name: "repository 1" },
    { id: 2, name: "repository 2" },
  ];

  test("useFetchRepos fetches and returns the repositories data", () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockedResponse);
    const result = getAllRepos();

    expect(axios.get).toHaveBeenCalledWith(BASE_URL);

    expect(result).toEqual(result);
  });
});
