import {
  Pagination as BPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import {
  useParams,
  useHistory,
  useRouteMatch,
  generatePath,
  Redirect,
} from 'react-router-dom';

const scrollToTop = () => {
  const rect = document.querySelector('.paginationTop').getBoundingClientRect();
  const position = {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
  window.scrollTo(position);
};

const PaginatedView = ({
  renderItem = (x) => x,
  items = [],
  pageSize = 10,
}) => {
  let history = useHistory();
  let { page } = useParams();
  const match = useRouteMatch();

  let currentPage = parseInt(page) || 1;
  const pagesCount = Math.ceil(items.length / pageSize);

  if (!page) {
    return <Redirect to={`${match.url}/1`} />;
  }

  const goToPage = (page) => {
    const path = generatePath(match.path, { page });
    history.push(path);
    scrollToTop();
  };

  const onPageClick = (e, page) => {
    e.preventDefault();
    goToPage(page + 1);
  };

  const onPreviousPageClick = (e) => {
    e.preventDefault();
    goToPage(currentPage - 1);
  };

  const onNextPageClick = (e) => {
    e.preventDefault();
    goToPage(currentPage + 1);
  };

  const onFirstPageClick = (e) => {
    e.preventDefault();
    goToPage(1);
  };

  const onLastPageClick = (e) => {
    e.preventDefault();
    goToPage(pagesCount);
  };

  return (
    <div>
      <div>
        {items
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map(renderItem)}
      </div>
      <BPagination size="md" aria-label="Page navigation example">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink first onClick={onFirstPageClick} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={(e) => onPreviousPageClick(e, currentPage)}
          />
        </PaginationItem>
        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem active={i + 1 === currentPage} key={i}>
            <PaginationLink onClick={(e) => onPageClick(e, i)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === pagesCount}>
          <PaginationLink next onClick={onNextPageClick} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === pagesCount}>
          <PaginationLink last onClick={onLastPageClick} />
        </PaginationItem>
      </BPagination>
    </div>
  );
};

export default PaginatedView;
