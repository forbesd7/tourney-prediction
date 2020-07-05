import styled from "styled-components";

interface RoundOfContainerProps {
  readonly isActive?: boolean;
}

interface PreviewContainerProps {
  readonly type?: string;
}

interface MatchupProps {
  readonly marginBottom?: string;
}

const PreviewContainer = styled.div<PreviewContainerProps>`
  display: flex;
  width: 100%;
  padding: 2em;
`;

const RoundOfContainer = styled.div<RoundOfContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MatchupBox = styled.div<MatchupProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #4981ce;
  margin-bottom: 2em;
  width: 80%;
`;

const RoundOfTitle = styled.div<RoundOfContainerProps>`
  color: #ffffff;
  padding-bottom: 2em;
  margin-right: 1.5em;
`;

export { RoundOfTitle, PreviewContainer, RoundOfContainer, MatchupBox };
