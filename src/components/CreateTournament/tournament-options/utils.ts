export const getOptionNames = (option: string) => {
  switch (option) {
    case "selectedNumOfPlayers":
      return "Number of players";
    case "groupNumber":
      return "Number of groups";
    case "playersPerGroup":
      return "Players per group";
  }
};
