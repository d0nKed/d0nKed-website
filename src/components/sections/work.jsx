import React from 'react'
import Section from '../section'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Flex, Heading, Image, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../text/paragraph'
import SkillTag from '../text/skillstag'
import { SiTableau } from 'react-icons/si'
import { SiPython } from 'react-icons/si'

const SkillsHTX = [
    {
        name: "Tableau",
        color: "blue",
        icon: SiTableau
    },
    {
        name: "Python",
        color: "white",
        icon: SiPython
    }
]

const Work = () => {
    return (
        <Section top={"1rem"}>
            <Heading
                as="h1"
                pb={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                My Work Experience 💼
            </Heading>
            <Flex
                py={4}
                align={"center"}
            >
                <Image 
                    src="/images/htx.png"
                    boxSize={{base: "65px", md: "100px"}}
                    objectFit='contain'
                    borderRadius={7}
                />
                <Box
                    pl={5}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "14px", sm: "15px", md: "20px" }}
                        fontWeight={"bold"}
                    >
                        Current Data Engineering / xData Intern
                    </Heading>
                    <Paragraph>
                        Home Team Science and Technology Agency
                    </Paragraph>
                    <Text
                        as="p"
                        fontSize={{ base: "12px", md: "16px" }}
                        color={useColorModeValue("gray.500", "gray.200")}
                    >
                        14 April 2025 to 13 February 2026
                    </Text>
                    <Badge
                        colorScheme="yellow"
                        variant="subtle"
                    >Internship</Badge>
                </Box>
            </Flex>
            <Box>
                <Box
                    maxWidth={{ base: "inherit", md: "100%" }}
                >
                    <Accordion 
                        borderBottomWidth={0}
                        allowToggle
                    >
                        <AccordionItem
                            py={3}
                        >
                            <AccordionButton
                                borderRadius={10}
                            >
                                <Box
                                    as='span'
                                    textAlign={"left"}
                                    align={"center"}
                                    flex={"1"}
                                >
                                    <Paragraph>
                                        <b>Overview 📌</b>
                                    </Paragraph>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <UnorderedList>
                                    <ListItem>
                                        <Paragraph py={2}>
                                        The intern would be placed with our Data Engineering team to work on building data preparation pipelines, and dashboards on our Tableau Server. The intern will work with stakeholders to understand their needs and iterate with them to build data preparation pipelines and dashboards.
                                        </Paragraph>
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph py={2}>
                                        One example is an internal tracking dashboard provided to the server tenants that tracks that provides key metrices of unutilised resources, expired invites and license expiration dates. The intern will be responsible for creating the data preparation pipelines, dashboard development and deployment.
                                        </Paragraph>
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph py={2}>
                                        If required, interns would also help build managed services into data preparation pipelines to facilitate dashboard building.
                                        </Paragraph>
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem
                            py={3}
                        >
                            <AccordionButton
                                borderRadius={10}
                            >
                                <Box
                                    as='span'
                                    textAlign={"left"}
                                    align={"center"}
                                    flex={"1"}
                                >
                                    <Paragraph>
                                        <b>Skills Acquired 🔧</b>
                                    </Paragraph>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                {SkillsHTX.map((Skill, index) => (
                                    <SkillTag
                                        icon={Skill.icon}
                                        color={Skill.color}
                                        key={index}
                                    >
                                        {Skill.name}
                                    </SkillTag>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </Section>
    )
}

export default Work