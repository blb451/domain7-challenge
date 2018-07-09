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

  handleSelectChange = value => this.setState({ sortBy: value }, () => this.fetchNewsArticles());

  handleFetchSuccess = ({ data: { articles, totalResults } }) =>
    this.setState({ articles, totalResults, errorMessage: '' });

  handleFetchFailure = ({ response }) => this.setState({ errorMessage: response.data.message });

  fetchNewsArticles = () => {
    const {
      queryString, currentPage, pageSize, sortBy,
    } = this.state;

    axios
      .get(`${API_URL}?q=${queryString}&page=${currentPage}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${API_KEY}`)
      .then(results => this.handleFetchSuccess(results))
      .catch(error => this.handleFetchFailure(error));
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
    return !articles.length ? (
      <Background>
        <Landing
          queryString={queryString}
          handleInputChange={this.handleInputChange}
          fetchNewsArticles={this.fetchNewsArticles}
          errorMessage={errorMessage}
        />
      </Background>
    ) : (
      <Background>
        <Logo />
        <InputWrapper>
          <SearchFieldWrapper>
            <SearchField
              value={queryString}
              onChange={this.handleInputChange}
              onClick={this.fetchNewsArticles}
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
