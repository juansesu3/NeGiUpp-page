import { useState } from 'react';
import { Avatar } from '@readyplayerme/visage';
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';

const subdomain = 'https://portfolio-70i4uo.readyplayer.me?frameApi';

const config = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export const YourCustomComponent = () => {
  const [url, setUrl] = useState(null);

  if (!url) {
    return (
      <AvatarCreator 
        subdomain={subdomain} 
        config={config} 
        style={style} 
        onAvatarExported={(event) => setUrl(event.data.url)} 
      />
    );
  }
  
  return <Avatar style={style} modelSrc={url} cameraInitialDistance={10} />;
};
