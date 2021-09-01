import React from "react";
import { Container } from "./style";

interface PaginationProps {
   postsPerPage: number;
   totalPosts: number;
   paginate(number: number): void;
   page: number;
   setPage(number: number): number;
}

export const Pagination = ({
   postsPerPage,
   totalPosts,
   paginate,
   setPage,
   page,
}: PaginationProps) => {
   const pageNumbers = [];
   const allPages = Math.ceil(totalPosts / postsPerPage);

   for (let i = 1; i <= allPages; i++) {
      pageNumbers.push(i);
   }

   return (
      <Container>
         <ul className='pagination'>
            {pageNumbers.map((number) => (
               <li key={number} className='page-item'>
                  <button
                     onClick={() => paginate(number)}
                     className='page-link'
                  >
                     {number}
                  </button>
               </li>
            ))}
         </ul>
         <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <img src='/images/arrowPrev.svg' alt='arrowPrev' />
         </button>
         <button onClick={() => setPage(page + 1)} disabled={page === allPages}>
            <img src='/images/arrowNext.svg' alt='arrowNext' />{" "}
         </button>
      </Container>
   );
};
