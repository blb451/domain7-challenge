// Modules
import styled from 'styled-components';

// Constants
import { colors } from 'config/style.constant';

const { lightGrey, grey } = colors;

export const Container = styled.button`
  cursor: ${props => !props.disabled && 'pointer'};
  height: 40px;
  background: ${lightGrey};
  border: 1px solid ${grey};
  border-radius: 2px;
  padding: 2px 7px;
  color: ${props => props.color};

  &:hover {
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    background: ${props => !props.disabled && grey};
  }
`;
