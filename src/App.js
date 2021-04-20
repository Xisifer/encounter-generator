import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ResultBox } from "./resultBox";
import {
  matchType,
  matchLocation,
  matchEnemy,
  matchGear,
  matchDifficulty,
  matchIconics,
  matchRules,
} from "./data";

import {
  foeRoller,
  dataRoller,
  displayFoeDiceRoll,
  calcSpawnChance,
} from "./helpers";

const LOCATION_COUNT = 3;
const MATCH_TYPE_COUNT = 5;
const ENEMY_TYPE_COUNT = 5;
const EQUIPMENT_COUNT = 3;
const RULES_COUNT = 4;
const DIFFICULTY_COUNT = 5;
const ICONIC_COUNT = 1;

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
  const [matchIconicState, setMatchIconicState] = React.useState(
    Array(ICONIC_COUNT).fill({})
  );
  // const [randomNumberState, setRandomNumberState] = React.useState(
  //   Array(RANDOM_COUNT).fill({})
  // );

  // const [playerCount, setPlayerCount] = React.useState(1);

  const initialState = {
    playerCount: 1,
    rolledValue: 0,
    spawnRatePerPlayer: 10,
    foeDidSpawn: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set-player-count": {
        return {
          ...state,
          playerCount: action.playerCount,
        };
      }
      case "set-spawn-rate": {
        return {
          ...state,
          spawnRatePerPlayer: action.spawnRatePerPlayer,
        };
      }
      case "roll": {
        const { didSpawn, diceRoll } = foeRoller({
          playerCount: state.playerCount,
          spawnRatePerPlayer: state.spawnRatePerPlayer,
        });
        return {
          ...state,
          rolledValue: diceRoll,
          foeDidSpawn: didSpawn,
        };
      }
      default:
        return state;
    }
  };

  const [foeSpawnData, dispatchFoeSpawnData] = React.useReducer(
    reducer,
    initialState
  );

  // const [foeSpawnRoll, setFoeSpawnRoll] = React.useState();

  return (
    <div className="App">
      <h1 className="text-center uppercase py-4">
        Combat Trials Encounter Randomizer
      </h1>
      <p>
        Click the button to obtain a random result from the table in the Combat
        Trials document. This list is only updated by hand, so far.
      </p>
      <p>Last Update: 4/18/21</p>
      <div className="px-10">
        <div className="flex">
          {/* MATCH TYPE */}
          <div className="w-1/2">
            <Button
              variant="secondary"
              size="lg"
              id="match-type-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: true,
                  data: matchType,
                  count: ENEMY_TYPE_COUNT,
                  currentData: matchTypeState,
                });
                setMatchTypeState(dataRolled);
              }}
            >
              Match Type
            </Button>
            <ResultBox
              setData={setMatchTypeState}
              idPrefix="match-type"
              data={matchTypeState}
            />
          </div>
          {/* MATCH LOCATION */}
          <div className="pl-8 w-1/2">
            <Button
              variant="secondary"
              size="lg"
              id="match-location-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: false,
                  data: matchLocation,
                  count: LOCATION_COUNT,
                  currentData: matchLocationState,
                });
                setMatchLocationState(dataRolled);
              }}
            >
              Match Location
            </Button>
            <ResultBox
              setData={setMatchLocationState}
              idPrefix="match-location"
              data={matchLocationState}
            />
          </div>
        </div>
        {/* //////////////////////////// */}
        <div className="flex pt-6">
          {/* ENEMY TYPE */}
          <div className="w-1/2">
            <Button
              variant="secondary"
              size="lg"
              id="enemy-type-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: false,
                  data: matchEnemy,
                  setDataState: setMatchEnemyState,
                  count: ENEMY_TYPE_COUNT,
                  currentData: matchEnemyState,
                });
                setMatchEnemyState(dataRolled);
              }}
            >
              Enemy Type
            </Button>
            <ResultBox
              setData={setMatchEnemyState}
              idPrefix="match-enemy"
              data={matchEnemyState}
            />
          </div>
          {/* ICONIC OPPONENT */}
          <div className="w-1/2 pl-8">
            <Button
              variant="secondary"
              size="lg"
              id="iconic-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: false,
                  data: matchIconics,
                  setDataState: setMatchIconicState,
                  count: ICONIC_COUNT,
                });
                setMatchIconicState(dataRolled);
              }}
            >
              Iconic Opponent
            </Button>
            <ResultBox
              setData={setMatchIconicState}
              idPrefix="match-iconic"
              data={matchIconicState}
            />
          </div>
        </div>
        <div className="flex pt-6">
          {/* GEAR RULES */}
          <div className="w-1/2">
            <Button
              variant="secondary"
              size="lg"
              id="match-equipment-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: false,
                  data: matchGear,
                  setDataState: setMatchGearState,
                  count: EQUIPMENT_COUNT,
                  currentData: matchGearState,
                });
                setMatchGearState(dataRolled);
              }}
            >
              Equipment Rules
            </Button>
            <ResultBox
              setData={setMatchGearState}
              idPrefix="match-gear"
              data={matchGearState}
            />
          </div>
          {/* SPECIAL RULES */}
          <div className="pl-8 w-1/2">
            <Button
              variant="secondary"
              size="lg"
              id="rules-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: false,
                  data: matchRules,
                  setDataState: setMatchRulesState,
                  count: RULES_COUNT,
                  currentData: matchRulesState,
                });
                setMatchRulesState(dataRolled);
              }}
            >
              Special Rules
            </Button>
            <ResultBox
              setData={setMatchRulesState}
              idPrefix="match-rules"
              data={matchRulesState}
            />
          </div>
        </div>
        <div className="flex">
          {/* DIFFICULTY */}
          <div className="w-1/2">
            <h3>Difficulty</h3>
            <Button
              variant="secondary"
              size="lg"
              id="rules-button"
              onClick={() => {
                const dataRolled = dataRoller({
                  allowDuplicates: true,
                  data: matchDifficulty,
                  setDataState: setMatchDifficultyState,
                  count: DIFFICULTY_COUNT,
                  currentData: matchDifficultyState,
                });
                setMatchDifficultyState(dataRolled);
              }}
            >
              Roll
            </Button>

            <ResultBox
              setData={setMatchDifficultyState}
              idPrefix="match-difficulty"
              data={matchDifficultyState}
            />
          </div>
          {/* PERSONAL FOE ROLLER */}
          <div className="border-2 mt-14 w-1/2 ml-8 p-8">
            <h3>Chance for Rival Foe: </h3>
            <div className="flex">
              <input
                type="number"
                min="1"
                max="100"
                className="text-black"
                value={foeSpawnData.spawnRatePerPlayer}
                onChange={(event) => {
                  dispatchFoeSpawnData({
                    type: "set-spawn-rate",
                    spawnRatePerPlayer: parseInt(event.target.value),
                  });
                }}
              />
              <p>%</p>
              <h3 className="pl-1"> * Player Count</h3>
            </div>
            <br />
            Number of Players in Encounter:
            <br />
            <input
              type="number"
              className="text-black"
              min="1"
              max="99"
              value={foeSpawnData.playerCount}
              onChange={(event) => {
                dispatchFoeSpawnData({
                  type: "set-player-count",
                  playerCount: parseInt(event.target.value),
                });
              }}
            />
            <Button
              variant="secondary"
              size="lg"
              id="precent-button"
              onClick={() => {
                dispatchFoeSpawnData({ type: "roll" });
                // setFoeSpawnData(foeSpawned);
              }}
            >
              Roll
            </Button>
            <br />
            <h4>Personal Foe Spawned?</h4>
            {displayFoeDiceRoll({
              foeDidSpawn: foeSpawnData.foeDidSpawn,
              diceRoll: foeSpawnData.rolledValue,
              spawnChance: calcSpawnChance({
                playerCount: foeSpawnData.playerCount,
                spawnRatePerPlayer: foeSpawnData.spawnRatePerPlayer,
              }),
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
