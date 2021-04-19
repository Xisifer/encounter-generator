import { v4 as uuid } from "uuid";

export const calcSpawnChance = ({ playerCount, spawnRatePerPlayer }) => {
  return playerCount * spawnRatePerPlayer;
};

export const foeRoller = ({ playerCount, spawnRatePerPlayer = 10 }) => {
  let diceRoll = Math.random() * 100;

  const spawnChance = calcSpawnChance({ playerCount, spawnRatePerPlayer });
  return {
    didSpawn: spawnChance >= diceRoll,
    diceRoll,
  };
};

export const displayFoeDiceRoll = ({ foeDidSpawn, diceRoll, spawnChance }) => {
  if (foeDidSpawn === null) {
    return null;
  }
  const yesOrNo = foeDidSpawn ? "Yes" : "No";
  return `${yesOrNo} (Result: ${diceRoll.toFixed(0)}, Chance: ${spawnChance})`;
};

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
