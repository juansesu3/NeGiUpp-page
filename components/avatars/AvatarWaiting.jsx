import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

const AvatarWaiting = () => {
  const [hasError, setHasError] = useState(false);

  const { scene, animations } = useGLTF(
    "/models/my_avatar_waiting.glb",
    undefined,
    () => setHasError(true)
  );

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (hasError) {
      console.error("Error al cargar el modelo.");
      return;
    }

    actions.standby.play();

    // Descomenta las siguientes líneas si deseas detener la animación cuando el componente se desmonte
    // return () => {
    //   actions.standby.stop();
    // };
  }, [hasError, actions]);

  if (hasError) {
    return <div>Error al cargar el modelo</div>;
  }

  return (
    <group>
      <primitive
        object={scene}
        scale={2.92}
        position-y={-2.5}
        position-x={0}
        rotation-y={0.4}
      />
    </group>
  );
};

export default AvatarWaiting;
