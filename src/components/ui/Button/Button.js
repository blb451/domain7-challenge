// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Styles
import { colors } from 'config/style.constant';
import { Container } from './styles';

const Button = ({
  children, color, disabled, onClick,
}) => (
  <Container onClick={onClick} color={color} disabled={disabled}>
    {children}
  </Container>
);

Button.defaultProps = {
  color: colors.black,
  disabled: false,
};

Button.propTypes = {
  color: Proptypes.string,
  onClick: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
  disabled: Proptypes.bool,
};

export default Button;
