import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchFieldWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2px;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
