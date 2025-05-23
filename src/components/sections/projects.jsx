import React from 'react'
import Section from '../section'
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link, Tag, Badge, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectList } from '../../data/index.js'

localStorage.setItem("ProjectId", 0)

const FullProject = ({ isOpen, onClose, ProjectId }) => {
    const Project = ProjectList[ProjectId]
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            size={{ base: "sm", md: "lg", lg: "xl" }}
            isCentered
            motionPreset="slideInBottom"
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent
                background={useColorModeValue("white", "#242424")}
            >
                <ModalHeader>{Project.projectName}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Year: <b>{Project.year}</b></Text>
                    <Text
                        py={4}
                    >{Project.fullDescription}</Text>
                    <Box py={2}>
                        <Link href={Project.link} isExternal>
                            <Text>View Project <ExternalLinkIcon mx='2px' /></Text>
                        </Link>
                    </Box>
                    {Project.tags.map((tag, index) => (
                        <Badge 
                            colorScheme='green' 
                            key={index}
                            mr={2} 
                            mt={3}
                        >
                            {tag}
                        </Badge>
                    ))}
                    {Project.snapshots.map((snapshot, index) => (
                        <Image 
                            src={snapshot} 
                            key={index} 
                            mt={5}
                            borderRadius="lg"
                            mb={5}
                        />
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="yellow"
                        onClick={onClose}
                    >
                        Done!
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const storeProjectId = (id) => {
        localStorage.setItem("ProjectId", id)
    }

    return (
        <Section
            top={"1rem"}
        >
            <Heading
                as="h1"
                py={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
            >
                Projects I've Worked On 💻
            </Heading>
            <SimpleGrid
                minChildWidth={"200px"}
                spacing={"20px"}
                pt={5}
            >
                {ProjectList.map((project, index) => (
                    <Card
                        borderRadius="lg"
                        maxW="sm"
                        variant="outline"
                        background={useColorModeValue("white", "#242424")}
                        style={{ transition: "all 0.1s ease-in-out" }}
                        _hover={{ boxShadow: "md", transform: "translate(0, -3px);" }}
                        key={index}
                    >
                        <CardBody pb={1}>
                            <Image 
                                src={project.image}
                                h={"140px"}
                                objectFit="cover"
                                borderRadius="lg" 
                                mb={5}
                            />
                            <Heading size="md">
                                {project.projectName}
                            </Heading>
                            <Text
                                as="p"
                                fontSize={{ base: "14px", md: "17px" }}
                            >
                                {project.shortDescription}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                colorScheme="yellow"
                                onClick={
                                    () => {
                                        onOpen()
                                        storeProjectId(index)
                                    }
                                }
                            >
                                Learn More
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

                <FullProject
                    isOpen={isOpen}
                    onClose={onClose}
                    ProjectId={localStorage.getItem("ProjectId")}
                />
            </SimpleGrid>
        </Section>
    )
}

export default Projects