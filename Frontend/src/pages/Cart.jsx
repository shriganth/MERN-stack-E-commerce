import React, { useEffect } from "react";
import { cartProductStore } from "../store/CartProduct";
import { Container, VStack, SimpleGrid, Heading } from "@chakra-ui/react";
import CartProductCard from "../components/CartProductCard";
import Navbar from "../components/Navbr";

const Cart = () => {

    const { fetchCartProduct, cartProducts } = cartProductStore();
    
    useEffect(() => {
        fetchCartProduct();
    }, [fetchCartProduct]);

    return (
        <>
            <Navbar/>

            <Container maxW={"6xl"}>

                <Heading>Cart </Heading>

                <VStack>
                    <SimpleGrid columns={4} spacing={10} >
                    {cartProducts && cartProducts.length > 0 ? (
                        cartProducts.map((product) => (
                        <CartProductCard key={product._id} cartProduct={product} />
                        ))) : (
                        <p>No cart products found.</p>
                    )}
                    </SimpleGrid>
                </VStack>

            </Container>
        </>
    );
}

export default Cart;