// This file contains tests for the 'news' page
// Modules
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

// Components
import News from 'pages/news/News';
import Article from 'pages/news/Article';
import Landing from 'pages/news/Landing';
import Pagination from 'pages/news/Pagination';

afterEach(cleanup);

test('News renders correctly', () => {
  const { container } = render(<News />);

  expect(container.firstChild).toMatchSnapshot();
});

test('Article renders correctly', () => {
  const fakeArticle = {
    author: 'Scott Scanlon',
    title: 'Bitcoin Bitcoin Bitcoin BITCOIN!! So Sue Us.',
    description:
      'Crypto Briefing exists to advocate for the safe and responsible integration of blockchain and cryptocurrency into mainstream life. We believe. Our goal is to grow the crypto community – to help new converts understand the basics, and to help more experienced …',
    url: 'https://www.youbrandinc.com/crytocurrency/bitcoin-bitcoin-bitcoin-bitcoin-so-sue-us/',
    urlToImage:
      'https://www.youbrandinc.com/wp-content/uploads/2018/05/Bitcoin-Trademarked-In-The-UK-In-Patent-Troll-Style-Action-1024x538.jpg',
    publishedAt: '2018-05-31T01:03:10Z',
  };
  const { container } = render(<Article {...fakeArticle} />);

  expect(container.firstChild).toMatchSnapshot();
});

test('Landing renders correctly', () => {
  const { container } = render(<Landing
    queryString=""
    handleInputChange={() => {}}
    fetchNewsArticles={() => {}}
    errorMessage=""
    handleKeyPress={() => {}}
  />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Pagination renders correctly', () => {
  const { container } =
    render(<Pagination currentPage={1} totalResults={10} pageSize={10} setPage={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Pagination renders next button when there's a second page", () => {
  const { getByText } =
    render(<Pagination currentPage={1} totalResults={20} pageSize={10} setPage={() => {}} />);
  const nextButton = getByText('Next');
  expect(nextButton).toBeInTheDOM();
});

test("Pagination renders previous button when there's a previous page", () => {
  const { getByText } =
    render(<Pagination currentPage={2} totalResults={20} pageSize={10} setPage={() => {}} />);
  const previousButton = getByText('Previous');
  expect(previousButton).toBeInTheDOM();
});

test("Pagination doesn't render previous button on first page", () => {
  const { queryByText } =
    render(<Pagination currentPage={1} totalResults={10} pageSize={10} setPage={() => {}} />);
  const previousButton = queryByText('Previous');
  expect(previousButton).not.toBeInTheDOM();
});

test("Pagination doesn't render next button on last page", () => {
  const { queryByText } =
    render(<Pagination currentPage={1} totalResults={10} pageSize={10} setPage={() => {}} />);
  const nextButton = queryByText('Next');
  expect(nextButton).not.toBeInTheDOM();
});
