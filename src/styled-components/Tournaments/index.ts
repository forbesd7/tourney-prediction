import styled from "styled-components";

const Tournaments = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SelectableTournaments = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 8em;
  flex-wrap: wrap;
`;
const SelectableTournamentCard = styled.div`
  display: flex;
  height: 20%;
  width: 15%;
  background-color: #ffffff;
  color: blue;
  padding: 2em;
  flex-direction: column;
`;
export { SelectableTournamentCard, Tournaments, SelectableTournaments };
