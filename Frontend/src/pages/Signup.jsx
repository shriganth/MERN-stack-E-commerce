import { Container, Text, Heading, Box, VStack, Stack, FormControl, FormLabel, Input, Button, ButtonGroup, RadioGroup, Radio, Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { createUserData } from "../store/User";

const Signup = () => {

    const toast = useToast();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [type, setType] = useState();

    const { createUserData } = User();

    const handleSubmit = (e) => {
        if(password.length > 6 && confirmPassword.length > 6 && password === confirmPassword) {
            e.preventdefault();
            const { success, message } = createUserData()
        } else {
            toast({
                title: "Error",
                description: "Password does not match",
                status: "error",
                duration: "3000",
                isClosable: true
            });
        }
    }

    return (
        <Container w={"100vw"} h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <VStack>
                <Box width={"-moz-fit-content"} height={"-moz-max-content"} border={"1px"} borderColor={"whiteAlpha.300"} borderRadius={"20px"} boxShadow={"dark-lg"} >
                    <Heading fontSize={"32px"} textAlign={"center"} marginTop={"20px"} >Sign up</Heading>
                    <VStack padding={"30px"}>

                        <FormControl onSubmit={handleSubmit} isRequired width={"300px"}>

                            <FormLabel marginTop={"4px"}>Username</FormLabel>
                            <Input placeholder='Username' marginY={"4px"} onChange={(e) => setUsername(e.target.value)} />

                            <FormLabel marginTop={"4px"}>Password</FormLabel>
                            <Input type="password" placeholder='Password' marginY={"4px"} onChange={(e) => setPassword(e.target.value)} />

                            <FormLabel marginTop={"4px"}>Re-type Password</FormLabel>
                            <Input type="password" placeholder='Re-type Password' marginY={"4px"} onChange={(e) => setConfirmPassword(e.target.value)} />

                            {/* <FormLabel marginTop={"4px"}>Type</FormLabel>
                            <RadioGroup onChange={(e) => setType(e.target.value)} defaultValue="User" marginTop={"4px"} >
                                <Stack display={"flex"} flexDir={"row"} justifyContent={"center"} spacing={"24px"} >
                                    <Radio value='User'>User</Radio>
                                    <Radio value='Admin'>Admin</Radio>
                                </Stack>
                            </RadioGroup> */}

                            <ButtonGroup display={"flex"}  marginTop={"16px"} marginBottom={"20px"} justifyContent={"center"}>
                                <Button type="submit" border={"1px"} borderColor={"whiteAlpha.200"} borderRadius={"50px"} width={"120px"} >Register</Button>
                            </ButtonGroup>

                            <Text textAlign={"center"} marginTop={"12px"}>Already, you have an account?</Text>
                            <ButtonGroup display={"flex"}  marginTop={"8px"} justifyContent={"center"}>
                                <Link to={"/signin"}><Button border={"1px"} borderColor={"whiteAlpha.200"} borderRadius={"50px"} width={"120px"} >Login</Button></Link>
                            </ButtonGroup>

                        </FormControl>

                    </VStack>
                </Box> 
            </VStack>
        </Container>
    );

};

export default Signup;