import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './model'

const ClassroomModel = () => {
    return (
        <Container
            w={{ md: '85vw' }}
            h={{ base: '10rem', sm: '20rem', md: '30rem' }}
            id={"education"}
        >
            <Suspense
                fallback={<Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                    mt={"5rem"}
                />}
            >
                <Canvas
                    frameloop='demand'
                    shadows
                    camera={{ position: [15, 4, 0], fov: 16 }}
                    viewport={{ zoom: 1.5 }}
                >
                        <Model path={"/models/Classroom.glb"} scale={0.8} />
                        <OrbitControls autoRotate={true} enableZoom={false}/>
                </Canvas>
            </Suspense>
        </Container>
    )
}

export default ClassroomModel