import styled from "styled-components";

interface RoundOfContainerProps {
  readonly isActive?: boolean;
}

interface PreviewContainerProps {
  readonly type?: string;
}

interface MatchupProps {
  readonly marginBottom?: string;
  readonly marginTop?: string;
  readonly padding?: string;
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
  background-color: #111111;
  padding-top: ${(props) => (props.padding ? props.padding + "em" : "")};
  padding-bottom: ${(props) => (props.padding ? props.padding + "em" : "")};
  color: #4981ce;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "em" : ""};
  width: 80%;
  position: relative;
  /* &::before {
    content: "";
    background: red;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50%;
    width: 1px;
  } */
`;

const RoundOfTitle = styled.div<RoundOfContainerProps>`
  color: #ffffff;
  padding-bottom: 2em;
  margin-right: 1.5em;
`;

export { RoundOfTitle, PreviewContainer, RoundOfContainer, MatchupBox };
