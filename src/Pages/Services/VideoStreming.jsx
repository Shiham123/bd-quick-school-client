import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Video = () => {
  const [videoPlaylist, setVideoPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  console.log(videoPlaylist);

  useEffect(() => {
    // Fetch video playlist data from your API endpoint
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
    <div className="app-container">
      {videoPlaylist.length > 0 && (
        <div className="flex gap-8 items-center mx-auto max-w-7xl ">
          <div>
            <h2 className=" text-white text-3xl font-bold">
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
          {/* ############## */}
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
