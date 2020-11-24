/**
 *
 * Button
 *
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  color: props.color || '#03dac6',
  margin: props.margin || '2px 2px',
  padding: props.padding || '10px',
}))`
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  background: #202020;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: ${props => props.padding};
  font-size: 18px;
  border-radius: 4px;
  margin: ${props => props.margin};
  align-self: center;
  min-width: 100px;

  &:active {
    background: ${props => props.color};
    color: white;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default Button;
