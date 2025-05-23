import { Text } from '@chakra-ui/react'
import React from 'react'

const Paragraph = ({children, py}) => {
    return (
        <Text
            as="p"
            fontSize={{ base: "15px", md: "17px", lg: "19px" }}
            py={py}
        >
            {children}
        </Text>
    )
}

export default Paragraph