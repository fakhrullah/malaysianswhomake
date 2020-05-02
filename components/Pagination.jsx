const Pagination = ({ numberOfPages, setPagination, pagination }) => {
    let pages = Array.from(Array(numberOfPages).keys())

    return (
      <div className="py-12">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {
              pages.map(page => {
                  let selected = null;
                  if (pagination === page) {
                    selected = "font-bold text-dark"
                  } else {
                    selected = "text-lightgray"
                  }
                  return (
                    <li key={page}>
                        <button aria-label="Next Page" 
                        onClick={() => { setPagination(page); 
                          window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                        className={`${selected} text-base font-regular flex w-4 h-8 mr-6 p-0 relative items-center justify-center leading-tight relative`}>
                            {page + 1}
                        </button>
                    </li>
                  )
              })
            }
          </ul>
        </nav>
      </div>
    )
};

export default Pagination;