import { Button, Flex } from '@chakra-ui/react'

export default function CalcButton({calc}) {
    return (
        <Flex direction={"column"} align={"center"} justify={"stretch"} w={"xs"} h={"12"} bg={"gray.700"} boxShadow={"dark-lg"} rounded={"3xl"}>
            <Button color={"gray.50"} variant={"unstyled"} onClick={calc}>Calcular</Button>
        </Flex>
    )
}
