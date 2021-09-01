import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   width: 100%;
   justify-content: flex-end;
   align-items: flex-end;
   ul.pagination {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      height: auto;
      list-style: none;
   }
   button {
      width: 32px;
      height: 32px;
      outline: none;
      border: none;
      padding: 4px;
      border-radius: 8px;
      background: #e9e9f0;
      margin: 0px 2px;
      justify-content: center;
      align-items: center;
      display: flex;

      &:active {
         border: 1px solid var(--orange);
      }
   }
`;
