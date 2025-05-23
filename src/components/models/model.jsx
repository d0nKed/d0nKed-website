
import { useLoader, useThree } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({path, scale}) => {
    const gltf = useLoader(GLTFLoader, path)
    const { viewport } = useThree()
    return (
        <mesh
            scale={(viewport.width / 6)}
        >
            <ambientLight intensity={1} />
            <hemisphereLight intensity={6} groundColor={"black"} />
            <spotLight position={[10, 10, 10]} angle={0.2} intensity={5} penumbra={2} castShadow />
            <pointLight position={[10, 10, 10]} />
            <primitive
                object={gltf.scene}
                scale={scale}
                position={[0, -0.5, 0]}
            />
        </mesh>
    )
}

export default Model