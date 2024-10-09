import React from 'react';

// Component for Pagination
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={page === currentPage}
                    style={{ margin: '5px', padding: '5px', backgroundColor: page === currentPage ? 'lightgray' : 'white' }}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};