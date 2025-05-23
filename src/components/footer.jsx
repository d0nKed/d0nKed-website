import React from 'react'
import { Container, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Container>
            <Text
                align={'center'}
                color={useColorModeValue('gray.400', 'gray.500')}
            >&copy;{year} d0nKed. All Rights Reserved.</Text>
        </Container>
    )
}

export default Footer