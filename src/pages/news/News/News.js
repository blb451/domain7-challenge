// Modules
import React, { Component, Fragment } from 'react';
import axios from 'axios';

// Components
import SearchField from 'components/ui/SearchField';
import SelectInput from 'components/ui/SelectInput';
import Article from '../Article';
import Pagination from '../Pagination';
import Landing from '../Landing';

// Styles
import { ArticleWrapper } from './styles';

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
    this.setState({ currentPage: newPage }, () => this.fetchNewsArticles());
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ queryString: value });
  };

  handleSelectChange = (event) => {
    const { value } = event.target;
    if (value) {
      this.setState({ sortBy: value }, () => this.fetchNewsArticles());
    }
  };

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

  buildSortOptions = () =>
    sortByOptions.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));

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
      <Landing
        queryString={queryString}
        handleInputChange={this.handleInputChange}
        fetchNewsArticles={this.fetchNewsArticles}
        errorMessage={errorMessage}
      />
    ) : (
      <div style={{ backgroundColor: '#F0F0F0' }}>
        <SearchField
          value={queryString}
          onChange={this.handleInputChange}
          onClick={this.fetchNewsArticles}
          buttonText="SEARCH"
        />
        <SelectInput
          label="Sort by: "
          value={sortBy}
          onChange={this.handleSelectChange}
          options={this.buildSortOptions()}
        />
        <ArticleWrapper>{this.renderArticles()}</ArticleWrapper>
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          pageSize={pageSize}
          setPage={this.setPage}
        />
      </div>
    );
  }
}

export default News;
