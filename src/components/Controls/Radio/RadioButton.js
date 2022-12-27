import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cursor from '../../../assets/images/cursor/hand.png';

/**
 * @param {string} group 
 * @param {string} text 
 * @param {boolean} isChecked 
 * @param {boolean} isDisabled 
 */
class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.radioInput = React.createRef(); 
  }

  handleClick = (e) => {
    e.preventDefault();

    if (!this.radioInput.current.checked && !this.props.isDisabled) {
      this.radioInput.current.checked = true;

      if (this.props.click !== undefined && typeof this.props.click === 'function')
        this.props.click(this.props.value); 
    }
  }

  render() {
    const {value, group, isDisabled} = this.props;

    return (
      <Button onClick={(e) => { !isDisabled && this.handleClick(e) }}>
        <input ref={this.radioInput}
              type="radio"
              name={group}
              value={value}
              defaultChecked={(typeof this.props.isChecked === 'boolean') ? this.props.isChecked : false}
              disabled={(typeof isDisabled === 'boolean') ? isDisabled : false} />
        <span>{this.props.text}</span>
      </Button>
    )
  }
}

export default RadioButton;

RadioButton.propTypes = {
  group: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  click: PropTypes.func.isRequired
};

export const Button = styled.label`
  
  width: 100%; 

  > input[type="radio"] {
    display: none;
  }

  > input[type="radio"] + span {
    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 100%;

    color: #2196f3;
    font-size: 14px;
    text-transform: uppercase;
  
    background-color: #fff;
    border 1px solid #d2d5d6;

    cursor: url(${cursor}), pointer;
  }

  &:hover > input[type="radio"]:not(:checked):not(:disabled) + span {
    background-color: #f2fcff;
    border-color: #64b5f5;
  }

  > input[type="radio"]:checked + span {
    color: #fff;
    background-color: #2196f3;
    border: 1px solid #2196f3;
  }

  > input:disabled + span {
    color: #888;
    background-color: #d2d5d6;
    cursor: not-allowed;
  }

  &:first-of-type > span {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type > span {
    border-radius: 0 5px 5px 0;
  }

  &:only-child > span {
    border-radius: 5px;
  }
`;