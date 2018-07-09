// Modules
import styled from 'styled-components';
import { colors } from 'config/style.constant';

const { lightGrey, grey } = colors;

export const Container = styled.button`
  cursor: ${props => !props.disabled && 'pointer'};
  height: 40px;
  background: ${lightGrey};
  border: 1px solid ${grey};
  padding: 2px 7px;
  color: ${props => props.color};

  &:hover {
    background: ${props => !props.disabled && grey};
  }
`;
