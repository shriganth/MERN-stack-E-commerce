import { Box, Image, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { BsCartPlusFill, BsCartCheckFill, BsCartDashFill } from "react-icons/bs";

const CartProductCard = ({cartProduct}) => {
    return (
        <>
        <Box maxW={"md"} borderRadius={"10px"} bg={"dark"} boxShadow={"2xl"} mt={"40px"} >
            <Image src={cartProduct.image} w={"full"} h={"200px"} display={"flex"} alignItems={"center"} borderTopRadius={"10px"} />
            <Heading fontSize={"18px"} fontWeight={"medium"} px={"10px"} ms={"8px"} my={"8px"} >{cartProduct.name}</Heading>
            <Text ms={"8px"} mb={"8px"} px={"10px"} >${cartProduct.price}</Text>
            <HStack float={"right"} mr={"8px"} mb={"8px"}>
                {/* <Button px={"20px"} h={"30px"} onClick={onOpen} ><EditIcon/></Button> */}
                {/* <Button px={"20px"} h={"30px"} onClick={() => handleDeleteProduct(product._id)} ><DeleteIcon/></Button> */}
                {/* <Button px={"20px"} h={"30px"} onClick={() => handleCartProduct()} ><BsCartPlusFill/></Button> */}
            </HStack>
        </Box>
        </>
    );
};

export default CartProductCard;