import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import { useParams } from 'react-router-dom';
import { useGetuserCourseVideoByIdQuery } from '../../redux/services/VideoApiSlice.js/VideoApiSlice';

const Video = () => {
  const [videoPlaylist, setVideoPlaylist] = useState([]);
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  //
  const [lessionNameObject, setLessionNameObject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedLession, setSelectedLession] = useState('');
  const [selectVideoUrl, setSelectVideoUrl] = useState('');
  const { id } = useParams();
  const lessionName = [];
  const topicName = [];
  const { data } = useGetuserCourseVideoByIdQuery(id);
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

  // const handleNextVideo = () => {
  //   setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  // };

  // const handlePrevVideo = () => {
  //   setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videoPlaylist.length - 1 : prevIndex - 1));
  // };

  //Lession Name Genetator
  if (data) {
    for (let x in data[0]) {
      lessionName.push(x);
    }
  }

  //Handle Lessinon Name Based Topic Name Generated
  const handleLessionName = (lession) => {
    //Assign Values
    if (data && lession) {
      const selectLessionName = data[0][lession][0];
      setLessionNameObject(selectLessionName);
    }
  };

  //Topic Name Object Key Generation
  if (lessionNameObject) {
    for (let key in lessionNameObject) {
      topicName.push(key);
    }
  }

  //Topic video Select Generation
  const handleSelectedTopic = (selectedTopic) => {
    if (data && selectedTopic) {
      const selectTopicVideo = data[0][selectedLession][0][selectedTopic];
      setSelectedVideo(selectTopicVideo);
    }
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
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center mx-auto max-w-7xl ">
          <div className="border-2 col-span-3">
            <ReactPlayer controls={true} url={selectVideoUrl || 'https://youtu.be/TC8O3VE8QCU'} width="100%" height="500px" />
          </div>
          <div className="bg-transparent border-2 text-white rounded-xl h-full">
            <ul className="menu px-1">
              <li>
                {lessionName?.map((lessionValue, idx) => {
                  return (
                    <details key={idx + 'fkajfkljak'}>
                      <summary
                        className="font-bold text-yellow-500 text-2xl "
                        onClick={() => {
                          handleLessionName(lessionValue);
                          setSelectedLession(lessionValue);
                        }}
                      >
                        {lessionValue}
                      </summary>

                      {topicName?.map((topic, idx) => {
                        return (
                          <ul key={idx + 'hfjahfjah'} className="pl-1">
                            <li key={idx}>
                              <details>
                                <summary className="font-bold text-yellow-400 text-2xl " onClick={() => handleSelectedTopic(topic)}>
                                  {topic}
                                </summary>
                                {selectedVideo?.map((videoData, idx) => {
                                  return (
                                    <ul key={idx + 'hfjahfjah'} className="pl-3 mb-2 bg-orange-400 text-white">
                                      <li
                                        onClick={() => setSelectVideoUrl(videoData?.videoUrl)}
                                        className="font-bold text-yellow-200 text-lg "
                                      >
                                        {videoData?.videoTitle}
                                      </li>
                                    </ul>
                                  );
                                })}
                              </details>
                            </li>
                          </ul>
                        );
                      })}
                    </details>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
