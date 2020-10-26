import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


  function App() {

  const [matchTypeState, setMatchTypeState]=React.useState(null)
  const [matchLocationState, setMatchLocationState]=React.useState(null)



      let matchType = [
        'Skirmish',
        'Skirmish',
        'Skirmish',
        'Skirmish',
        'Duel',
        'Duel',
        'Duel',
        'Horde',
        'Horde',
        'Horde',
        'Hunt',
        'Hunt',
        'Capture',
        'Capture',
        'Dogfight',
        'Dogfight',
        'Tournament',
        'Tournament',
        'Battle',
        'Battle',
        'Social',
        'Huttball',
        'Foot Race',
        'Planetary Race',
        'Space Race',
        'Raid Boss',
        'Jailbreak',
        'Heist',
        'Fucking Run'
      ]
      let matchLocation = [
        'Stoval Outpost',
        'Abandoned Warehouse',
        'Desert Ruins',
        'Star Destroyer',
        'Mos Espa Cantina',
        'Geonosis Arena',
        'Cliffside Landing Platform',
        'Ilum Wastes',
        'Subway Control Station',
        'Mining Colony 72',
        'Mos Shuuta',
        'Tatooine Spaceport',
        'The Retreat',
        'Forest Moon Landing',
        'The Base',
        'Valley of the Dark Lords'
      ]
      let matchEnemy = [
        'Galactic Empire',
        'Galactic Empire',
        'Galactic Empire',
        'Separatists',
        'Separatists',
        'Separatists',
        'Rebel Alliance',
        'Rebel Alliance',
        'Rebel Alliance',
        'Galactic Republic',
        'Galactic Republic',
        'Galactic Republic',
        'Jedi Order',
        'Jedi Order',
        'Sith Order',
        'Sith Order',
        'Old Republic',
        'Old Republic',
        'Sith Empire',
        'Sith Empire',
        'First Order',
        'The Resistance',
        'Scum and Villainy',
        'Scum and Villainy',
        'Scum and Villainy',
        'Creatures',
        'Creatures',
        'Creatures',
        'Large Creatures',
        'Large Creatures',
        'Zillo Beast',
        'Pirates',
        'Pirates',
        'Black Sun',
        'Black Sun',
        'Hatchet Men',
        'Bloodstalkers',
        'Nar Shadows',
        'Bounty Hunters',
        'Corusca Syndicate',
        'JasQuai Pirates',
        'Yiyar Clan',
        'Chrome Bones PMC',
        'Death Watch',
        'Nightsisters',
        'Zeison Sha',
        'Jensaarai',
        'Imperial Knights',
        'ISDT Corp',
        'Stormhawks',
        'Blue Milk Boys',
        'Zillo the Crafter',
        'Will Nunes Randoms',
        'Iconic Characters'
      ]
      let matchRules = [
        'None',
        'None',
        'None',
        'None',
        'None',
        'None',
        'None',
        'None',
        'None',
        'None',
        'Side Objective',
        'Side Objective',
        'Side Objective',
        'Use Two Special Rules',
        'Use Two Special Rules',
        'Use Two Equipment Rules',
        'Use Two Equipment Rules',
        'Climactic Destiny',
        'Climactic Destiny',
        'Mild Darkness',
        'Mild Darkness',
        'Deep Darkness',
        'Blinding Light',
        'Light Drizzle',
        'Light Drizzle',
        'Downpour',
        'Thunder and Lightning',
        'Sandstorm',
        'Frigid Cold',
        'Blistering Heat',
        'Close Combat',
        'Stealth Insertion',
        'Ambushed',
        'Allied Forces',
        'Iconic Opponent',
        'Fisticuffs',
        'Light and Agile',
        'Heavy and Durable',
        'Light Vergence',
        'Dark Vergence',
        'Fucking Portals'
      ]
      let matchGear = [
        'Bring Your Own',
        'Bring Your Own',
        'Bring Your Own',
        'Diminishing Choices',
        'Diminishing Choices',
        'Diminishing Choices',
        'On-Site Procurement',
        'Budgeted',
        'Budgeted',
        'Deployable Cover',
        'Deployable Cover',
        'One of Each',
        'One of Each',
        'Take It Home',
        'Self-Crafted',
        'Duelists Arms',
        'Emplacements',
        'Stashes'
      ]
      let matchDifficulty = [
        'Very Easy',
        'Very Easy',
        'Easy',
        'Easy',
        'Easy',
        'Moderate',
        'Moderate',
        'Moderate',
        'Moderate',
        'Hard',
        'Hard',
        'Hard',
        'Very Hard',
        'Very Hard',
        'Legendary'
      ]

    function christmas() {
      console.log("Merry Santa Day!");
    }

  const typeGenerator = () => {
    console.log("entering the typeGenerator function...");
    // Roll on the MatchType table to get a result.
    console.log("Rolling for random match");
    let randomType = matchType[Math.floor(Math.random() * (matchType.length))];

    // Compare our MatchType result to the MatchType state
    console.log("is this a duplicate?");
    if(randomType === matchTypeState) {
    // If it's a duplicate roll, reroll.
    console.log("Duplicate detected! Rerolling...");
      typeGenerator();
    } else {
    // Store this roll into the MatchType state.
    console.log("Unique roll detected! Storing into state.");
    setMatchTypeState(randomType);
    }
  }


  const locationGenerator = () => {

    // Roll on the MatchType table to get a result.
    let randomLocation = matchLocation[Math.floor(Math.random() * (matchLocation.length))];

    // Compare our MatchType result to the MatchType state
    if(randomLocation === matchLocationState) {
    // If it's a duplicate roll, reroll.
      locationGenerator();
    } else {
    // Store this roll into the MatchType state.
    setMatchLocationState(randomLocation);
    }
  }

  // function locationGenerator() {
  //   var randomLocation = Math.floor(Math.random() * (matchLocation.length));
  //   console.log(matchLocation[randomLocation])
  //   document.getElementById('match-location-result').innerHTML = matchLocation[randomLocation];
  // }

  function enemyGenerator() {
    var randomEnemy = Math.floor(Math.random() * (matchEnemy.length));
    console.log(matchEnemy[randomEnemy])


    document.getElementById('enemy-type-result').innerHTML = matchEnemy[randomEnemy];



  }

  function equipmentGenerator() {
    var randomEquipment = Math.floor(Math.random() * (matchGear.length));
    console.log(matchGear[randomEquipment])
    document.getElementById('match-equipment-result').innerHTML = matchGear[randomEquipment];
    
  }

  function rulesGenerator() {

    var randomRules1 = Math.floor(Math.random() * (matchRules.length));
    var randomRules2 = Math.floor(Math.random() * (matchRules.length));

    console.log(matchRules[randomRules1])
    console.log(matchRules[randomRules2])

    document.getElementById('rules-result1').innerHTML = matchRules[randomRules1];
    document.getElementById('rules-between').innerHTML = "OR ";
    document.getElementById('rules-result2').innerHTML = matchRules[randomRules2];

  }

  function difficultyGenerator() {
    var randomDifficulty = Math.floor(Math.random() * (matchDifficulty.length));
    
    console.log(matchDifficulty[randomDifficulty])

    document.getElementById('difficulty-result').innerHTML = matchDifficulty[randomDifficulty];
  }







  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>Click the button to obtain a random result from the table in the Combat Trials document. This list is only updated by hand, so far.</p>
      <p>Last Update: 10/26/20</p>
      <div id="main-area">
      <div id="button-area">
        <div className="button-group">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-type-button" 
          onClick={() => typeGenerator()}>
            Match Type
          </Button>
    
          <div className="result" id="match-type-result">{matchTypeState}</div>
        </div>

        <div id="button-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-location-button"
          onClick={() => locationGenerator()}>
            Match Location
          </Button>
          <div className="result" id="match-location-result">{matchLocationState}</div>
        </div>

        <div id="button-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="enemy-type-button"
          onClick={() => enemyGenerator()}>
            Enemy Type
          </Button>
          <div className="result" id="enemy-type-result"></div>
        </div>


        <div id="button-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="match-equipment-button"
          onClick={() => equipmentGenerator()}>
            Equipment Rules
          </Button>

          <div className="result" id="match-equipment-result"></div>
        </div>


        <div id="button-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => rulesGenerator()}>
            Special Rules
          </Button>

          <div className="result" id="rules-result1"></div>
          <div className="result" id="rules-between"></div>
          <div className="result" id="rules-result2"></div>

        </div>
        <div id="button-area">
          <Button 
          variant="secondary" 
          size="lg" 
          id="rules-button"
          onClick={() => difficultyGenerator()}>
            Difficulty
          </Button>

          <div className="result" id="difficulty-result"></div>
        </div>


      </div>
      <div id="results">
        
      </div>
      </div>

    </div>
  );
  }


export default App;
