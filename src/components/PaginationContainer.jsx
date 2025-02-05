import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

function PaginationContainer() {
    const { meta } = useLoaderData()
    const { pageCount, page } = meta.pagination
    const { search, pathname } = useLocation()
    const navigate = useNavigate()

    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

    const handlePageChange = (pageNumber) => {
        // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const searchParams = new URLSearchParams(search)
        searchParams.set("page", pageNumber)
        // e.g. /products?page=2
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    if (pageCount === 1) return null

    return (
        <div className='mt-16 flex justify-end'>
            <div className="join">
                <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
                    let prev = page - 1
                    if (prev < 1) prev = pageCount
                    handlePageChange(prev)
                }}>Previous</button>
                {pages.map((pageNumber) => (
                    <button className={`btn btn-xs sm:btn-md border-none join-item ${page === pageNumber ? "btn-active" : ""}`} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
                <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
                    let next = page + 1
                    if (next > pageCount) next = 1
                    handlePageChange(next)
                }}>Next</button>
            </div>
        </div>
    )
}

export default PaginationContainer