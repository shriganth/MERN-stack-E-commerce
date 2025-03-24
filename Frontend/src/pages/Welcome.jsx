import { Container, Box, VStack, Stack, FormControl, FormLabel, Input, Button, ButtonGroup } from "@chakra-ui/react";
import Signup from "./Signup";
import Signin from "./Signin";
import { useState } from "react";

const Welcome = () => {

    const [page, setPage] = useState("signup");

    return (
        <>
            <Container w={"100vw"} h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <VStack>
                    <Stack spacing={"8px"} direction={"row"} justifyContent={"center"} marginY={"8px"} >
                            <Button border={"1px"} borderColor={"whiteAlpha.200"} borderRadius={"50px"} onClick={() => {setPage("signup")}} >Signup</Button>
                            <Button border={"1px"} borderColor={"whiteAlpha.200"} borderRadius={"50px"} onClick={() => {setPage("signin")}} >Signin</Button>
                    </Stack>
                    
                    {page === "signup" && <Signup/>}
                    {page === "signin" && <Signin/>}

                </VStack>
            </Container>
        </>
    );
}

export default Welcome;