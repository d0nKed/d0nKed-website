import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './model'

const PhoneModel = () => {
    return (
        <Container
            mt={"5rem"}
            w={{ md: '85vw' }}
            h={{ base: '20rem', sm: '30rem', md: '25rem' }}
            id={"contact"}
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
                    camera={{ position: [0, 0, 5], fov: 30 }}
                    viewport={{ zoom: 2 }}
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={0.8} />
                    <Model path={"/models/Phone.glb"} scale={1.8} />
                    <OrbitControls autoRotate enableZoom={false} />
                </Canvas>
            </Suspense>
        </Container>
    )
}

export default PhoneModel