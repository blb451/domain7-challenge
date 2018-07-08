// Modules
import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

// Components
import TextInput from 'components/ui/TextInput';
import Button from 'components/ui/Button';

const SearchField = ({
  onChange, onClick, value, buttonText,
}) => (
  <Fragment>
    <TextInput onChange={onChange} value={value} />
    <Button onClick={onClick}>{buttonText}</Button>
  </Fragment>
);

SearchField.propTypes = {
  onClick: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  buttonText: Proptypes.string.isRequired,
};

export default SearchField;
