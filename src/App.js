import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResultBox } from "./resultBox";

const LOCATION_COUNT = 3;
const MATCH_TYPE_COUNT = 5;
const ENEMY_TYPE_COUNT = 5;
const EQUIPMENT_COUNT = 3;
const RULES_COUNT = 4;
const DIFFICULTY_COUNT = 5;

function App() {
  const [matchTypeState, setMatchTypeState] = React.useState(
    Array(MATCH_TYPE_COUNT).fill({})
  );
  const [matchLocationState, setMatchLocationState] = React.useState(
    Array(LOCATION_COUNT).fill({})
  );
  const [matchEnemyState, setMatchEnemyState] = React.useState(
    Array(ENEMY_TYPE_COUNT).fill({})
  );
  const [matchRulesState, setMatchRulesState] = React.useState(
    Array(RULES_COUNT).fill({})
  );
  const [matchGearState, setMatchGearState] = React.useState(
    Array(EQUIPMENT_COUNT).fill({})
  );
  const [matchDifficultyState, setMatchDifficultyState] = React.useState(
    Array(DIFFICULTY_COUNT).fill({})
  );

  let matchType = [
    {
      text: "Skirmish",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Duel",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Horde",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Hunt",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Capture",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Dogfight",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Tournament",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Battle",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mission",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Social",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Huttball",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Foot Race",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Planetary Race",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Space Race",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Raid Boss",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Jailbreak",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Heist",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Fucking Run",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Module",
      weight: 1,
      icon: "",
      description: "",
    },
  ];
  let matchLocation = [
    {
      text: "Stoval Outpost",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Abandoned Warehouse",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Desert Ruins",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Star Destroyer",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mos Espa Cantina",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Geonosis Arena",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Cliffside Landing Platform",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Ilum Wastes",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Subway Control Station",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mining Colony 72",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mos Shuuta",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Tatooine Spaceport",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "The Retreat",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Forest Moon Landing",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "The Base",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Valley of the Dark Lords",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Zeffo Landing Pad",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Badlands Outpost",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Ilum Cliffs",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Subway Platform",
      weight: 1,
      icon: "",
      description: "",
    },
  ];
  let matchEnemy = [
    {
      text: "Galactic Empire",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Army",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Intelligence",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Inquisitorius",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Remnant",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Remnant (Thrawn/Gideon)",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Remnant (Desann)",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Imperial Knights",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Separatists",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Rebel Alliance",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Galactic Republic",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Jedi Order",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Jedi Praxeum",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Sith Order",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Disciples of Ragnos",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "The Seven",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Old Republic",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Sith Empire",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "First Order",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "The Resistance",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Scum and Villainy",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Slavers",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Yiyar Clan",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Hatchet Men",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Bloodstalkers",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Nar Shadows",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Crimson Dawn",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Pyke Syndicate",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Corusca Syndicate",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Law Enforcement",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "CorSec",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "ADVENT",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Creatures",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Large Creatures",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Zillo Beast",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Pirates",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Jas'Quai Pirates",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Ohnaka Pirates",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Black Sun",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Zann Consortium",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mercenaries",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Bounty Hunters",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Chrome Bones PMC",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mandalorian Loyalists",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Death Watch",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Force Users",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Spectre Cell",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Adamite Paladins",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Skyholme Astromancers",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Nightsisters",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Zeison Sha",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Jensaarai",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Sathari Militants",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Zillo' the Crafter",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Will Nunes Randoms",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Iconic Characters",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "ISDT Corp",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Stormhawks",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Blue Milk Boys",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Starseekers",
      weight: 1,
      icon: "",
      description: "",
    },
  ];
  let matchRules = [
    {
      text: "None",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Side Objective",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Use Two Special Rules",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Use Two Equipment Rules",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Climactic Destiny",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Mild Darkness",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Deep Darkness",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Blinding Light",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Light Drizzle",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Downpour",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Thunder and Lightning",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Sandstorm",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Frigid Cold",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Blistering Heat",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Close Combat",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Stealth Insertion",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Ambushed",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Allied Forces",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Iconic Opponent",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Fisticuffs",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Light and Agile",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Heavy and Durable",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Light Vergence",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Dark Vergence",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Fucking Portals",
      weight: 1,
      icon: "",
      description: "",
    },
  ];
  let matchGear = [
    {
      text: "Bring Your Own",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Diminishing Choices",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Budgeted",
      weight: 1,
      icon: "",
      description:
        ":moneybag: Budgeted (Receive a budget of credits each for Weapons, Armor, and Items)",
    },
    {
      text: "Deployable Cover",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "One of Each",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Take It Home",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Self-Crafted",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Duelist's Arms",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Emplacements",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "Stashes",
      weight: 1,
      icon: "",
      description: "",
    },
    {
      text: "On-Site Procurement",
      weight: 1,
      icon: "",
      description:
        ":Handgun: On-Site Procurement (Start with no gear, find gear littered around match area, Great Rewards)",
    },
  ];
  let matchDifficulty = [
    {
      text: "Very Easy",
      weight: 1,
      icon: "",
    },
    {
      text: "Easy",
      weight: 2,
      icon: "",
    },
    {
      text: "Moderate",
      weight: 4,
      icon: "",
    },
    {
      text: "Hard",
      weight: 3,
      icon: "",
    },
    {
      text: "Very Hard",
      weight: 2,
      icon: "",
    },
    {
      text: "Legendary",
      weight: 1,
      icon: "",
    },
  ];

  const dataRoller = ({ data, setDataState, count, allowDuplicates }) => {
    let dataCopy = [...data];
    let newData = [];

    for (let i; i < data.length; i++) {
      for (let j; j < data.weight; j++) {
        newData.push(data[i]);
      }
    }
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * dataCopy.length);
      let selectedData = dataCopy[index];
      if (allowDuplicates === false) {
        dataCopy = dataCopy.filter((d) => selectedData.text !== d.text);
      }
      newData.push(selectedData);
      // newData.push(selectedData.icon);
      // newData.push(selectedData.description);
      setDataState(newData);
    }
  };

  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>
        Click the button to obtain a random result from the table in the Combat
        Trials document. This list is only updated by hand, so far.
      </p>
      <p>Last Update: 2/13/21</p>
      <div id="main-area">
        <div className="generator-area">
          <div className="button-group">
            <Button
              variant="secondary"
              size="lg"
              id="match-type-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: true,
                  data: matchType,
                  setDataState: setMatchTypeState,
                  count: ENEMY_TYPE_COUNT,
                })
              }
            >
              Match Type
            </Button>
            <ResultBox idPrefix="match-type" data={matchTypeState} />
          </div>

          <div className="generator-area">
            <Button
              variant="secondary"
              size="lg"
              id="match-location-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: false,
                  data: matchLocation,
                  setDataState: setMatchLocationState,
                  count: LOCATION_COUNT,
                })
              }
            >
              Match Location
            </Button>
            <ResultBox idPrefix="match-location" data={matchLocationState} />
          </div>

          <div className="generator-area">
            <Button
              variant="secondary"
              size="lg"
              id="enemy-type-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: false,
                  data: matchEnemy,
                  setDataState: setMatchEnemyState,
                  count: ENEMY_TYPE_COUNT,
                })
              }
            >
              Enemy Type
            </Button>
            <ResultBox idPrefix="match-enemy" data={matchEnemyState} />
          </div>

          <div className="generator-area">
            <Button
              variant="secondary"
              size="lg"
              id="match-equipment-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: false,
                  data: matchGear,
                  setDataState: setMatchGearState,
                  count: EQUIPMENT_COUNT,
                })
              }
            >
              Equipment Rules
            </Button>
            <ResultBox idPrefix="match-gear" data={matchGearState} />
          </div>

          <div className="generator-area">
            <Button
              variant="secondary"
              size="lg"
              id="rules-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: false,
                  data: matchRules,
                  setDataState: setMatchRulesState,
                  count: RULES_COUNT,
                })
              }
            >
              Special Rules
            </Button>
            <ResultBox idPrefix="match-rules" data={matchRulesState} />
          </div>

          <div className="generator-area">
            <Button
              variant="secondary"
              size="lg"
              id="rules-button"
              onClick={() =>
                dataRoller({
                  allowDuplicates: true,
                  data: matchDifficulty,
                  setDataState: setMatchDifficultyState,
                  count: DIFFICULTY_COUNT,
                })
              }
            >
              Difficulty
            </Button>
            <ResultBox
              idPrefix="match-difficulty"
              data={matchDifficultyState}
            />
          </div>
        </div>
        <div id="results"></div>
      </div>
    </div>
  );
}

export default App;
