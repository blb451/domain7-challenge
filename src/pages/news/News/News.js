// Modules
import React, { Component } from 'react';
import axios from 'axios';

// Components
import SearchField from 'components/ui/SearchField';
import SelectInput from 'components/ui/SelectInput';
import Logo from 'components/static/Logo';
import Background from 'components/static/Background';
import Article from '../Article';
import Pagination from '../Pagination';
import Landing from '../Landing';

// Styles
import { InputWrapper, SearchFieldWrapper, ArticleWrapper } from './styles';

// API
const API_KEY = process.env.NEWS_API_KEY;
const API_URL = 'https://newsapi.org/v2/everything';
const API_QUOTE_ERROR = 'For an exact search, all quotations must have both an opening and a close.';
const API_RESULTS_ERROR = 'Sorry, no results found.';

const sortByOptions = [
  { value: 'publishedAt', label: 'Date Published' },
  { value: 'relevancy', label: 'Relevance' },
  { value: 'popularity', label: 'Popularity' },
];

class News extends Component {
  state = {
    queryString: '',
    currentPage: 1,
    pageSize: 10,
    totalResults: 0,
    errorMessage: '',
    sortBy: 'publishedAt',
    articles: [],
  };

  setPage = (newPage) => {
    this.setState({ currentPage: newPage }, () => {
      this.fetchNewsArticles();
      window.scrollTo(0, 0);
    });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ queryString: value });
  };

  clearSearch = () =>
    this.setState({
      queryString: '',
      articles: [],
      currentPage: 1,
      totalResults: 0,
      errorMessage: '',
    });

  handleSelectChange = value => this.setState({ sortBy: value }, () => this.fetchNewsArticles());

  handleKeyPress = ({ key }) => key === 'Enter' && this.fetchNewsArticles();

  handleFetchSuccess = ({ data: { articles, totalResults } }) =>
    this.setState({
      articles,
      totalResults,
      // If no articles are found, set an error message
      errorMessage: articles.length ? '' : API_RESULTS_ERROR,
    });

  handleFetchFailure = ({ response }) => {
    const { queryString } = this.state;
    // Check for unclosed quotes
    const unmatchedQuotes = (queryString.match(/"/g) || []).length % 2 !== 0;
    const message = unmatchedQuotes ? API_QUOTE_ERROR : response.data.message;
    this.setState({ errorMessage: message });
  }

  fetchNewsArticles = () => {
    const {
      queryString, currentPage, pageSize, sortBy,
    } = this.state;

    if (queryString.trim()) {
      // Sanitize special characters
      const sanitizedQuery = encodeURIComponent(queryString);
      axios
        .get(`${API_URL}?q=${sanitizedQuery}&page=${currentPage}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${API_KEY}`)
        .then(this.handleFetchSuccess)
        .catch(this.handleFetchFailure);
    }
  };

  renderArticles = () =>
    this.state.articles.map(article => <Article key={article.url} {...article} />);

  render() {
    const {
      articles,
      sortBy,
      queryString,
      currentPage,
      totalResults,
      errorMessage,
      pageSize,
    } = this.state;

    return !articles.length || errorMessage ? (
      <Background>
        <Landing
          queryString={queryString}
          handleInputChange={this.handleInputChange}
          fetchNewsArticles={this.fetchNewsArticles}
          errorMessage={errorMessage}
          handleKeyPress={this.handleKeyPress}
        />
      </Background>
    ) : (
      <Background>
        <Logo onClick={this.clearSearch} interactive />
        <InputWrapper>
          <SearchFieldWrapper>
            <SearchField
              value={queryString}
              onChange={this.handleInputChange}
              onClick={this.fetchNewsArticles}
              onKeyPress={this.handleKeyPress}
              buttonText="🔍"
            />
          </SearchFieldWrapper>
          <SelectInput
            label="Sort by "
            value={sortBy}
            onChange={this.handleSelectChange}
            options={sortByOptions}
          />
        </InputWrapper>
        <ArticleWrapper>{this.renderArticles()}</ArticleWrapper>
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          pageSize={pageSize}
          setPage={this.setPage}
        />
      </Background>
    );
  }
}

export default News;
