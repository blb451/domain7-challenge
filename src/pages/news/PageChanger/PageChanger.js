// Modules
import React from 'react';

// Components
import Button from 'components/ui/Button';

const validatePageNumber = (pageNumber, pageSize, totalResults) =>
  pageNumber >= 1 && pageNumber * pageSize <= totalResults + pageSize;

const PageChanger = ({
  pageNumber, setPage, pageSize, totalResults,
}) =>
  validatePageNumber(pageNumber, pageSize, totalResults) && (
    <Button onClick={() => setPage(pageNumber)}>{pageNumber}</Button>
  );

export default PageChanger;
