import Link from "next/link";
import {
   Container,
   ProductName,
   ProductPrice,
   Content,
   InfoContainer,
} from "./style";

export const ProductCard = ({ name, image, priceInCents, id }) => {
   const price = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(priceInCents / 100);

   console.log("price", price);
   return (
      <>
         <Container>
            <Link href={`/products/${id}`} passHref={true}>
               <Content>
                  <img src={image} alt={name} />
                  <InfoContainer>
                     <ProductName>
                        <h1>{name}</h1>
                     </ProductName>
                     <ProductPrice>{price}</ProductPrice>
                  </InfoContainer>
               </Content>
            </Link>
         </Container>
      </>
   );
};
