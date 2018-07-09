// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Styles
import { Container, Label, StyledSelect } from './styles';

const SelectInput = ({ label, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <StyledSelect {...rest} />
  </Container>
);

SelectInput.propTypes = {
  onChange: Proptypes.func.isRequired,
  // booooooooo
  options: Proptypes.arrayOf(Proptypes.object).isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};

export default SelectInput;
