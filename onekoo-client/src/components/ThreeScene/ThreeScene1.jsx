import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelURL from '../../assets/models/glb/Cini.glb';
import { Float } from '@react-three/drei';

function Box() {
    return (
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    );
}

function Model() {
    const result = useLoader(GLTFLoader, modelURL);
    return <primitive object={result.scene} />; // Adjust the scale here
}

const ThreeScene = () => {
    return (
        <div id='canvas-container'>
            <Canvas style={{ height: window.innerHeight, width: window.innerWidth }}>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" intensity={0.3} position={[0, 0, 5]} />
                <Float speed={3} rotationIntensity={0} floatIntensity={0}>
                    <Box position={[-3, 0, 0]} />
                    <Box position={[0, 0, 0]} />
                    <Box position={[3, 0, 0]} />
                    <Suspense fallback={null}>
                        <Model position={[0, 0, 0]} />
                        <Model position={[-3, 0, 0]} />
                    </Suspense>
                </Float>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ThreeScene;


// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Float } from '@react-three/drei';
// import { Suspense } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import modelURL from '../../assets/models/glb/Cini.glb';

// function Box({ position }) {
//     return (
//         <mesh position={position}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshNormalMaterial />
//         </mesh>
//     );
// }

// function Model({ position }) {
//     const result = useLoader(GLTFLoader, modelURL);
//     return <primitive object={result.scene} scale={[0.1, 0.1, 0.1]} position={position} />;
// }

// const ThreeScene = () => {
//     // Array with nine positions for the Model components
//     const positions = [
//         [-3, -3, 0],
//         [-2, -3, 0],
//         [-1, -3, 0],
//         [0, -3, 0],
//         [1, -3, 0],
//         [2, -3, 0],
//         [3, -3, 0],
//         [4, -3, 0],
//         [5, -3, 0],
//     ];

//     return (
//         <div id='canvas-container'>
//             <Canvas style={{ height: window.innerHeight, width: window.innerWidth }}>
//                 <ambientLight intensity={0.1} />
//                 <directionalLight color="red" intensity={0.3} position={[0, 0, 5]} />
//                 <Suspense fallback={null}>
//                     {positions.map((position, index) => (
//                         <Float key={index} speed={3} rotationIntensity={0} floatIntensity={0}>
//                             <Box position={position} />
//                             <Model position={position} />
//                         </Float>
//                     ))}
//                 </Suspense>
//                 <OrbitControls />
//             </Canvas>
//         </div>
//     );
// };

// export default ThreeScene;
