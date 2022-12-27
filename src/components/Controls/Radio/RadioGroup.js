import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import { isEmptyString } from '../../../utils/checkTypes';
import { generateString } from '../../../utils/utils';

/**
 * @param {string} groupName 
 * @param {array} items 
 * @param {func} onItemClick 
 */
const RadioGroup = ({groupName, items, onItemClick}) => {
  
  if (!Array.isArray(items) || !items.length) 
    return null;

 if (isEmptyString(groupName)) 
    groupName = generateString();

  const buttons = items.map(item => 
    <RadioButton key={item.value} 
                text={item.text} 
                group={groupName} 
                value={item.value} 
                click={onItemClick} 
                isChecked={item.checked} 
                isDisabled={item.disabled}/>
  );

  return (
    <Container>
      {buttons}
    </Container>
  );
};

export default RadioGroup;

RadioGroup.propTypes = {
  groupName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  })).isRequired,
  onItemClick: PropTypes.func.isRequired
};

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  min-width: 270px;
  width: 70%;
  padding: 4px 16px;
  margin: 0 auto 16px;
`;