const Pagination = (props) => {
  const { actualPage, totalPages } = props;

  return totalPages > 1 ? (
    <div>
      <strong>{actualPage}</strong>
    </div>
  ) : null;
};

export default Pagination;
