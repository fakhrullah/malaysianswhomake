import chunk from "lodash/chunk";

export const PER_PAGE = 12;

const Pagination = (props) => {
  const { currentPage = 0, makerDirectory, onChange = () => {} } = props;
  // When parent doesn't provide onChange function, default it to
  // an empty function: onChange = () => {}
  // we dont want our Pagination to error just because
  // of an irresponsible parent :)

  const totalPages = chunk(makerDirectory, PER_PAGE).length;

  return totalPages === 1 ? (
    <React.Fragment />
  ) : (
    <div className="py-12">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap sm:justify-center">
          {Array.from({ length: totalPages }).map((value, page) => (
            <li key={page}>
              <button
                aria-label="Next Page"
                onClick={() => {
                  onChange(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={[
                  page === currentPage
                    ? "font-bold text-dark"
                    : "text-lightgray",
                  `text-base font-regular flex w-4 h-8 mr-6 p-0 relative items-center justify-center leading-tight relative`,
                ].join(" ")}
              >
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
