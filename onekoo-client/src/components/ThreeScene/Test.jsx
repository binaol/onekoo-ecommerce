import { Canvas } from '@react-three/fiber';
import { BoxGeometry, SphereGeometry } from 'three';

function Test() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshDistanceMaterial color="orange" />
    </mesh>
  );
}

export default Test;
