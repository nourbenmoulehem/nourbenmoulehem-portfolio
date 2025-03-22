import { Canvas } from "@react-three/fiber";
import MovablePaimon from "./MovablePaimon";
import { OrbitControls } from "@react-three/drei";

const TimelineScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <MovablePaimon />
      <OrbitControls />
    </Canvas>
  );
};

export default TimelineScene;
