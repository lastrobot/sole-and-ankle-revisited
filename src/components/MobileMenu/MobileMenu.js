/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <ModalWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="main menu">
        <Header>
          <CloseButton onClick={onDismiss}>
            <CloseIcon id="close" strokeWidth={1} size={16} />
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          </CloseButton>
        </Header>

        <MenuNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MenuNav>
        <MenuFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MenuFooter>
      </Content>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(220deg 5% 40% 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  height: 100%;
  margin-left: 75px;
  width: calc(100% - 75px);
  background-color: white;
`;

const CloseButton = styled(UnstyledButton)`
  position: relative;
  width: 48px;
  height: 48px;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;

    &:link {
      color: ${COLORS.gray[900]};
    }

    &:visited {
      color: ${COLORS.secondary};
    }
  }
`;

const MenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    font-size: 1rem;
    line-height: 1.2rem;
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

const Label = styled.label``;

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;

  &:focus {
    outline: 0;
  }
`;

export default MobileMenu;
