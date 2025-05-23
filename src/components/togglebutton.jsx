import { Box, Button, Container, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box>
            <Button 
                size='sm' 
                onClick={toggleColorMode} 
                p={1}
                colorScheme={useColorModeValue("blue", "yellow")}
            >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    )
}

export default ToggleButton