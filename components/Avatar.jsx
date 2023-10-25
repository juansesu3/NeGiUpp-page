import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Avatar = () => {
  const avatar = useGLTF("models/my_avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  //console.log(avatar);
  console.log(actions);
  useEffect(() => {
    actions.point.play();
  });
  return (
    <group>
      <primitive object={avatar.scene} scale={2.5} position-y={-2} />
    </group>
  );
};

export default Avatar;
