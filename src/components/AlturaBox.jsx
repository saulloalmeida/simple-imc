import React from 'react'
import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react"

export default function AlturaBox({altura, handleOnChange}) {
    return (
        <Box w={"20%"} h={"20%"} align="center" justify="center" bg={"gray.700"} p={"8"} boxShadow={"dark-lg"} rounded={"3xl"} mb={"10"}>
            <Text color={"gray.50"} fontSize={"3xl"}>{altura}</Text>
            <Text color={"gray.50"} fontSize={"lg"}>cm</Text>
            <Slider
                defaultValue={altura}
                mt={"10"}
                aria-label='slider-ex-6'
                onChange={handleOnChange}
                max={200}
            >
                <SliderTrack h={"5"} bg={"whiteAlpha.900"}>
                    <SliderFilledTrack bg={"whiteAlpha.50"} />
                </SliderTrack>
                <SliderThumb bg={"green.300"} h={"10"} w={"10"} />
            </Slider>
        </Box>
    )
}
