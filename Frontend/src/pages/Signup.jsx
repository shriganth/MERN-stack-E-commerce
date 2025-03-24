import { Container, Box, VStack, Stack, FormControl, FormLabel, Input, Button, ButtonGroup } from "@chakra-ui/react";

const Signup = () => {

    return (
        <>
            <Box width={"-moz-fit-content"} height={"-moz-max-content"} border={"1px"} borderColor={"whiteAlpha.300"} borderRadius={"20px"} padding={"40px"}>
                <VStack>
                    <FormControl isRequired width={"300px"}>
                        <FormLabel marginTop={"4px"}>Username</FormLabel>
                        <Input placeholder='Username' marginY={"4px"} />
                        <FormLabel marginTop={"4px"}>Password</FormLabel>
                        <Input placeholder='Password' marginY={"4px"} />
                        <FormLabel marginTop={"4px"}>Re-type Password</FormLabel>
                        <Input placeholder='Password' marginY={"4px"} />
                        <ButtonGroup display={"flex"}  marginTop={"4px"} justifyContent={"center"}>
                            <Button>Signup</Button>
                        </ButtonGroup>
                    </FormControl>
                </VStack>
            </Box>
        </>
    );

};

export default Signup;