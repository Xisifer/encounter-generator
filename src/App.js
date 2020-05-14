import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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









  return (
    <div className="App">
      <h1>Combat Trials Encounter Randomizer!</h1>
      <p>Click the button to obtain a random result from the table in the Combat Trials document. This list is only updated by hand, so far.</p>
      <div className="text area">

      </div>
      <div className="buttons">
        <Button variant="dark" size="lg" id="match-type-button">Match Type</Button>
        <Button variant="dark" size="lg" id="match-location-button">Match Location</Button>
        <Button variant="dark" size="lg" id="enemy-type-button">Enemy Type</Button>
        <Button variant="dark" size="lg" id="match-gear-button">Equipment Rules</Button>
        <Button variant="dark" size="lg" id="rules-button">Special Rules?</Button>
      </div>
      <div className="results">
        <div className="result" id="match-type-result">THING1</div>
        <div className="result" id="match-location-result">THING2</div>
        <div className="result" id="enemy-type-result">THING3</div>
        <div className="result" id="match-gear-result">THING4</div>
        <div className="result" id="rules-result">THING5</div>
      </div>
    </div>
  );
}

export default App;
