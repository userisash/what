import React, { useState, useRef } from 'react';
import videoFile from './video/video.mp4';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <video
        ref={videoRef}
        style={{ width: '100%', borderRadius: '4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <source src={videoFile} type="video/mp4" />
      </video>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button onClick={handlePlayPause} style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#4caf50', color: '#fff', textTransform: 'uppercase', fontWeight: 'bold', cursor: 'pointer' }}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;

