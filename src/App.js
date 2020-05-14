import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




  // class App extends Component() {
    function App() {

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

// render() {
  function typeGenerator() {
    var randomType = Math.floor(Math.random() * (matchType.length));

    document.getElementById('match-type-result').innerHTML = matchType[randomType];
  }


  function locationGenerator() {
    var randomLocation = Math.floor(Math.random() * (matchLocation.length));
    console.log(matchLocation[randomLocation])
    document.getElementById('match-location-result').innerHTML = matchLocation[randomLocation];
  }

  function enemyGenerator() {
    var randomEnemy = Math.floor(Math.random() * (matchEnemy.length));
    console.log(matchEnemy[randomEnemy])


    document.getElementById('enemy-type-result').innerHTML = matchEnemy[randomEnemy];

    // switch (randomEnemy) {
    //   case 0: // Galactic Empire
    //     document.getElementById('enemy-type-text').innerHTML = ":Empire:"
    //     break;
    //   case 1: // Separatists
    //     document.getElementById('enemy-type-text').innerHTML = ":CISscum: "
    //     break;
    //   case 2: // Death Watch
    //     document.getElementById('enemy-type-text').innerHTML = ":DeathWatch: "
    //     break;
    //   case 3: // Sith Empire
    //     document.getElementById('enemy-type-text').innerHTML = ":DestinyDark: "
    //     break;
    //   case 4: // Nightsisters
    //     document.getElementById('enemy-type-text').innerHTML = ":Maul: "
    //     break;
    //   case 5: // Scum and Villainy
    //     document.getElementById('enemy-type-text').innerHTML = ":booooosk: "
    //     break;
    //   case 6:  // Rebel Alliance
    //     document.getElementById('enemy-type-text').innerHTML = ":Rebel: "
    //     break;
    //   case 7: // Galactic Republic
    //     document.getElementById('enemy-type-text').innerHTML = ":ForTheRepublic: "
    //     break;
    //   case 8: // Jedi Order
    //     document.getElementById('enemy-type-text').innerHTML = ":DestinyLight: "
    //     break;
    //   case 9: // Black Sun
    //     document.getElementById('enemy-type-text').innerHTML = ":ig88: "
    //     break;
    //   case 10: // Iconic Characters
    //     document.getElementById('enemy-type-text').innerHTML = ":Vader: :ahsoka_shock:"
    //     break;
    //   case 11: // Pirates
    //     document.getElementById('enemy-type-text').innerHTML = ":HanShotFirst: "
    //     break;
    //   case 12: // Old Republic
    //     document.getElementById('enemy-type-text').innerHTML = ":Threat: "
    //     break;
    //   case 13: //Bounty Hunters
    //     document.getElementById('enemy-type-text').innerHTML = ":Boba: "
    //     break;
    //   case 14: // Will Nunes Randoms
    //     document.getElementById('enemy-type-text').innerHTML = ":Avor: "
    //     break;
    //   case 15: // Creatures
    //     document.getElementById('enemy-type-text').innerHTML = ":woofbark: "
    //     break;
    //   case 16: // Stormhawks
    //     document.getElementById('enemy-type-text').innerHTML = ":drained: "
    //     break;
    //   case 17: // Blue Milk Boys
    //     document.getElementById('enemy-type-text').innerHTML = ":evanhat: "
    //     break;
    //   case 18: // First Order
    //     document.getElementById('enemy-type-text').innerHTML = ":FirstOrder: "
    //     break;
    //   case 19: // The Resistance
    //     document.getElementById('enemy-type-text').innerHTML = ":Resistance: "
    //     break;
    //   case 20: // Zillo the Crafter
    //     document.getElementById('enemy-type-text').innerHTML = ":PhoenixSquadron: "
    //     break;
    //   case 21: // Zillo Beast
    //     document.getElementById('enemy-type-text').innerHTML = ":Jabba: "
    //     break;
    //   default:
    // }


  }

  function equipmentGenerator() {
    var randomEquipment = Math.floor(Math.random() * (matchGear.length));
    console.log(matchGear[randomEquipment])
    document.getElementById('match-equipment-result').innerHTML = matchGear[randomEquipment];
    // switch (randomEquipment) {
    //   case 0: // Bring Your Own
    //     document.getElementById('rules-text').innerHTML = ":forcepip: "
    //     break;
    //   case 1: // On-Site Procurement
    //     document.getElementById('rules-text').innerHTML = ":SithEmpire: "
    //     break;
    //   case 2: // Take It Home
    //     document.getElementById('rules-text').innerHTML = ":Credit: "
    //     break;
    //   case 3: // Deployable Cover
    //     document.getElementById('rules-text').innerHTML = "::setback: "
    //     break;
    //   case 4: // Self-Crafted
    //     document.getElementById('rules-text').innerHTML = ":Craftsman: "
    //     break;
    //   case 5: // Diminishing Choices
    //     document.getElementById('rules-text').innerHTML = ":Utinni: "
    //     break;
    //   default:
    // }
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
        <Button 
        variant="secondary" 
        size="lg" 
        id="match-type-button" 
        onClick={() => typeGenerator()}>
          Match Type
        </Button>
        <br/>
        <div className="result" id="match-type-result"></div>



        <Button 
        variant="secondary" 
        size="lg" 
        id="match-location-button"
        onClick={() => locationGenerator()}>
          Match Location
        </Button>
        <br/>
        <div className="result" id="match-location-result"></div>



        <Button 
        variant="secondary" 
        size="lg" 
        id="enemy-type-button"
        onClick={() => enemyGenerator()}>
          Enemy Type
        </Button>
        <br/>
        <div className="result" id="enemy-type-result"></div>




        <Button 
        variant="secondary" 
        size="lg" 
        id="match-equipment-button"
        onClick={() => equipmentGenerator()}>
          Equipment Rules
        </Button>
        <br/>
        <div className="result" id="match-equipment-result"></div>




        <Button 
        variant="secondary" 
        size="lg" 
        id="rules-button"
        onClick={() => rulesGenerator()}>
          Special Rules
        </Button>
        <br/>
        <div className="result" id="rules-result1"></div>
        <div className="result" id="rules-between"></div>
        <div className="result" id="rules-result2"></div>



        <Button 
        variant="secondary" 
        size="lg" 
        id="rules-button"
        onClick={() => difficultyGenerator()}>
          Difficulty
        </Button>
        <br/>
        <div className="result" id="difficulty-result"></div>



      </div>
      <div id="results">
        
        
        
        

    
      </div>
      </div>
      {/* <div id="text area">
        <div className="discord-text" id="match-type-text"></div>
        <div className="discord-text" id="match-location-text"></div>
        <div className="discord-text" id="enemy-type-text"></div>
        <div className="discord-text" id="match-equipment-text"></div>
        <div className="discord-text" id="rules-text"></div>
        <div className="discord-text" id="difficulty-text"></div>
      </div> */}
    </div>
  );
  }


export default App;
