import { v4 as uuid } from "uuid";

export const foeRoller = ({
  playerCount,
  initialChance = 0.05,
  spawnRatePerPlayer = 0.2,
}) => {
  let diceRoll = Math.random();
  const spawnChance = initialChance + playerCount * spawnRatePerPlayer;
  return spawnChance >= diceRoll;
};

// See if I can pull dataState out of this, and put it into App.js

export const dataRoller = ({ data, setDataState, count, allowDuplicates }) => {
  let dataCopy = [];
  let newData = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weight; j++) {
      dataCopy.push(data[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * dataCopy.length);
    let selectedData = dataCopy[index];
    if (allowDuplicates === false) {
      dataCopy = dataCopy.filter((d) => selectedData.text !== d.text);
    }
    selectedData.id = uuid();
    newData.push(selectedData);
    return newData;
  }
};
