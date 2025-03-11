import { useState } from "react";
import { VStack, Box, Container, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/Product";


const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const { createProduct } = useProductStore();

    const toast = useToast();

    const handleProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        console.log(success);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true
            });
        }

        setNewProduct({name: "", price: "", image: ""});
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack borderStyle={""} borderWidth={1} width={"auto"} borderColor={"black"} paddingY={"50px"} >
                <Heading fontSize={"24px"} pb={"30px"} >Create New Product</Heading>

                <Box w={"md"} px={"20px"} >
                    <VStack>
                        <Input 
                        placeholder="Product name" 
                        name="name" 
                        value={newProduct.name} 
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />

                        <Input 
                        placeholder="Product price" 
                        name="price" 
                        value={newProduct.price} 
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />

                        <Input 
                        placeholder="Product image" 
                        name="image" 
                        value={newProduct.image} 
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} />

                        <Button colorScheme="blue" onClick={handleProduct} >Add Product</Button>
 
                    </VStack>
                </Box>

            </VStack>
        </Container>
    );
};


export default CreatePage;