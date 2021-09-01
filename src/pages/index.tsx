import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import { Filters } from "../components/CategoriesFilter/component";
import { Status } from "../components/FetchStatus/component";
import { Pagination } from "../components/Pagination/component";
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
      _allProductsMeta {
         count
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
   if (loading) {
      return (
         <>
            <Status error={false} />
         </>
      );
   }

   if (error) {
      <Status error={true} />;
   }

   const { allProducts, _allProductsMeta } = data || [];

   const { count } = _allProductsMeta;

   const handlePagination = (number: number) => {
      setPage(number);
      fetchMore({
         variables: { page: page },
         updateQuery: ({ fetchMoreResult }) => {
            return fetchMoreResult;
         },
      });
   };

   return (
      <>
         <Head>
            <title>Home | Caputeeno</title>
         </Head>
         <Container>
            <Filters />
            <Pagination
               paginate={handlePagination}
               totalPosts={count}
               postsPerPage={12}
               page={page}
               setPage={setPage}
            />
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
