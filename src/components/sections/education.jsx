import { Box, Card, CardBody, Container, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'
import { Schools } from '../../data/index'

const Education = () => {
    return (
        <Section top={"1rem"}>
            <Heading
                as="h1"
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                Where I've Studied 🎓
            </Heading>
            {Schools.map((school, index) => (
                <Box
                    key={index}
                >
                    <Card
                        direction={{ base: "column", md: "row" }}
                        overflow={"hidden"}
                        variant={"outline"}
                        style={{transition: "all 0.1s ease-in-out"}}
                        _hover={{boxShadow: "md", transform: "translate(0, -3px);"}}
                        background={useColorModeValue("white", "#242424")}
                        alignItems={{md:"center"}}
                        my={4}
                    >
                        <Image 
                            src={school.logo}
                            pl={5} 
                            boxSize='75px'
                            objectFit='contain'
                        />

                        <Stack>
                            <CardBody pt={{base: 0, md: 5}}>
                                <Heading size={{base: "sm", md: "md"}}>{school.name}</Heading>
                                <Text as="p" fontSize={{ base: "13px", md: "17px" }}>{school.course}</Text>
                                <Text
                                    as="p"
                                    fontSize={{ base: "13px", md: "17px" }}
                                    color={useColorModeValue("gray.500", "gray.200")}
                                >
                                    {school.year}
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                </Box>
            ))}
        </Section>
    )
}

export default Education