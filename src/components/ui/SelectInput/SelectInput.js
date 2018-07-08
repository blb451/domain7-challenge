// Modules
import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

const SelectInput = ({
  label, options, value, onChange,
}) => (
  <Fragment>
    {label}
    <select value={value} onChange={onChange}>
      {options}
    </select>
  </Fragment>
);

SelectInput.propTypes = {
  onChange: Proptypes.func.isRequired,
  options: Proptypes.node.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};

export default SelectInput;
