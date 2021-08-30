import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import { Filters } from "../components/CategoriesFilter/component";
import { ProductCard } from "../components/ProductCard/component";
import { Container, ProductsContainer } from "../styles/home";

const GET_PRODUCTS_QUERY = gql`
   query Products($page: Int) {
      allProducts(page: $page, perPage: 12) {
         id
         name
         image_url
         price_in_cents
      }
   }
`;

interface Product {
   __typename: string;
   id: string;
   name: string;
   image_url: string;
   price_in_cents: number;
}

const Home: NextPage = () => {
   const [page, setPage] = React.useState(1);

   const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS_QUERY, {
      variables: {
         page: page,
      },
   });

   const { allProducts } = data || {};

   function updatePage() {
      setPage(page + 1);

      fetchMore({
         variables: { page: page },
         updateQuery: ({ fetchMoreResult }) => {
            return fetchMoreResult;
         },
      });
   }

   console.log(allProducts);

   return (
      <>
         <Head>
            <title>Home | Caputeeno</title>
         </Head>
         <Container>
            <Filters />
            <ProductsContainer>
               {allProducts?.map((product: Product) => (
                  <>
                     <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image_url}
                        priceInCents={product.price_in_cents}
                     />
                  </>
               ))}
            </ProductsContainer>
         </Container>
      </>
   );
};

export default Home;
