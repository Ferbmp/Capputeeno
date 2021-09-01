import React from "react";
import Loading from "./Loading/component";

export const Status = ({ error }) => {
   return (
      <>
         {!error ? (
            <Loading />
         ) : (
            <h1>
               Ocorreu um erro ao carregar os produtos. Por favor tente
               novamente
            </h1>
         )}
      </>
   );
};
