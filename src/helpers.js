import { v4 as uuid } from "uuid";

export const foeRoller = ({
  playerCount,
  initialChance = 0.05,
  spawnRatePerPlayer = 0.1,
}) => {
  let diceRoll = Math.random();
  const spawnChance = initialChance + playerCount * spawnRatePerPlayer;
  return spawnChance >= diceRoll;
};

// See if I can pull dataState out of this, and put it into App.js

export const dataRoller = ({ data, count, allowDuplicates, currentData }) => {
  let weightedData = [];
  let newData = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weight; j++) {
      weightedData.push(data[i]);
    }
  }

  for (let i = 0; i < count; i++) {
    let selectedData;
    if (currentData && currentData[i] && currentData[i].locked) {
      selectedData = currentData[i];
      newData.push(currentData[i]);
    } else if (weightedData.length) {
      const index = Math.floor(Math.random() * weightedData.length);
      selectedData = { ...weightedData[index] };
      selectedData.id = uuid();
      newData.push(selectedData);
    }

    if (allowDuplicates === false) {
      weightedData = weightedData.filter((d) => selectedData.text !== d.text);
    }
  }

  return newData;
};
