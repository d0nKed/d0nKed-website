import { Box, Button, Heading, Link, Stack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import React from 'react'
import Section from '../section'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import FolderModel from '../models/folder'
import PhoneModel from '../models/phone'

const Socials = [
    {
        name: "LinkedIn",
        username: "Donovan Koh",
        link: "https://www.linkedin.com/in/DonovanKohyh/",
        icon: SiLinkedin,
        color: "linkedin"
    },
    {
        name: "GitHub",
        username: "d0nKed",
        link: "https://www.github.com/d0nKed/",
        icon: SiGithub,
        color: "gray"
    },
    {
        name: "Email",
        username: "kohdonovan71@gmail.com",
        link: "mailto:kohdonovan71@gmail.com",
        icon: SiGmail,
        color: "telegram"
    },
]

const Contacts = () => {
    return (
        <Section
            top={"2rem"}
        >
            <Stack spacing={16}>
                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                        fontWeight={{ base: "bold", md: "extrabold" }}
                    >
                        Find out more! 📄
                    </Heading>
                    <FolderModel />
                    <Link
                        href="/files/Donovan-resume.pdf"
                        target='_blank'
                    >
                        <Button
                            colorScheme="green"
                            mt={3}
                            mr={3}
                        >
                            Download My Resume! 📑
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                        fontWeight={{ base: "bold", md: "extrabold" }}
                    >
                        Find Me Online! 🌐 
                    </Heading>
                    <PhoneModel />
                    {Socials.map((social) => (
                        <Link
                            href={social.link}
                            target='_blank'
                            key={social.name}
                        >
                            <Tag
                                colorScheme={social.color}
                                size={{ sm: "md", md: "lg" }}
                                m={1}
                                p={2}
                                style={{ transition: "all .1s ease-in-out" }}
                                _hover={{ transform: "translate(0, -2px)", boxShadow: "md" }}
                            >
                                <TagLeftIcon as={social.icon} />
                                <TagLabel>{social.name}</TagLabel>
                            </Tag>
                        </Link>
                    ))}
                </Box>
            </Stack>
        </Section>
    )
}

export default Contacts