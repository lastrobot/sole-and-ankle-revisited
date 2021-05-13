import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";
import { QUERIES } from "../../constants";

const MobileIcons = ({ clickHandler }) => {
  return (
    <Wrapper>
      <ShoppingBag id="shopping-bag" size={24} strokeWidth={1.5} />
      <Search id="search" size={24} strokeWidth={1.5} />
      <Menu id="menu" size={24} strokeWidth={1.5} onClick={clickHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletScreens} {
    display: flex;
    justify-content: space-between;
    gap: min(4vw, 40px);
    align-items: baseline;
  }
`;
const ShoppingBag = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const Search = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const Menu = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export default MobileIcons;
