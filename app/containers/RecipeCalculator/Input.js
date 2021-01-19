import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StockInput from '../../components/Input';

const Text = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const Input = ({ item, i, text, objKey, onChange }) => (
  <div>
    <Text>{text}</Text>
    <StockInput
      style={{ width: '150px' }}
      type="number"
      min="0"
      placeholder={0}
      defaultValue={item[objKey]}
      onChange={e => onChange(e, i, objKey)}
    />
  </div>
);

Input.propTypes = {
  item: PropTypes.object,
  i: PropTypes.number,
  text: PropTypes.string,
  objKey: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
