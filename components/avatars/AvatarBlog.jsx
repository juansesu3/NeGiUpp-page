"use client"
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
const AvatarBlog = () => {
  const avatar = useGLTF("models/my_avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  //console.log(avatar);
  console.log(actions);
  useEffect(() => {
    actions.point.setLoop(THREE.LoopOnce); // Desactivar el loop
    actions.point.clampWhenFinished = true; // Detener la animación al finalizar
    actions.point.play(); // Iniciar la animación

    // Opcional: Detener la animación cuando el componente se desmonte
    return () => {
      actions.point.stop();
    };
  }, []);
  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={3.2}
        position-y={-2.3}
        position-x={0.5}
        rotation-y={-0.5}
      />
    </group>
  );
};

export default AvatarBlog;
