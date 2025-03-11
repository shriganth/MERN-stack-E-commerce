import React, { useEffect } from "react";
import { useProductStore } from "../store/Product";
import { Container, VStack, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const Home = () => {

    const { fetchProduct, products } = useProductStore();

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return (
        <Container maxW={"6xl"}>

            <VStack>
                <SimpleGrid columns={4} spacing={10} >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>
            </VStack>

        </Container>
    );
};


export default Home;