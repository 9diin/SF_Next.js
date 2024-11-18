import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui";

function PaginationFooter({ totalPages, currentPage, handlePage }) {
    const renderPaginationItems = () => {
        const visiblePages = 5;
        const pages = [...Array(totalPages).keys()].map((i) => i + 1);
        const pageNumbers = [];

        if (currentPage <= 3) {
            pageNumbers.push(...pages.slice(0, visiblePages));
            if (totalPages > visiblePages) pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            pageNumbers.push(1);
            pageNumbers.push(...pages.slice(totalPages - visiblePages));
        } else {
            pageNumbers.push(1, currentPage - 1, currentPage, currentPage + 1, totalPages);
        }

        return pageNumbers;
    };

    const visiblePages = renderPaginationItems();

    const onPrev = () => {
        if (currentPage > 1) handlePage(currentPage - 1);
    };

    const onNext = () => {
        if (currentPage < totalPages) handlePage(currentPage + 1);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={onPrev} disabled={currentPage <= 1} />
                </PaginationItem>

                {visiblePages.map((page, index) => {
                    if (page === "...") {
                        return (
                            <PaginationItem key={`ellipsis-${index}`}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationItem key={`page-${page}`}>
                            <PaginationLink onClick={() => handlePage(page)} isActive={page === currentPage}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext onClick={onNext} disabled={currentPage === totalPages} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export { PaginationFooter };
