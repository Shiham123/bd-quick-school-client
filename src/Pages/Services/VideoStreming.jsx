import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';

const Video = () => {
  const [videoPlaylist, setVideoPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    setIsOffline(!navigator.onLine);

    if (navigator.onLine) {
      axios
        .get(
          'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'
        )
        .then((response) => {
          setVideoPlaylist(response.data);
        })
        .catch((error) => {
          console.error('Error fetching video playlist:', error);
        });
    }

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoPlaylist.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`app-container ${isOffline ? 'offline' : ''}`}>
      {isOffline && (
        <div className="offline-modal text-center text-white">
          <h2 className="text-4xl">You are currently offline</h2>
          <p className="text-3xl">Please check your internet connection and try again.</p>
          <Player className="" autoplay loop src="/public/JWpqkpQcm6.json"></Player>
        </div>
      )}
      {videoPlaylist.length > 0 && !isOffline && (
        <div className="flex gap-8 items-center mx-auto max-w-7xl ">
          <div>
            <h2 className="text-white text-3xl font-bold">
              {videoPlaylist[currentVideoIndex].title}
            </h2>
            <ReactPlayer
              controls={true}
              url={videoPlaylist[currentVideoIndex].videoUrl}
              width="90%"
              height="500px"
            />
            <div className="video-info">
              <div className="flex gap-4 justify-evenly py-5">
                <button className="btn text-xl" onClick={handlePrevVideo}>
                  Previous
                </button>
                <button className="btn text-xl" onClick={handleNextVideo}>
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="bg-transparent border-2 text-white rounded-xl">
            {videoPlaylist.map((video, idx) => (
              <h1
                className="py-3 px-3 border bg-purple-950 my-2 mx-2 rounded-lg cursor-pointer"
                key={idx}
              >
                {video.title}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
