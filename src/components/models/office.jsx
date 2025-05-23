import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from  './model'

const OfficeModel = () => {
    return (
        <Container
            mt={"1rem"}
            w={{ md: '85vw' }}
            h={{ base: '15rem', sm: '30rem', md: '24rem', lg: '30rem' }}
            id={"work"}
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
                    camera={{ position: [10, 2, -20], fov: 16 }}
                    viewport={{ zoom: 3 }}
                >
                    <Model path={"/models/Arcade.glb"} scale={0.5} />
                    <OrbitControls autoRotate={true} enableZoom={false}/>
                </Canvas>
            </Suspense>
        </Container>
    )
}

export default OfficeModel