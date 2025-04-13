import classNames from 'classnames';
import { useMemo } from 'react';

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pagePerRow?: number;
}

const ABBREVIATION_PAGE_COUNT = 2;

function Pagination({ totalPages, currentPage, onPageChange, pagePerRow = 15, ...props }: PaginationProps) {
  const isPrevPagesAbbreviated = currentPage > pagePerRow / 2;
  const isNextPagesAbbreviated = currentPage <= totalPages - pagePerRow / 2;

  const visiblePages = useMemo(() => {
    const prevPageCount = (() => {
      if (!isNextPagesAbbreviated) {
        return pagePerRow - (totalPages - currentPage + 3);
      }
      if (isPrevPagesAbbreviated) {
        return Math.floor(pagePerRow / 2) - ABBREVIATION_PAGE_COUNT;
      }
      return Math.floor(pagePerRow / 2);
    })();
    const nextPageCount = (() => {
      if (!isPrevPagesAbbreviated) {
        return pagePerRow - (currentPage + 2);
      }
      if (isNextPagesAbbreviated) {
        return Math.floor(pagePerRow / 2) - ABBREVIATION_PAGE_COUNT;
      }
      return Math.floor(pagePerRow / 2);
    })();

    const startPage = Math.max(1, currentPage - prevPageCount);
    const endPage = Math.min(totalPages, currentPage + nextPageCount);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [currentPage, totalPages, isNextPagesAbbreviated, isPrevPagesAbbreviated, pagePerRow]);

  return (
    <div className="krds-pagination" role="navigation" {...props}>
      <span
        className={classNames('page-navi prev', {
          disabled: currentPage === 1,
        })}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        이전
      </span>
      <div className="page-links">
        {isPrevPagesAbbreviated && (
          <>
            <a className="page-link" href="#" onClick={() => onPageChange(1)}>
              1
            </a>
            <span className="page-link link-dot"></span>
          </>
        )}
        {visiblePages.map((page) => (
          <a
            className={classNames('page-link', {
              active: page === currentPage,
            })}
            href="#"
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page === currentPage && <span className="sr-only">현재 페이지</span>}
            {page}
          </a>
        ))}
        {isNextPagesAbbreviated && (
          <>
            <span className="page-link link-dot"></span>
            <a className="page-link" href="#" onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </a>
          </>
        )}
      </div>
      <span
        className={classNames('page-navi next', {
          disabled: currentPage === totalPages,
        })}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        다음
      </span>
    </div>
  );
}

export default Pagination;
