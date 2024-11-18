import { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui";

interface Props {
    totalPages: number;
    currentPage: number;
    handlePage: (page: number) => void; // 페이지 변경 시 호출될 함수
}

function PaginationFooter({ totalPages, currentPage, handlePage }: Props) {
    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < totalPages; i++) {
            arr.push(i);
        }
        setPages(arr);
    }, [totalPages]);

    const renderPaginationItems = () => {
        const visiblePages = 5; // 표시할 페이지의 개수 (예: 양쪽 끝 + 현재 페이지 근처)
        const pageNumbers: number[] = [];

        if (totalPages <= visiblePages) {
            // 페이지가 적으면 그냥 모두 표시
            return pages;
        } else {
            // 페이지가 많을 경우에는 특정 범위만 표시
            if (currentPage <= 3) {
                // 처음 3페이지 정도는 Ellipsis 없이 표시
                pageNumbers.push(...pages.slice(0, visiblePages));
                if (totalPages > visiblePages) {
                    pageNumbers.push(totalPages - 1); // 마지막 페이지
                }
            } else if (currentPage >= totalPages - 3) {
                // 마지막 3페이지 정도는 Ellipsis 없이 표시
                pageNumbers.push(0); // 첫 번째 페이지
                pageNumbers.push(...pages.slice(totalPages - visiblePages));
            } else {
                // 중간에 있을 때는 앞뒤 페이지만 표시하고 Ellipsis 추가
                pageNumbers.push(0); // 첫 번째 페이지
                pageNumbers.push(currentPage - 1); // 이전 페이지
                pageNumbers.push(currentPage); // 현재 페이지
                pageNumbers.push(currentPage + 1); // 다음 페이지
                pageNumbers.push(totalPages - 1); // 마지막 페이지
            }
        }

        // 중복 제거
        const uniquePageNumbers = Array.from(new Set(pageNumbers));

        return uniquePageNumbers;
    };

    const visiblePages = renderPaginationItems();

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 0) handlePage(currentPage - 1);
                        }}
                    />
                </PaginationItem>

                {visiblePages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={page === currentPage}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePage(page);
                            }}
                        >
                            {page + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* Ellipsis 표시 */}
                {totalPages > visiblePages.length && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages - 1) handlePage(currentPage + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export { PaginationFooter };
