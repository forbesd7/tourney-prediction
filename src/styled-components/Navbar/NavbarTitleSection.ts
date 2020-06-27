import styled from "styled-components";

interface NavbarTitleSectionProps {
  readonly mr?: number;
  readonly height?: number;
  readonly borderR?: boolean;
  readonly borderL?: boolean;
  readonly borderT?: boolean;
  readonly borderB?: boolean;
  readonly hover?: boolean;
  readonly account?: boolean;
}

const NavbarTitleSection = styled.div<NavbarTitleSectionProps>`
  &:hover {
    ${(props) =>
      props.hover
        ? ` opacity: 0.8; color: #4981ce; cursor: pointer; background-color:#ffffff;`
        : ""}
  }
  color: #ffffff;
  display: flex;
  flex-direction: ${(props) => (props.account ? `column` : "row")};
  justify-content: space-between;
  margin-right: ${(props) => (props.mr ? `${props.mr}em` : "")};
  height: 4em;
  align-items: center;
  border-right: ${(props) => (props.borderR ? `2px #4981ce solid;` : "")};
  border-left: ${(props) => (props.borderL ? `2px #4981ce solid;` : "")};
  border-top: ${(props) => (props.borderT ? `2px #4981ce solid;` : "")};
  border-bottom: ${(props) => (props.borderB ? `2px #4981ce solid;` : "")};
  transition: all 0.2s ease-out;
`;

export { NavbarTitleSection };
