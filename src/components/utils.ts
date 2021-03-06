const getNumOfMatchups = (numOfPlayers: number) => {
  let numOfPlayersToBeDivided = numOfPlayers;
  let numOfMatchups = [];

  while (numOfPlayersToBeDivided % 2 === 0) {
    numOfMatchups.push(numOfPlayersToBeDivided / 2);
    numOfPlayersToBeDivided /= 2;
  }

  return numOfMatchups;
};

const getRoundOfNames = (num: number) => {
  return `Ro${num * 2}`;
};

export { getRoundOfNames, getNumOfMatchups };
