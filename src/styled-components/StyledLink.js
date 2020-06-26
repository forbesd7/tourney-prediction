import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  all: unset;
  &:visited {
    color: #4981ce;
  }
`;

export default (props) => <StyledLink {...props} />;
