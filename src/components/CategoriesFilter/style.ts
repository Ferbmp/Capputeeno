import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   margin: 1rem 0px;
   display: flex;
   justify-content: space-between;

   align-items: center;
`;

export const Options = styled.div`
   display: flex;

   align-items: center;
   h1 {
      font-size: 1rem;
      margin: 0px 0.5rem;
      color: var(--text-dark);
      font-weight: 500;
      &:first-child {
         border-bottom: 2px solid var(--orange);
      }
   }
`;
