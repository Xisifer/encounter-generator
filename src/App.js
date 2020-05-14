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
        'Empty Space'
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
        'Allied Forces'
      ]
      let matchGear = [
        'Bring Your Own',
        'On-Site Procurement',
        'Take It Home',
        'Deployable Cover',
        'Self-Crafted',
        'Diminishing Choices'
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
  }

  function equipmentGenerator() {
    var randomEquipment = Math.floor(Math.random() * (matchGear.length));
    console.log(matchGear[randomEquipment])
    document.getElementById('match-equipment-result').innerHTML = matchGear[randomEquipment];
  }

  function rulesGenerator() {
    var randomRules = Math.floor(Math.random() * (matchRules.length));
    console.log(matchRules[randomRules])
    document.getElementById('rules-result').innerHTML = matchRules[randomRules];
  }







  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>Click the button to obtain a random result from the table in the Combat Trials document. This list is only updated by hand, so far.</p>
      <div className="text area">

      </div>
      <div className="buttons">
        <Button 
        variant="dark" 
        size="lg" 
        id="match-type-button" 
        onClick={() => typeGenerator()}>
          Match Type
        </Button>

        <Button 
        variant="dark" 
        size="lg" 
        id="match-location-button"
        onClick={() => locationGenerator()}>
          Match Location
        </Button>

        <Button 
        variant="dark" 
        size="lg" 
        id="enemy-type-button"
        onClick={() => enemyGenerator()}>
          Enemy Type
        </Button>


        <Button 
        variant="dark" 
        size="lg" 
        id="match-equipment-button"
        onClick={() => equipmentGenerator()}>
          Equipment Rules
        </Button>


        <Button 
        variant="dark" 
        size="lg" 
        id="rules-button"
        onClick={() => rulesGenerator()}>
          Special Rules?
        </Button>
        
      </div>
      <div className="results">
        <div className="result" id="match-type-result"></div>
        <div className="result" id="match-location-result"></div>
        <div className="result" id="enemy-type-result">THING3</div>
        <div className="result" id="match-equipment-result">THING4</div>
        <div className="result" id="rules-result">THING5</div>
      </div>
    </div>
  );
  }


export default App;
