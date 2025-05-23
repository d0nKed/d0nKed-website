import React from 'react'
import Section from '../section'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import Paragraph from '../text/paragraph'
import { QnA } from '../../data'

const AccordionItems = () => (
    <Accordion
        allowToggle
    >
        {QnA.map((item, index) => (
                <AccordionItem
                    py={3}
                    key={index}
                >
                    <AccordionButton
                        borderRadius={10}
                    >
                        <Box
                            as='span'
                            textAlign={"left"}
                            align={"center"}
                            flex={"1"}
                            key={index}
                        >
                            <Paragraph>
                                <b>{item.question}</b>
                            </Paragraph>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <Paragraph>
                            {item.answer}
                        </Paragraph>
                    </AccordionPanel>
                </AccordionItem>
        ))}
    </Accordion>
)

const FAQ = () => {
    return (
        <Section
            top={"1rem"}
        >
            <Heading
                as="h1"
                py={4}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                FAQ ❓
            </Heading>
            <AccordionItems />
        </Section>
    )
}

export default FAQ