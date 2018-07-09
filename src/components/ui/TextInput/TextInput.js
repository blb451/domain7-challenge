// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Styles
import { Input } from './styles';

const TextInput = props => <Input {...props} />;

TextInput.propTypes = {
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

export default TextInput;
