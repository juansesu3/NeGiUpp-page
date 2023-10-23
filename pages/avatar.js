import Layout from "@/components/Layout";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none" };
const AvatarPage = () => {
  const handleOnUserSet = (event) => {
    console.log(`User ID is: ${event.data.id}`);
  };

  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };
  return (
    <Layout>
      <AvatarCreator
        subdomain="portfolio-70i4uo.readyplayer.me?frameApi"
        config={config}
        style={style}
        onUserSet={handleOnUserSet}
        onAvatarExported={handleOnAvatarExported}
      />
    </Layout>
  );
};

export default AvatarPage;
