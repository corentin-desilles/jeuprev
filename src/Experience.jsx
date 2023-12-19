import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber' //hook that abstract loading
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //send the Three.js loader class we want to use and the path to the file to useLoader
import React from 'react'

export default function Experience({ model }) {
    const modelData = useLoader(GLTFLoader, `/${model}.glb`)
    console.log(modelData)

    return (
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            {/* <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <meshStandardMaterial color="greenyellow" />
            </mesh> */}

            <primitive
                object={modelData.scene}
                position={[0, -2, 0]}
                scale={0.7}
            />
        </>
    )
}
