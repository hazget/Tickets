import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import cursor from '../../../assets/images/cursor/hand.png';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  
  componentDidMount() {
    console.log(this.props);
    
    this.setState({isChecked: this.props.checked});

    if (this.props.click !== undefined && typeof this.props.click === 'function')
    {
      if (this.props.checked) 
        this.props.click(this.props.value);
    }
  }

  handleChange = (e) => {
   this.setState({isChecked: !this.props.filterStops.includes(this.props.value)});
        
    if (this.props.click !== undefined && typeof this.props.click === 'function')
      this.props.click(this.props.value);
  }

  render() {
    return (
      <Container>
        {this.props.text}
        
        <input type="checkbox"
              value={this.props.value}
              checked={this.props.filterStops.includes(this.props.value)}
              disabled={this.props.disabled} 
              onChange={this.handleChange} />
        <Checkmark/>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    filterStops: state.filters.filterStops
  };
};

export default connect(mapStateToProps)(CheckBox);

// Стиль коробки
const Checkmark = styled.div`
display: flex;
justify-content: center;
align-items: center;

position: absolute;
left: 0;

height: 19px;
width: 19px;

background-color: transparent;
border: 1px solid #d2d5d6;
border-radius: 3px;

&:after {
  content: '';
  display: none;
  width: 4px;
  height: 8px;
  border: solid #2196f3;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
}
`;

const Container = styled.label`

  display: flex;
  align-items: center;
 
  position: relative;

  padding-left: 32px;

  color: #4a4a4a;
  font-size: 14px;

  cursor: url(${cursor}), pointer;

  white-space: nowrap;
  
  > input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:not(:disabled):not(:checked):hover + ${Checkmark} {
    border-color: #2196f3;
  }

  > input[type="checkbox"]:checked + ${Checkmark} {
    border-color: #2196f3;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }

  > input[type="checkbox"]:checked + ${Checkmark}:after {
    display: block;
  }

  > input[type="checkbox"]:disabled + ${Checkmark} {
    border-color: #d2d5d6;
  }

  > input[type="checkbox"]:disabled + ${Checkmark}:after {
    border-color: #d2d5d6;
  }
`;