import React from 'react';
import styled from 'styled-components';
import { getDeclension } from '../../../utils/utils';

const TicketStops = ({stops}) => {
  return (
    <Container>
      <Text>{getDeclension(stops).toUpperCase()}</Text> 
      <Line/>
    </Container>
  );
};

export default TicketStops;

const Container = styled.div`
  align-self: center;
  margin: 0 16px; 

  @media screen and (max-width: 320px) {
    margin: 10px 16px;
  }
`;

const Text = styled.div`
  margin-bottom: 5px;
  text-align: center;
  color: #8b9497;
  font-size: 14px;
  white-space: nowrap;
`;

const Line = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-start;

  position: relative;

  height: 1px;
  background: #d2d5d6;

  width: calc(100% - 20px);

  &:after {
    content: '✈';
    position: absolute;
    right: -20px; 
    color: #d2d5d6;
    font-size: 18px;
  }
`;