import Link from "next/link";
import { formatterForCents } from "../../services/number-formatter";
import {
   Container,
   ProductName,
   ProductPrice,
   Content,
   InfoContainer,
} from "./style";

interface ProductCardProps {
   name: string;
   image: string;
   priceInCents: number;
   id: string;
}

export const ProductCard = ({
   name,
   image,
   priceInCents,
   id,
}: ProductCardProps) => {
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
                     <ProductPrice>
                        {formatterForCents(priceInCents)}
                     </ProductPrice>
                  </InfoContainer>
               </Content>
            </Link>
         </Container>
      </>
   );
};
