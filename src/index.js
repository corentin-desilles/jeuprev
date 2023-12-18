// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

import './index.css'

// const root = createRoot(document.getElementById('root'))
// root.render(<App />)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
        }}
    >
        <Experience />
    </Canvas>
)
