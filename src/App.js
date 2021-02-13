import React from "react";
import "./App.css";
import {Button, ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


  function App() {

  const [matchTypeState, setMatchTypeState]=React.useState(null)
  const [matchLocationState, setMatchLocationState]=React.useState(null)



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
        "Stoval Outpost",
        "Abandoned Warehouse",
        "Desert Ruins",
        "Star Destroyer",
        "Mos Espa Cantina",
        "Geonosis Arena",
        "Cliffside Landing Platform",
        "Ilum Wastes",
        "Subway Control Station",
        "Mining Colony 72",
        "Mos Shuuta",
        "Tatooine Spaceport",
        "The Retreat",
        "Forest Moon Landing",
        "The Base",
        "Valley of the Dark Lords",
        "Zeffo Landing Pad",
        "Badlands Outpost",
        "Ilum Cliffs",
        "Subway Platform"
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
        "Very Easy",
        "Easy",
        "Easy",
        "Easy",
        "Moderate",
        "Moderate",
        "Moderate",
        "Moderate",
        "Hard",
        "Hard",
        "Hard",
        "Very Hard",
        "Very Hard",
        "Legendary"
      ]

  const typeGenerator = () => {
    console.log("entering the typeGenerator function...");
    // Roll on the MatchType table to get a result.
    console.log("Rolling for random match");
    let randomType = matchType[Math.floor(Math.random() * (matchType.length))];

    // Compare our MatchType result to the MatchType state
    console.log("is this a duplicate?");
    if(randomType === matchTypeState) {
    // If it"s a duplicate roll, reroll.
    console.log("Duplicate detected! Rerolling...");
      typeGenerator();
    } else {
    // Store this roll into the MatchType state.
    console.log("Unique roll detected! Storing into state.");
    setMatchTypeState(randomType);
    }
  }


  const locationGenerator = () => {
    // Need 3 RESULTS

    // Roll on the MatchType table to get a result.
    let randomLocation1 = matchLocation[Math.floor(Math.random() * (matchLocation.length))];
    let randomLocation2 = matchLocation[Math.floor(Math.random() * (matchLocation.length))];
    let randomLocation3 = matchLocation[Math.floor(Math.random() * (matchLocation.length))];

    if(randomLocation1 === matchLocationState) {     // Compare our MatchType result to the MatchType state
      locationGenerator();     // If it"s a duplicate roll, reroll.
    } else {
    setMatchLocationState(randomLocation1);     // Store this roll into the MatchType state.
    }

    if(randomLocation2 === matchLocationState) { 
      locationGenerator(); 
    } else {
    setMatchLocationState(randomLocation2);   
    }
    if(randomLocation3 === matchLocationState) {
      locationGenerator();
    } else {
    setMatchLocationState(randomLocation3); 
    }
  }


  function enemyGenerator() {
    // Need 5 RESULTS
    var randomEnemy1 = Math.floor(Math.random() * (matchEnemy.length));
    var randomEnemy2 = Math.floor(Math.random() * (matchEnemy.length));
    var randomEnemy3 = Math.floor(Math.random() * (matchEnemy.length));
    var randomEnemy4 = Math.floor(Math.random() * (matchEnemy.length));
    var randomEnemy5 = Math.floor(Math.random() * (matchEnemy.length));
    // console.log(matchEnemy[randomEnemy])

    document.getElementById("enemy-type-result1").innerHTML = matchEnemy[randomEnemy1];
    document.getElementById("enemy-type-result2").innerHTML = matchEnemy[randomEnemy2];
    document.getElementById("enemy-type-result3").innerHTML = matchEnemy[randomEnemy3];
    document.getElementById("enemy-type-result4").innerHTML = matchEnemy[randomEnemy4];
    document.getElementById("enemy-type-result5").innerHTML = matchEnemy[randomEnemy5];



  }

  function equipmentGenerator() {
    // Need 3 RESULTS
    var randomEquipment1 = Math.floor(Math.random() * (matchGear.length));
    var randomEquipment2 = Math.floor(Math.random() * (matchGear.length));
    var randomEquipment3 = Math.floor(Math.random() * (matchGear.length));
    // console.log(matchGear[randomEquipment])
    document.getElementById("match-equipment-result1").innerHTML = matchGear[randomEquipment1];
    document.getElementById("match-equipment-result2").innerHTML = matchGear[randomEquipment2];
    document.getElementById("match-equipment-result3").innerHTML = matchGear[randomEquipment3];
    
  }

  function rulesGenerator() {
    // Need 4 RESULTS

    var randomRules1 = Math.floor(Math.random() * (matchRules.length));
    var randomRules2 = Math.floor(Math.random() * (matchRules.length));
    var randomRules3 = Math.floor(Math.random() * (matchRules.length));
    var randomRules4 = Math.floor(Math.random() * (matchRules.length));

    document.getElementById("rules-result1").innerHTML = matchRules[randomRules1];
    document.getElementById("rules-result2").innerHTML = matchRules[randomRules2];
    document.getElementById("rules-result3").innerHTML = matchRules[randomRules3];
    document.getElementById("rules-result4").innerHTML = matchRules[randomRules4];

  }

  function difficultyGenerator() {
    // Need 5 RESULTS
    var randomDifficulty1 = Math.floor(Math.random() * (matchDifficulty.length));
    var randomDifficulty2 = Math.floor(Math.random() * (matchDifficulty.length));
    var randomDifficulty3 = Math.floor(Math.random() * (matchDifficulty.length));
    var randomDifficulty4 = Math.floor(Math.random() * (matchDifficulty.length));
    var randomDifficulty5 = Math.floor(Math.random() * (matchDifficulty.length));
    
    console.log(matchDifficulty[randomDifficulty1])

    document.getElementById("difficulty-result1").innerHTML = matchDifficulty[randomDifficulty1];
    document.getElementById("difficulty-result2").innerHTML = matchDifficulty[randomDifficulty2];
    document.getElementById("difficulty-result3").innerHTML = matchDifficulty[randomDifficulty3];
    document.getElementById("difficulty-result4").innerHTML = matchDifficulty[randomDifficulty4];
    document.getElementById("difficulty-result5").innerHTML = matchDifficulty[randomDifficulty5];
  }






  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>Click the button to obtain a random result from the table in the Combat Trials document. This list is only updated by hand, so far.</p>
      <p>Last Update: 2/12/21</p>
      <div id="main-area">
      <div class="generator-area">
        <div className="button-group">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-type-button" 
          onClick={() => typeGenerator()}>
            Match Type
          </Button>
          <div className="result" id="match-type-result1">{matchTypeState}</div>
          <div className="result" id="match-type-result2">{matchTypeState}</div>
          <div className="result" id="match-type-result3">{matchTypeState}</div>
          <div className="result" id="match-type-result4">{matchTypeState}</div>
          <div className="result" id="match-type-result5">{matchTypeState}</div>
        </div>

        <div class="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-location-button"
          onClick={() => locationGenerator()}>
            Match Location
          </Button>
          <div class="result-box">
            <ListGroup>
              <ListGroup.Item id="match-location-result1">{matchLocationState}</ListGroup.Item>
              <ListGroup.Item id="match-location-result2">{matchLocationState}</ListGroup.Item>
              <ListGroup.Item id="match-location-result3">{matchLocationState}</ListGroup.Item>
            </ListGroup>
          </div>
          {/* <div className="result" id="match-location-result1">{matchLocationState}</div> */}
          {/* <div className="result" id="match-location-result2">{matchLocationState}</div>
          <div className="result" id="match-location-result3">{matchLocationState}</div> */}
          
        </div>

        <div class="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="enemy-type-button"
          onClick={() => enemyGenerator()}>
            Enemy Type
          </Button>
          <div class="result-box">
            <ListGroup>
              <ListGroup.Item id="enemy-type-result1"></ListGroup.Item>
              <ListGroup.Item id="enemy-type-result2"></ListGroup.Item>
              <ListGroup.Item id="enemy-type-result3"></ListGroup.Item>
              <ListGroup.Item id="enemy-type-result4"></ListGroup.Item>
              <ListGroup.Item id="enemy-type-result5"></ListGroup.Item>
            </ListGroup>
          </div>
        </div>


        <div class="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-equipment-button"
          onClick={() => equipmentGenerator()}>
            Equipment Rules
          </Button>
          <div class="result-box">
            <ListGroup>
              <ListGroup.Item id="match-equipment-result1"></ListGroup.Item>
              <ListGroup.Item id="match-equipment-result2"></ListGroup.Item>
              <ListGroup.Item id="match-equipment-result3"></ListGroup.Item>
            </ListGroup>
          </div>
        </div>


        <div class="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => rulesGenerator()}>
            Special Rules
          </Button>
          <div class="result-box">
            <ListGroup>
              <ListGroup.Item id="rules-result1"></ListGroup.Item>
              <ListGroup.Item id="rules-result2"></ListGroup.Item>
              <ListGroup.Item id="rules-result3"></ListGroup.Item>
              <ListGroup.Item id="rules-result4"></ListGroup.Item>
            </ListGroup>
          </div>

        </div>
        <div class="generator-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => difficultyGenerator()}>
            Difficulty
          </Button>
          <div class="result-box">
            <ListGroup>
              <ListGroup.Item id="difficulty-result1"></ListGroup.Item>
              <ListGroup.Item id="difficulty-result2"></ListGroup.Item>
              <ListGroup.Item id="difficulty-result3"></ListGroup.Item>
              <ListGroup.Item id="difficulty-result4"></ListGroup.Item>
              <ListGroup.Item id="difficulty-result5"></ListGroup.Item>
            </ListGroup>
          </div>
        </div>


      </div>
      <div id="results">
        
      </div>
      </div>

    </div>
  );
  }


export default App;
