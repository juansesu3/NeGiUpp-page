import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
const Avatar = () => {
  const avatar = useGLTF("models/my_avatar-brand_animation.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  //console.log(avatar);
  //console.log(actions);
  useEffect(() => {
    actions.shaking.setLoop(THREE.LoopOnce); // Desactivar el loop
    actions.shaking.clampWhenFinished = true; // Detener la animación al finalizar
    actions.shaking.play(); // Iniciar la animación

    // Opcional: Detener la animación cuando el componente se desmonte
    return () => {
      actions.shaking.stop();
    };
  }, []);
  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2.55}
        position-y={-2}
        position-x={-1}
        rotation-y={0.25}
      />
    </group>
  );
};

export default Avatar;
