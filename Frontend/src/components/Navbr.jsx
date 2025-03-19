import { HStack, Container, Flex, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AddIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    
    const bg = useColorModeValue("blue.900", "white");
    const iconColor = useColorModeValue("white", "blue.900");
    const color = useColorModeValue("blue.900", "white")

    return (
        <Container maxW={"1000px"} px={4} minW={"800px"} borderRadius={"20px"} h={"auto"} padding={"20px"} >
            <Flex alignItems={"center"} justifyContent={"space-between"} >
                <Text fontSize={"20px"} fontWeight={"bold"} color={color} >
                    <Link to={"/"} >Product store</Link>
                </Text>
                <HStack float={"right"} mr={"20px"} gap={"20px"}>
                    <Link to={"/create"} ><Button bgColor={bg} color={iconColor} ><AddIcon/></Button></Link>
                    <Link to={"/cart"} ><Button bgColor={bg} color={iconColor} ><BsCartFill/></Button></Link>
                    <Button bgColor={bg} color={iconColor} onClick={toggleColorMode} >{colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}</Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;