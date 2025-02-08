import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

function ComplexPaginationContainer() {
    const { meta } = useLoaderData()
    const { pageCount, page } = meta.pagination
    const { search, pathname } = useLocation()
    const navigate = useNavigate()

    const handlePageChange = (pageNumber) => {
        // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const searchParams = new URLSearchParams(search)
        searchParams.set("page", pageNumber)
        // e.g. /products?page=2
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    const addPageButton = ({ pageNumber, activeClass }) => {
        return (
            <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ? "btn-active" : ""}`}
            >
                {pageNumber}
            </button>
        )
    }

    const renderPageButton = () => {
        const pageButtons = []
        // First page
        pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))
        // Dots
        if (page > 2) {
            pageButtons.push(<button className="btn btn-xs sm:btn-md join-item" key="dots-1">...</button>)
        }
        // Active page
        if (page !== 1 && page !== pageCount) {
            pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }))
        }
        // Dots
        if (page < pageCount - 1) {
            pageButtons.push(<button className="btn btn-xs sm:btn-md join-item" key="dots-2">...</button>)
        }
        // Last page
        pageButtons.push(addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }))
        return pageButtons
    }

    if (pageCount < 2) return null

    return (
        <div className='mt-16 flex justify-end'>
            <div className="join">
                <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
                    let prev = page - 1
                    if (prev < 1) prev = pageCount
                    handlePageChange(prev)
                }}>Previous</button>
                {renderPageButton()}
                <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
                    let next = page + 1
                    if (next > pageCount) next = 1
                    handlePageChange(next)
                }}>Next</button>
            </div>
        </div>
    )
}

export default ComplexPaginationContainer