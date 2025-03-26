import { Container, Heading, Box, VStack, Stack, FormControl, FormLabel, Input, Button, ButtonGroup, RadioGroup, Radio } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signin = () => {

    return (
        <Container w={"100vw"} h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <VStack>
                <Box width={"-moz-fit-content"} height={"-moz-max-content"} border={"1px"} borderColor={"whiteAlpha.300"} borderRadius={"20px"} boxShadow={"dark-lg"} >
                <Heading fontSize={"32px"} textAlign={"center"} marginTop={"20px"} >Sign up</Heading>
                    <VStack padding={"30px"}>
                        <FormControl isRequired width={"300px"}>
                            <FormLabel marginTop={"4px"}>Username</FormLabel>
                            <Input placeholder='Username' marginY={"4px"} />
                            <FormLabel marginTop={"4px"}>Password</FormLabel>
                            <Input placeholder='Password' marginY={"4px"} />
                            <FormLabel marginTop={"4px"}>Type</FormLabel>
                            <RadioGroup>
                                <Stack marginY={"10px"} display={"flex"} flexDir={"row"} justifyContent={"center"} spacing={"24px"} >
                                    <Radio value='User1'>User</Radio>
                                    <Radio value='Admin'>Admin</Radio>
                                </Stack>
                            </RadioGroup>
                            <ButtonGroup display={"flex"}  marginTop={"4px"} justifyContent={"center"}>
                                <Button border={"1px"} borderColor={"whiteAlpha.200"} borderRadius={"50px"} width={"120px"} >Signin</Button>
                            </ButtonGroup>
                        </FormControl>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );

};

export default Signin;