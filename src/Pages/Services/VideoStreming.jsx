import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useGetuserCourseVideoByIdQuery } from '../../redux/services/VideoApiSlice.js/VideoApiSlice';
import VideoLiskeDislikeNote from './VideoLiskeDislikeNote';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useState } from 'react';
const Video = () => {
  const { user } = useAuth();
  const [selectVideoUrl, setSelectVideoUrl] = useState('');
  const [selectTitle, setSelectVideoTitle] = useState('');
  const [videoReactionDataPassingValue, setVideoReactionDataPassingValue] = useState({});
  const { id } = useParams();
  const { data, isLoading } = useGetuserCourseVideoByIdQuery(id);
  if (isLoading) {
    return;
  }

  //
  const handleVideoClick = (videoInfo) => {
    const splitData = videoInfo?.path?.split('/');
    setSelectVideoUrl(videoInfo?.videoUrl);
    setSelectVideoTitle(videoInfo?.videoTitle);
    setVideoReactionDataPassingValue({
      lessionName: splitData[1],
      topicName: splitData[2],
      courseId: id,
      videoId: videoInfo?.id,
      email: user?.email,
    });
  };
  console.log(videoReactionDataPassingValue);
  return (
    <div className="mx-auto max-w-7xl ">
      <h1 className="mb-3 pl-6 text-orange-300">
        <span className="uppercase font-bold text-xl"># </span>
        <span className="text-xl ">{selectTitle}</span>
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-8 items-center">
        <div className=" col-span-3">
          <div className="border-2">
            <ReactPlayer controls={true} url={selectVideoUrl || 'https://youtu.be/TC8O3VE8QCU'} width="100%" height="500px" />
          </div>
          {videoReactionDataPassingValue && <VideoLiskeDislikeNote payload={videoReactionDataPassingValue} />}
        </div>
        {/* Video Info */}
        <div className="bg-transparent col-span-2 text-white rounded-xl h-full">
          <ul className="menu border">
            <li className="mb-2 border border-orange-400">
              {/* Lession Selection  */}
              {Object.entries(data[0])?.map(([lession, lessionValue], idx1) => {
                return (
                  <details key={idx1 + 'fkajfkljak'} className=" pb-4 pr-1">
                    <summary className="font-bold text-yellow-500 text-2xl">
                      <span>#{idx1}</span>
                      {lession}
                    </summary>
                    {/* Topic Selection  */}
                    {Object.entries(lessionValue[0])?.map(([topicName, topicValue], idx2) => {
                      return (
                        <ul key={idx2 + 'hfjahfjah'}>
                          <li>
                            <details>
                              <summary className="font-bold text-yellow-500 text-xl pl-3">
                                <span>
                                  {idx1}.{idx2}
                                </span>
                                {topicName}
                              </summary>

                              {/* Video Selection  */}
                              {topicValue?.map((clickVideoInfo, idx3) => {
                                return (
                                  <ul key={idx3 + 'hfjahfjah'} className="mb-2 text-yellow-400 ">
                                    <li onClick={() => handleVideoClick(clickVideoInfo)}>
                                      <div>
                                        <span>
                                          {idx1}.{idx2}.{idx3 + 1}
                                        </span>{' '}
                                        <span>{clickVideoInfo?.videoTitle}</span>
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
    </div>
  );
};

export default Video;
