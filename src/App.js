import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


  function App() {

  const [matchTypeState, setMatchTypeState]=React.useState(null)
  const [matchLocationState, setMatchLocationState]=React.useState(null)


      let matchType = [
        'Duel',
        'Skirmish',
        'Dogfight',
        'Horde'
      ]
      let matchLocation = [
        'Stoval Outpost',
        'Abandoned Warehouse',
        'Desert Ruins',
        'Star Destroyer',
        'Mos Espa Cantina',
        'Geonosis Arena',
        'Cliffside Landing Platform',
        'Empty Space (Dogfight)'
      ]
      let matchEnemy = [
        'Galactic Empire',
        'Separatists',
        'Death Watch',
        'Sith Empire',
        'Nightsisters',
        'Scum and Villainy',
        'Rebel Alliance',
        'Galactic Republic',
        'Jedi Order',
        'Black Sun',
        'Iconic Characters',
        'Pirates',
        'Old Republic',
        'Bounty Hunters',
        'Will Nunes Randoms',
        'Creatures',
        'Stormhawks',
        'Blue Milk Boys',
        'First Order',
        'The Resistance',
        'Zillo the Crafter',
        'Zillo Beast'
      ]
      let matchRules = [
        'Climactic Destiny',
        'Stealth Insertion',
        'Poor Visibility',
        'Close Combat',
        'Allied Forces',
        'None',
        'None',
        'None',
        'None',
        'None'
      ]
      let matchGear = [
        'Bring Your Own',
        'On-Site Procurement',
        'Take It Home',
        'Deployable Cover',
        'Self-Crafted',
        'Diminishing Choices'
      ]
      let matchDifficulty = [
        'Very Easy',
        'Easy',
        'Moderate',
        'Hard',
        'Very Hard',
        'Legendary'
      ]


  const typeGenerator = () => {

    // Roll on the MatchType table to get a result.
    let randomType = matchType[Math.floor(Math.random() * (matchType.length))];

    // Compare our MatchType result to the MAtchType state
    if(randomType === matchTypeState) {
    // If it's a duplicate roll, reroll.
    console.log("Duplicate detected! Rerolling...");
      typeGenerator();
    } else {
    // Store this roll into the MatchType state.
    console.log("Unique roll! Printing out...");
    setMatchTypeState(randomType);
    }
  }


  const locationGenerator = () => {

    // Roll on the MatchType table to get a result.
    let randomLocation = matchLocation[Math.floor(Math.random() * (matchLocation.length))];

    // Compare our MatchType result to the MAtchType state
    if(randomLocation === matchLocationState) {
    // If it's a duplicate roll, reroll.
    console.log("Duplicate detected! Rerolling...");
      locationGenerator();
    } else {
    // Store this roll into the MatchType state.
    console.log("Unique roll! Printing out...");
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
