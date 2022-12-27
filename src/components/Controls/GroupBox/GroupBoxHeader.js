import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @param {string} text 
 */
const GroupBoxHeader = ({ text }) => (
  <Label>{text}</Label>
);

export default GroupBoxHeader;

GroupBoxHeader.propTypes = {
  text: PropTypes.string
};

GroupBoxHeader.defaultProps = {
  text: ''
};

const Label = styled.legend`
  margin: 0 0 16px 16px;
  
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (max-width: 1024px) {
    margin: 0 auto 10px;
  }
`;