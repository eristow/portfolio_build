import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Menu } from '@styled-icons/evaicons-solid/Menu';

const HeaderButton = styled.button.attrs(props => ({
  color: props.color || '#86fcbb',
}))`
  display: inline-flex;
  padding: 0.5em 1em;
  margin: 0.4em 0.4em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  background-color: transparent;

  &:active {
    background: ${props => props.color};
    color: white;
  }
`;

HeaderButton.propTypes = {
  color: PropTypes.string,
};

const MenuButton = ({ shouldHaveMarginLeft = false, isOpen, setIsOpen }) => (
  <HeaderButton
    onClick={() => setIsOpen(!isOpen)}
    style={{ marginLeft: shouldHaveMarginLeft ? 'auto' : '' }}
  >
    <Menu size="19" />
  </HeaderButton>
);

MenuButton.propTypes = {
  shouldHaveMarginLeft: PropTypes.bool,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default MenuButton;
