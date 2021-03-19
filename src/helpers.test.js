import { dataRoller } from "./helpers";

describe("dataRoller", () => {
  test("should should always return the total number of results in COUNT without duplicates", () => {
    const actual = dataRoller({
      data: mockData,
      count: 5,
      allowDuplicates: false,
    });

    expect(actual).toHaveLength(5);
  });

  test("should have length 1 when all dupes for COUNT 5 and allowDuplicates false", () => {
    const actual = dataRoller({
      data: [mockData[0]],
      count: 5,
      allowDuplicates: false,
    });

    expect(actual).toHaveLength(1);
  });

  test("should always return the total number of results in COUNT with duplicates", () => {
    const actual = dataRoller({
      data: [mockData[0]],
      count: 5,
      allowDuplicates: true,
    });

    expect(actual).toHaveLength(5);
  });

  test("should have unique id for every item in array", () => {
    const actual = dataRoller({
      data: [mockData[0]],
      count: 5,
      allowDuplicates: true,
    });

    actual.reduce((acc, d) => {
      expect(acc).toEqual(expect.not.arrayContaining([d.id]));
      acc.push(d.id);
      return acc;
    }, []);
  });
});

const mockData = [
  {
    text: "Skirmish",
    weight: 5,

    description: "(A direct no-frills fight between two parties)",
  },
  {
    text: "Duel",
    weight: 4,

    description:
      "(A fight pairing individuals of similar skill to duke it out)",
  },
  {
    text: "Horde",
    weight: 4,

    description:
      "(A battle in which a constant wave of reinforcements assaults a small group)",
  },
  {
    text: "Hunt",
    weight: 4,

    description: "(The objective is simple: Identify and eliminate the target)",
  },
  {
    text: "Capture",
    weight: 4,

    description: "(Identify and take the target down, but alive)",
  },
  {
    text: "Dogfight",
    weight: 3,

    description: "(A straight-up skirmish with vehicles against vehicles)",
  },
  {
    text: "Tournament",
    weight: 3,

    description:
      "(An elimination-style procession of matches, either one-on-one or team-on-team",
  },
  {
    text: "Battle",
    weight: 3,

    description:
      "(A full-scale mass battle with at least two armies clashing against each other)",
  },
  {
    text: "Mission",
    weight: 3,

    description: "(Achieve the objectives at any cost)",
  },
  {
    text: "Social",
    weight: 2,

    description:
      "(An event such as a ball or party where your aim is to achieve your goal using only social interactions)",
  },
  {
    text: "Huttball",
    weight: 2,

    description:
      "(Two teams, chosen by random draw! One ball, greased as a slippery Hutt! Weapons, name-calling, and cheating are all encouraged! Let's play Huttball!)",
  },
  {
    text: "Foot Race",
    weight: 2,

    description: "(A race between multiple contestants on foot)",
  },
  {
    text: "Planetary Race",
    weight: 2,

    description: "(A race between multiple contestants in planetary vehicles)",
  },
  {
    text: "Space Race",
    weight: 2,

    description:
      "(A race between multiple contestants in starships and space vehicles)",
  },
  {
    text: "Raid Boss",
    weight: 1,

    description: "(One overpowering enemy against a team)",
  },
  {
    text: "Jailbreak",
    weight: 1,

    description: "(Break yourselves out of a sticky situation behind bars)",
  },
  {
    text: "Heist",
    weight: 1,

    description:
      "(Someone has something somebody else wants, and you're going to get it for them)",
  },
  {
    text: "Fucking Run",
    weight: 1,

    description:
      "(There's no possible way to defeat the overwhelming forces arrayed against you, so just fucking run!)",
  },
  {
    text: "Module",
    weight: 1,

    description:
      "(With this option you actually get to play through a pre-recorded mission)",
  },
];
