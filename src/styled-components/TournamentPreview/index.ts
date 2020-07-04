import styled from "styled-components";

interface RoundOfContainerProps {
  readonly isActive?: boolean;
}

interface PreviewContainerProps {
  readonly type?: string;
}

const PreviewContainer = styled.div<PreviewContainerProps>`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const RoundOfContainer = styled.div<RoundOfContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MatchupBox = styled.div<RoundOfContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #4981ce;
  margin-bottom: 2em;
`;

export { PreviewContainer, RoundOfContainer, MatchupBox };
