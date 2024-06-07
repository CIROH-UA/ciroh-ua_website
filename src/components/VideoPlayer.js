import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({ url }) {
  return (
    <ReactPlayer url={url} width="100%" height="400px" controls />
  );
}