import styled, { keyframes } from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   h1 {
      color: #de3838;
   }
`;

export const SpinnerAnimation = keyframes` 
100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
   width: 10em;
   height: 10em;
   border-top: 1em solid var(--text-dark);
   border-right: 1em solid transparent;
   border-radius: 50%;
   margin: auto;
   animation: ${SpinnerAnimation} 0.6s linear infinite;
`;

export const Head = styled.div`
   width: 1em;
   height: 1em;
   background-color: var(--text-dark);
   border-radius: 50%;
   margin-left: 8.5em;
   margin-top: 0.5em;
`;
