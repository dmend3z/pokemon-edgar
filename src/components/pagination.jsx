const Pagination = (props) => {
    const { actualPage, totalPages } = props;

    return (
        <div>
            {actualPage} / {totalPages}
        </div>
    );
}

export default Pagination;
