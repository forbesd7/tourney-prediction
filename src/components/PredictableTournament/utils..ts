export const calculateColumns = (playerNum: number) => {
  switch (playerNum) {
    case 8:
      return "1fr 1fr 1fr";
    case 16:
      return "1fr 1fr 1fr 1fr";
    case 32:
      return "1fr 1fr 1fr 1fr 1fr ";
    case 64:
      return "1fr 1fr 1fr 1fr 1fr 1fr";
  }
};

export const calculateRows = (playerNum: number) => {
  let frs = "";
  while (playerNum !== 0) {
    frs += "1fr ";
    playerNum--;
  }
  console.log(frs);
  return frs;
};

export const calculateLocation = (numOfPlayers: number, matchup: string) => {
  if ((numOfPlayers = 8)) {
    const [round, position] = matchup.slice(2).split("-");
    console.log(round, position);
    return [round, position];
  }
  return [1, 2];
};

//calculate where in the grid the match up should land depend on round/position
