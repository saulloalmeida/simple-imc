import React from 'react'
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function PesoBox({peso, handleClick}) {
  return (
    <Flex direction={"column"} w={"xs"} h={"3xs"} align="center" justify="space-between" p={"8"} bg={"gray.700"} boxShadow={"dark-lg"} rounded={"3xl"} mb={"10"}>
    <Stack direction={"row"}>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(-0.5) }}>
        <Icon as={FiChevronLeft} w={20} h={20} color='gray.50' />
      </Button>
      <Stack>
        <Text color={"gray.50"} fontSize={"3xl"}>{peso}</Text>
        <Text color={"gray.50"} fontSize={"lg"}>kg</Text>
      </Stack>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(+0.5) }}>
        <Icon as={FiChevronRight} w={20} h={20} color='gray.50' />
      </Button>
    </Stack>

    <Stack direction={"row"}>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(-5) }}>
        <Text color={"gray.50"} fontSize={"lg"}>-5</Text>
      </Button>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(-10) }}>
        <Text color={"gray.50"} fontSize={"lg"}>-10</Text>
      </Button>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(+5) }}>
        <Text color={"gray.50"} fontSize={"lg"}>+5</Text>
      </Button>
      <Button variant={"unstyled"} w={20} h={20} onClick={() => { handleClick(+10) }}>
        <Text color={"gray.50"} fontSize={"lg"}>+10</Text>
      </Button>
    </Stack>
  </Flex>
  )
}
