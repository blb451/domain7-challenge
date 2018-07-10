// Modules
import React from 'react';

// Components
import Button from 'components/ui/Button';

// Don't render a link to a non-existent page
const validatePageNumber = (pageNumber, pageSize, totalResults) =>
  pageNumber >= 1 && pageNumber * pageSize <= totalResults;

const PageChanger = ({
  pageNumber, setPage, pageSize, totalResults,
}) =>
  validatePageNumber(pageNumber, pageSize, totalResults) && (
    <Button onClick={() => setPage(pageNumber)}>{pageNumber}</Button>
  );

export default PageChanger;
