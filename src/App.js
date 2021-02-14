import React from "react";
import "./App.css";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {ResultBox} from "./resultBox";


  function App() {

  const [matchTypeState, setMatchTypeState]=React.useState([])
  const [matchLocationState, setMatchLocationState]=React.useState([])
  const [matchEnemyState, setMatchEnemyState]=React.useState([])
  const [matchRulesState, setMatchRulesState]=React.useState([])
  const [matchGearState, setMatchGearState]=React.useState([])
  const [matchDifficultyState, setMatchDifficultyState]=React.useState([])



      let matchType = [
        "Skirmish",
        "Skirmish",
        "Skirmish",
        "Skirmish",
        "Skirmish",
        "Skirmish",
        "Duel",
        "Duel",
        "Duel",
        "Horde",
        "Horde",
        "Horde",
        "Hunt",
        "Hunt",
        "Capture",
        "Capture",
        "Dogfight",
        "Dogfight",
        "Tournament",
        "Tournament",
        "Battle",
        "Battle",
        "Mission",
        "Mission",
        "Social",
        "Huttball",
        "Foot Race",
        "Planetary Race",
        "Space Race",
        "Raid Boss",
        "Jailbreak",
        "Heist",
        "Fucking Run",
        "Module"
      ]
      let matchLocation = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
        // "Stoval Outpost",
        // "Abandoned Warehouse",
        // "Desert Ruins",
        // "Star Destroyer",
        // "Mos Espa Cantina",
        // "Geonosis Arena",
        // "Cliffside Landing Platform",
        // "Ilum Wastes",
        // "Subway Control Station",
        // "Mining Colony 72",
        // "Mos Shuuta",
        // "Tatooine Spaceport",
        // "The Retreat",
        // "Forest Moon Landing",
        // "The Base",
        // "Valley of the Dark Lords",
        // "Zeffo Landing Pad",
        // "Badlands Outpost",
        // "Ilum Cliffs",
        // "Subway Platform"
      ]
      let matchEnemy = [
        "Galactic Empire",
        "Galactic Empire",
        "Galactic Empire",
        "Imperial Army",
        "Imperial Intelligence",
        "Inquisitorius",
        "Imperial Remnant",
        "Imperial Remnant (Thrawn/Gideon)",
        "Imperial Remnant (Desann)",
        "Imperial Knights",
        "Separatists",
        "Separatists",
        "Separatists",
        "Rebel Alliance",
        "Rebel Alliance",
        "Rebel Alliance",
        "Galactic Republic",
        "Galactic Republic",
        "Galactic Republic",
        "Jedi Order",
        "Jedi Order",
        "Jedi Praxeum",
        "Sith Order",
        "Sith Order",
        "Disciples of Ragnos",
        "The Seven",
        "Old Republic",
        "Old Republic",
        "Sith Empire",
        "Sith Empire",
        "First Order",
        "The Resistance",
        "Scum and Villainy",
        "Scum and Villainy",
        "Scum and Villainy",
        "Slavers",
        "Yiyar Clan",
        "Hatchet Men",
        "Bloodstalkers",
        "Nar Shadows",
        "Crimson Dawn",
        "Pyke Syndicate",
        "Corusca Syndicate",
        "Law Enforcement",
        "Law Enforcement",
        "Law Enforcement",
        "CorSec",
        "ADVENT",
        "Creatures",
        "Creatures",
        "Creatures",
        "Large Creatures",
        "Large Creatures",
        "Zillo Beast",
        "Pirates",
        "Pirates",
        "Pirates",
        "Jas'Quai Pirates",
        "Ohnaka Pirates",
        "Black Sun",
        "Zann Consortium",
        "Mercenaries",
        "Mercenaries",
        "Mercenaries",
        "Bounty Hunters",
        "Chrome Bones PMC",
        "Mandalorian Loyalists",
        "Death Watch",
        "Force Users",
        "Spectre Cell",
        "Adamite Paladins",
        "Skyholme Astromancers",
        "Nightsisters",
        "Zeison Sha",
        "Jensaarai",
        "Sathari Militants",
        "Zillo' the Crafter",
        "Will Nunes Randoms",
        "Iconic Characters",
        "ISDT Corp",
        "Stormhawks",
        "Blue Milk Boys",
        "Starseekers"
      ]
      let matchRules = [
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "Side Objective",
        "Side Objective",
        "Side Objective",
        "Use Two Special Rules",
        "Use Two Special Rules",
        "Use Two Equipment Rules",
        "Use Two Equipment Rules",
        "Climactic Destiny",
        "Climactic Destiny",
        "Mild Darkness",
        "Mild Darkness",
        "Deep Darkness",
        "Blinding Light",
        "Light Drizzle",
        "Light Drizzle",
        "Downpour",
        "Thunder and Lightning",
        "Sandstorm",
        "Frigid Cold",
        "Blistering Heat",
        "Close Combat",
        "Stealth Insertion",
        "Ambushed",
        "Allied Forces",
        "Iconic Opponent",
        "Fisticuffs",
        "Light and Agile",
        "Heavy and Durable",
        "Light Vergence",
        "Dark Vergence",
        "Fucking Portals"
      ]
      let matchGear = [
        "Bring Your Own",
        "Bring Your Own",
        "Bring Your Own",
        "Bring Your Own",
        "Bring Your Own",
        "Bring Your Own",
        "Diminishing Choices",
        "Diminishing Choices",
        "Diminishing Choices",
        "Budgeted",
        "Budgeted",
        "Deployable Cover",
        "Deployable Cover",
        "One of Each",
        "One of Each",
        "Take It Home",
        "Self-Crafted",
        "Duelist's Arms",
        "Emplacements",
        "Stashes",
        "On-Site Procurement",
      ]
      let matchDifficulty = [
        "Very Easy",
        "Easy",
        "Moderate",
        "Hard",
        "Very Hard",
        "Legendary"
      ]





  const dataRoller = (data, setDataState, count) => {
    // Arena (3 entries)
    // Match Type (5 entries)
    // Enemy Type (5 entries)
    // Equipment (3 entries)
    // Special Rules (4 entries)
    // Difficulty (5 entries)
    
    // I don't mind if the same thing pops up multiple times in Match Type and Difficulty
    // I DO mind in Location, Enemy Type, Equipment Rules, and Special Rules

    let dataCopy = [...data]; 
    

    const index1 = Math.floor(Math.random() * (dataCopy.length))
    let randomData1 = dataCopy.splice(index1,1)

    const index2 = Math.floor(Math.random() * (dataCopy.length))
    let randomData2 = dataCopy.splice(index2,1)

    const index3 = Math.floor(Math.random() * (dataCopy.length))
    let randomData3 = dataCopy.splice(index3,1)

    setDataState([randomData1,randomData2,randomData3]);



  }






  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>Click the button to obtain a random result from the table in the Combat Trials document. This list is only updated by hand, so far.</p>
      <p>Last Update: 2/12/21</p>
      <div id="main-area">
      <div className="generator-area">
        <div className="button-group">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-type-button" 
          onClick={() => dataRoller(matchType, setMatchTypeState)}>
            Match Type
          </Button>
          <ResultBox 
            idPrefix="match-type"
            data={matchTypeState}
          />
        </div>

        <div className="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-location-button"
          onClick={() => dataRoller(matchLocation, setMatchLocationState)}>
            Match Location
          </Button>
          <ResultBox 
            idPrefix="match-location"
            data={matchLocationState}
          />
        </div>

        <div className="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="enemy-type-button"
          onClick={() => dataRoller(matchEnemy, setMatchEnemyState)}>
            Enemy Type
          </Button>
          <ResultBox 
            idPrefix="match-enemy"
            data={matchEnemyState}
          />
        </div>


        <div className="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-equipment-button"
          onClick={() => dataRoller(matchGear, setMatchGearState)}>
            Equipment Rules
          </Button>
          <ResultBox 
            idPrefix="match-gear"
            data={matchGearState}
          />
        </div>


        <div className="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => dataRoller(matchRules, setMatchRulesState)}>
            Special Rules
          </Button>
          <ResultBox 
            idPrefix="match-rules"
            data={matchRulesState}
          />
        </div>

        <div className="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => dataRoller(matchDifficulty, setMatchDifficultyState)}>
            Difficulty
          </Button>
          <ResultBox 
            idPrefix="match-difficulty"
            data={matchDifficultyState}
          />
        </div>


      </div>
      <div id="results">
        
      </div>
      </div>

    </div>
  );
  }


export default App;
