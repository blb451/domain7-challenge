// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Styles
import { Container } from './styles';

const Button = ({ children, onClick }) => <Container onClick={onClick}>{children}</Container>;

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
};

export default Button;
