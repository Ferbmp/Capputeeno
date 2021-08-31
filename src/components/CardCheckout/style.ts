import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-width: 736px;
   display: flex;
   flex-direction: row;
   border-radius: 8px;
   background-color: #ffffff;
   margin: 1rem 0px;
`;

export const ImageContainer = styled.div`
   width: 100%;
   max-width: 256px;
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px 0px 0px 8px;
   }
`;

export const ContentContainer = styled.div`
   width: 100%;
   padding: 0.8rem 0.5rem;
   display: flex;
   flex-direction: column;
   h1 {
      font-weight: 300;
      color: var(--text-dark);
      font-size: 1.2rem;
   }
`;
