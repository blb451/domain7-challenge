// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Components
import TextInput from 'components/ui/TextInput';
import Button from 'components/ui/Button';

// Styles
import { Container } from './styles';

const SearchField = ({
  onChange, onClick, value, buttonText,
}) => (
  <Container>
    <TextInput onChange={onChange} value={value} />
    <Button onClick={onClick}>{buttonText}</Button>
  </Container>
);

SearchField.propTypes = {
  onClick: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  buttonText: Proptypes.string.isRequired,
};

export default SearchField;
