import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';

import { TriangleDownIcon } from '@chakra-ui/icons';

const translations = [
    "Hello There!",
    "你好!"
];

const Hero = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentText((prevText) =>
                translations[currentIndex].slice(0, charIndex + 1)
            );
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
        }, 150);

        if (charIndex === translations[currentIndex].length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                setCharIndex(0);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
            }, 1000);
        }

        return () => clearInterval(typingInterval);
    }, [charIndex, currentIndex]);

    return (
        <Container
            py={{ base: "0.5rem" }}
            px={{ sm: "4rem", md: "0rem" }}
            align={"left"}
        >
            <Box
                maxW={{ base: "fit-content", lg: "100%" }}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "30px", sm: "45px", md: "60px", lg: "65px" }}
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    py={1}
                >
                    {currentText} 👋
                </Heading>
                <Text
                    as="h2"
                    fontSize={{ base: "16px", sm: "20px", md: "25px" }}
                    py={1}
                >
                    My Name is <u>Donovan Koh</u>.
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "12px", sm: "12px", md: "17px" }}
                    color={useColorModeValue("gray.500", "gray.200")}
                    py={1}
                >
                    AI and Analytics Student, Aspiring Data Analyst/Scientist.<br />
                    I love insights and building awesome stuff to help the community!
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "14px", sm: "14px", md: "17px" }}
                    color={useColorModeValue("gray.500", "gray.200")}
                    py={1}
                >
                    📍 Based in <u>Singapore</u>
                </Text>
                <Box py={5}>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"#about"}
                    >
                        <Button
                            mb={2}
                            mr={2}
                            rightIcon={<TriangleDownIcon />}
                            colorScheme="blue"
                            size={{ base: "sm", sm: "sm", md: "md" }}
                        >
                            Learn More About Me!
                        </Button>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"/files/Donovan-resume.pdf"}
                        target='_blank'
                    >
                        <Button
                            mb={2}
                            mr={3}
                            colorScheme="green"
                            size={{ base: "sm", sm: "sm", md: "md" }}
                        >
                            Download My Resume! 📑
                        </Button>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"https://github.com/d0nKed"}
                        target='_blank'
                    >
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Hero;
