import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './model'

const FolderModel = () => {
    return (
        <Container
            w={{ md: '85vw' }}
            h={{ base: '20rem', sm: '30rem', md: '35rem' }}
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
                    shadows
                    camera={{ position: [0, 0, 5], fov: 30 }}
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={0.8} />
                    <Model path={"/models/FileFolder.glb"} scale={18} />
                    <OrbitControls autoRotate enableZoom={false} />
                </Canvas>
            </Suspense>
        </Container>
    )
}

export default FolderModel
