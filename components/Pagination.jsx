import { useState } from "react";
import chunk from "lodash/chunk";

export const PER_PAGE = 12;
// as a convention, we name constants as UPPER_CASE

const Pagination = (props) => {
  const { makerDirectory, onChange = () => {} } = props;
  // When parent doesn't provide onChange function, default it to
  // an empty function that does nothing: onChange = () => {}
  // we dont want our Pagination to error just because
  // of an irresponsible parent :)

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = chunk(makerDirectory, PER_PAGE).length;

  // <React.Fragment /> is an empty fragment

  return totalPages === 1 ? (
    <React.Fragment />
  ) : (
    <div className="py-12">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {Array.from({ length: totalPages }).map((value, index) => {
            const page = index + 1;
            // index starts from 0, so we + 1
            let selected = null;
            if (page === currentPage) {
              selected = "font-bold text-dark";
            } else {
              selected = "text-lightgray";
            }
            return (
              <li key={page}>
                <button
                  aria-label="Next Page"
                  onClick={() => {
                    setCurrentPage(page);
                    onChange(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`${selected} text-base font-regular flex w-4 h-8 mr-6 p-0 relative items-center justify-center leading-tight relative`}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
