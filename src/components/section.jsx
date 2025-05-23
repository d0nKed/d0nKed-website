import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const Section = ({children, top, id}) => {
    return (
        <Container
            pt={{ base: "3rem", md: top }}
            px={{ base: "1rem", sm: "2rem", lg: "0" }}
            pb={{ base: "1rem", sm: "2rem", md: "5rem" }}
            align="center"
            alignItems={"center"}
            id={id}
        >
            <Box
                maxW={"100%"}
                align="left"
            >
                {children}
            </Box>
        </Container>
    )
}

export default Section