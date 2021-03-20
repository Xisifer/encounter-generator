import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

import { foeRoller, dataRoller } from "./helpers";

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

  const [playerCount, setPlayerCount] = React.useState(1);

  const [didFoeSpawn, setDidFoeSpawn] = React.useState();

  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>
        Click the button to obtain a random result from the table in the Combat
        Trials document. This list is only updated by hand, so far.
      </p>
      <p>Last Update: 3/19/21</p>
      <div id="main-area">
        <div className="generator-area">
          {/* MATCH TYPE */}
          <div className="button-group">
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
          <div className="generator-area">
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
          {/* ENEMY TYPE */}
          <div className="generator-area">
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
          <div className="generator-area">
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
          {/* PERSONAL FOE ROLLER */}
          <div className="generator-area">
            <h3>Chance for Rival Foe: 20% x Player Count</h3>
            <br />
            Number of Players in Encounter:
            <br />
            <input
              type="number"
              value={playerCount}
              onChange={(event) => {
                setPlayerCount(parseInt(event.target.value));
              }}
            />
            <Button
              variant="secondary"
              size="lg"
              id="precent-button"
              onClick={() => {
                const foeSpawned = foeRoller({
                  playerCount,
                });
                setDidFoeSpawn(foeSpawned);
              }}
            >
              Roll
            </Button>
            <br />
            <h4>Personal Foe Spawned?</h4>
            {didFoeSpawn !== undefined && (didFoeSpawn ? "Yes" : "No")}
          </div>
          <br />
          {/* GEAR RULES */}
          <div className="generator-area">
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
          <div className="generator-area">
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
          {/* DIFFICULTY */}
          <div className="generator-area">
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
              Difficulty
            </Button>
            <ResultBox
              setData={setMatchDifficultyState}
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
