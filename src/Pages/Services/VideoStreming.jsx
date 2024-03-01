import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useGetuserCourseVideoByIdQuery } from '../../redux/services/VideoApiSlice.js/VideoApiSlice';
import VideoLiskeDislikeNote from './VideoLiskeDislikeNote';
import useAuth from '../../Hooks/useAuth/useAuth';

const Video = () => {
  const [lessionNameObject, setLessionNameObject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedLession, setSelectedLession] = useState('');
  const [selectedLessionsTopic, setSelectedLessionsTopic] = useState('');
  const [selectVideoUrl, setSelectVideoUrl] = useState('');
  const [selectVideoId, setSelectVideoId] = useState('');
  const { id } = useParams();
  const lessionName = [];
  const topicName = [];
  const { user } = useAuth();
  const { data } = useGetuserCourseVideoByIdQuery(id);
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

  const payloadData = {
    lessionName: selectedLession,
    topicName: selectedLessionsTopic,
    courseId: id,
    videoId: selectVideoId,
    email: user?.email,
  };
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 gap-8 items-center mx-auto max-w-7xl ">
      <div className=" col-span-3">
        <div className="border-2">
          <ReactPlayer controls={true} url={selectVideoUrl || 'https://youtu.be/TC8O3VE8QCU'} width="100%" height="500px" />
        </div>
        {selectedLession && topicName && selectVideoId && <VideoLiskeDislikeNote payload={payloadData} />}
      </div>
      <div className="bg-transparent col-span-2 text-white rounded-xl h-full">
        <ul className="menu border">
          <li className="mb-2 border border-orange-400">
            {lessionName?.map((lessionValue, idx1) => {
              return (
                <details key={idx1 + 'fkajfkljak'} className=" pb-4 pr-1">
                  <summary
                    className="font-bold text-yellow-500"
                    onClick={() => {
                      handleLessionName(lessionValue);
                      setSelectedLession(lessionValue);
                    }}
                  >
                    <span className="text-2xl">#{idx1} </span> <span className="text-2xl">{lessionValue}</span>
                  </summary>

                  {topicName?.map((topic, idx2) => {
                    return (
                      <ul key={idx2 + 'hfjahfjah'}>
                        <li>
                          <details>
                            <summary
                              className="font-bold text-yellow-500 text-xl px-2"
                              onClick={() => {
                                handleSelectedTopic(topic);
                                setSelectedLessionsTopic(topic);
                              }}
                            >
                              <span>
                                {idx1}.{idx2}{' '}
                              </span>{' '}
                              {topic}
                            </summary>
                            {selectedVideo?.map((videoData, idx3) => {
                              return (
                                <ul key={idx3 + 'hfjahfjah'} className="mb-2 text-yellow-400 ">
                                  <li
                                    onClick={() => {
                                      setSelectVideoId(null);
                                      setSelectVideoUrl(videoData?.videoUrl);
                                      setSelectVideoId(videoData.id);
                                    }}
                                  >
                                    <div>
                                      <span>
                                        {idx1}.{idx2}.{idx3 + 1}
                                      </span>{' '}
                                      <span>{videoData?.videoTitle}</span>
                                    </div>
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
  );
};

export default Video;
