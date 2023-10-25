import { useGLTF } from "@react-three/drei";

const Avatar = () => {
  const avatar = useGLTF("models/my_avatar.glb");
  console.log(avatar);
  return (
    <group>
      <primitive object={avatar.scene} />
    </group>
  );
};

export default Avatar;
