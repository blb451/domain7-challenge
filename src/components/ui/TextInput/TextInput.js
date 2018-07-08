// Modules
import React from 'react';
import Proptypes from 'prop-types';

const TextInput = ({ value, onChange }) => <input value={value} onChange={onChange} />;

TextInput.propTypes = {
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

export default TextInput;
