import { useState, useEffect } from "react";
import { Vector3, Event } from "three";
import { useGLTF, Html } from "@react-three/drei";

// Define types for position state
type Position = Vector3;

const MovablePaimon: React.FC = () => {
  const { scene } = useGLTF("/model-3d/paimon_idle_animation.glb");
  const [position, setPosition] = useState<Position>(new Vector3(-5, 0, 0)); // Starting position

  const milestones = [
    { position: new Vector3(-5, 0, 0), label: "High School Graduation" },
    { position: new Vector3(0, 1, 0), label: "Bachelor’s Degree" },
    { position: new Vector3(5, 0, 0), label: "Currently at ESPRIT" },
  ];

  // Handle key press for moving Paimon
  const handleKeyPress = (event: KeyboardEvent) => {
    const speed = 0.1;
    if (event.key === "ArrowLeft") {
      setPosition((prev) => prev.clone().add(new Vector3(-speed, 0, 0)));
    }
    if (event.key === "ArrowRight") {
      setPosition((prev) => prev.clone().add(new Vector3(speed, 0, 0)));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <primitive object={scene} position={position.toArray()} />
      {milestones.map((milestone, idx) => (
        <MilestonePopup key={idx} position={milestone.position} label={milestone.label} />
      ))}
    </>
  );
};

// A small component for displaying milestone labels
type MilestonePopupProps = {
  position: Vector3;
  label: string;
};

const MilestonePopup: React.FC<MilestonePopupProps> = ({ position, label }) => {
  return (
    <Html position={position}>
      <div className="info-box">{label}</div>
    </Html>
  );
};

export default MovablePaimon;
