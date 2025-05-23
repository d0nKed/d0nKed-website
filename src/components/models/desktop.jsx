import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './model'

const DesktopModel = () => {
	return (
		<Container
			mt={{base: "0rem", sm: "3rem", md: "3rem"}}
			w={{md:'85vw'}}
			h={{base: '12rem', sm: '20rem', md: '25rem', lg: '25rem'}}
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
					camera={{ position: [-10, 3, -10], fov: 16 }}
					viewport={{ zoom: 3 }}
				>
						<Model path={"/models/Desktop.glb"} scale={1.5} />
						<OrbitControls autoRotate={true} enableZoom={false}/>
				</Canvas>
			</Suspense>
		</Container>
	)
}

export default DesktopModel