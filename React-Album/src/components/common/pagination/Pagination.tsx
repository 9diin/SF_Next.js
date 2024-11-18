import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui";
import { useEffect, useState } from "react";

interface Props {
    totalPages: number;
    currentPage: number;
    handlePage: (page: number) => void; // 페이지 변경 시 호출될 함수
}

function PaginationFooter({ totalPages, currentPage, handlePage }: Props) {
    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        setPages([...Array.from({ length: totalPages }, (_, idx) => idx + 1)]);
    }, [totalPages]);

    const renderPaginationItems = () => {
        const visiblePages = 5; // 표시할 페이지의 개수 (예: 양쪽 끝 + 현재 페이지 근처)
        const pageNumbers: number[] = [];

        /** 페이지가 적으면 모두 표시 */
        if (totalPages <= visiblePages) {
            return pages;
        } else {
            /** 보여질 페이지가 많은 경우에는 특정 범위만 표시 */
            if (currentPage <= 3) {
                /** 처음 3페이지 정도는 Ellipsis 없이 표시*/
                pageNumbers.push(...pages.slice(0, visiblePages)); // 배열의 첫 번째 요소부터, visiblePages 요소까지 잘라냄

                if (totalPages > visiblePages) {
                    pageNumbers.push(totalPages); // 마지막 페이지
                }
            } else if (currentPage >= totalPages - 3) {
                /** 마지막 3페이지 정도는 Ellipsis 없이 표시
                 * slice(start): start 인덱스부터 배열의 끝까지 잘라냅니다.
                 * slice(start, end): start 인덱스부터 end 인덱스 직전까지 잘라냅니다. 즉, end는 포함되지 않습니다.
                 */
                pageNumbers.push(1); // 첫 번째 페이지
                pageNumbers.push(...pages.slice(totalPages - visiblePages)); // 마지막 페이지 근처
            } else {
                // 중간에 있을 때는 앞뒤 페이지만 표시하고 Ellipsis 추가
                pageNumbers.push(1); // 첫 번째 페이지
                pageNumbers.push(currentPage - 1); // 이전 페이지
                pageNumbers.push(currentPage); // 현재 페이지
                pageNumbers.push(currentPage + 1); // 다음 페이지
                pageNumbers.push(totalPages); // 마지막 페이지
            }
        }

        // 중복 제거 (예: 같은 페이지 번호가 두 번 이상 나오지 않게)
        const uniquePageNumbers = Array.from(new Set(pageNumbers));

        // Ellipsis를 추가할 구간을 넣기 위한 작업
        let finalPages: (number | string)[] = [];
        uniquePageNumbers.forEach((page, index, arr) => {
            finalPages.push(page);
            // Ellipsis 처리: 페이지 번호가 연속되지 않으면 '...' 추가
            if (index < arr.length - 1 && arr[index + 1] > page + 1) {
                finalPages.push("...");
            }
        });

        return finalPages;
    };

    const visiblePages = renderPaginationItems();

    // 디버깅: 현재 페이지 값과 totalPages, visiblePages 출력
    console.log("totalPages:", totalPages);
    console.log("currentPage:", currentPage);
    console.log("visiblePages:", visiblePages);

    const onPrev = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // disabled일 때 클릭 방지
        if (currentPage > 1) handlePage(currentPage - 1);
    };

    const onNext = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // disabled일 때 클릭 방지
        if (currentPage < totalPages) handlePage(currentPage + 1);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={onPrev} disabled={currentPage <= 1} />
                </PaginationItem>

                {visiblePages.map((page, index) => {
                    // Ellipsis일 경우에는 PaginationEllipsis 렌더링
                    if (page === "...") {
                        return (
                            <PaginationItem key={`ellipsis-${index}`}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    // 페이지 번호가 숫자일 경우 PaginationLink 렌더링
                    return (
                        <PaginationItem key={`page-${page}`}>
                            <PaginationLink href="#" isActive={page === currentPage} onClick={() => handlePage(Number(page))}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext href="#" onClick={onNext} disabled={currentPage === totalPages} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export { PaginationFooter };
