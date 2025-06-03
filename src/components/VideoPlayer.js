import React from 'react';
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({ url }) => {
  return (
    <div className="player-wrapper"z>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default ResponsivePlayer;
