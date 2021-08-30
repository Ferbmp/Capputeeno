import React from "react";
import { Container, Options, SelectorContainer } from "./style";

export const Filters = () => {
   return (
      <Container>
         <Options>
            <h1>Todos Os Produtos</h1>
            <h1>Camisetas</h1>
            <h1>Canecas</h1>
         </Options>
         <SelectorContainer>
            <label htmlFor='groupBy'>Organizar por:</label>
            <select name='groupBy' id='groupBy'>
               <option value='Novidades'>Novidades</option>
               <option value='Preço: Maior-menor'>Preço: Maior-menor</option>
               <option value='Preço: Menor-maior'>Preço: Menor-maior</option>
               <option value='Mais vendidos'>Mais vendidos</option>
            </select>
         </SelectorContainer>
      </Container>
   );
};
