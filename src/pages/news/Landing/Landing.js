// Modules
import React from 'react';
import Proptypes from 'prop-types';

// Components
import SearchField from 'components/ui/SearchField';
import Logo from 'components/static/Logo';

// Styles
import { Container, Content, Text, Subtext, ErrorMessage } from './styles';

const MAIN_TEXT =
  'Search through millions of articles from over 30,000 large and small news sources and blogs.';
const SUB_TEXT = 'Input keywords or phrases to search for, then press `Enter` or click `Search`';

const Landing = ({
  queryString,
  handleInputChange,
  fetchNewsArticles,
  errorMessage,
  handleKeyPress,
}) => (
  <Container>
    <Content>
      <Logo />
      <SearchField
        value={queryString}
        onChange={handleInputChange}
        onClick={fetchNewsArticles}
        buttonText="Search"
        onKeyPress={handleKeyPress}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Text>{MAIN_TEXT}</Text>
      <Subtext>{SUB_TEXT}</Subtext>
    </Content>
  </Container>
);

Landing.propTypes = {
  queryString: Proptypes.string.isRequired,
  errorMessage: Proptypes.string.isRequired,
  handleInputChange: Proptypes.func.isRequired,
  fetchNewsArticles: Proptypes.func.isRequired,
  handleKeyPress: Proptypes.func.isRequired,
};

export default Landing;
