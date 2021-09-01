import React from "react";
import { Container, Spinner, Head } from "./style";

const Loading = () => {
   return (
      <>
         <Container>
            <Spinner>
               <Head />
            </Spinner>
         </Container>
      </>
   );
};
export default Loading;
