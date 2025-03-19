import { Box, Image, Heading, Text, HStack, Button, useToast, useDisclosure, VStack, Input } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/Product";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { BsCartPlusFill, BsCartCheckFill, BsCartDashFill } from "react-icons/bs";
import { cartProductStore } from "../store/CartProduct";


const ProductCard = ({ product }) => {
    
    const [cartProduct, setCartProduct] = useState({
        name: "",
        price: "",
        image: ""
    });
    const [ updatedProduct, setUpdatedProduct ] = useState(product);
    const { deleteProduct, updateProduct } = useProductStore();
    const { createCartProduct, deleteCartProduct } = cartProductStore();
    const toast = useToast();
    const { onOpen, onClose, isOpen } = useDisclosure();

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: "3000",
                isClosable: true
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: "3000",
                isClosable: true
            });
        }
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        console.log(success);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: "3000",
                isClosable: true
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: "3000",
                isClosable: true
            });
        }
    };

    const handleCartProduct = async () => {
        const newItem = {
            name: product.name,
            price: product.price,
            image: product.image
        };
        // setCartProduct((prev) => [...prev, newItem]);
        const { success, message } = await createCartProduct(newItem);
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

        setCartProduct({name: "", price: "", image: ""});
    };

    return (
        <>
        <Box maxW={"md"} borderRadius={"10px"} bg={"dark"} boxShadow={"2xl"} mt={"40px"} >
            <Image src={product.image} w={"full"} h={"200px"} display={"flex"} alignItems={"center"} borderTopRadius={"10px"} />
            <Heading fontSize={"18px"} fontWeight={"medium"} px={"10px"} ms={"8px"} my={"8px"} >{product.name}</Heading>
            <Text ms={"8px"} mb={"8px"} px={"10px"} >${product.price}</Text>
            <HStack float={"right"} mr={"8px"} mb={"8px"}>
                {/* <Button px={"20px"} h={"30px"} onClick={onOpen} ><EditIcon/></Button> */}
                {/* <Button px={"20px"} h={"30px"} onClick={() => handleDeleteProduct(product._id)} ><DeleteIcon/></Button> */}
                <Button px={"20px"} h={"30px"} onClick={() => handleCartProduct()} ><BsCartPlusFill/></Button>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />

            <Box w={"md"} px={"20px"} >
                <VStack>
                    <Input 
                    placeholder="Product name" 
                    name="name" 
                    value={updatedProduct.name} 
                    onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
            
                    <Input 
                    placeholder="Product price" 
                    name="price" 
                    value={updatedProduct.price} 
                    onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})} />
            
                    <Input 
                    placeholder="Product image" 
                    name="image" 
                    value={updatedProduct.image} 
                    onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})} />
             
                </VStack>
            </Box>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                Update
                </Button>
                <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    );
};

export default ProductCard;