import { Text } from '@chakra-ui/react'

export default function Mensagem({mensagemText}) {
    return (
        <Text
            bg={"gray.600"}
            color={"gray.50"}
            fontSize={"20"}
            p="6"
            m="6"
        >
            <strong>Resultado</strong>: {mensagemText}</Text>
    )
}
