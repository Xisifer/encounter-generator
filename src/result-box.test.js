import { dataLockToggle } from "./resultBox";
import { matchDifficulty } from "./data";

describe("dataLockToggle", () => {
  it("expect passed ID to now have locked property", () => {
    const index = 3;
    const actual = dataLockToggle({ id: index, data: mockData });

    expect(actual).toHaveLength(mockData.length);
    expect(actual[index]).toHaveProperty("locked");
    expect(actual[index - 1]).not.toHaveProperty("locked");
  });
});

const mockData = [
  matchDifficulty[0],
  matchDifficulty[0],
  matchDifficulty[1],
  matchDifficulty[2],
  matchDifficulty[2],
].map((m, i) => ({ ...m, id: i }));
