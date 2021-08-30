import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   background-color: #fff;
   height: 80px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: var(--padding);
`;

export const Content = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   input {
      width: 380px;
      height: 38px;

      background: #f3f5f6;

      border: none;
      outline: none;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-right: 0.5rem;

      font-size: 0.8rem;
   }
`;
