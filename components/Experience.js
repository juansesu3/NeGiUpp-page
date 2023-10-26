import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls enabled={false} />
      <Avatar />
      <Environment background={null} preset="sunset" />
    </>
  );
};
