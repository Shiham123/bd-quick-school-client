import Swal from 'sweetalert2';
import { useGetuserReactionVideoByIdQuery, useVideoReactionMutation } from '../../redux/services/VideoApiSlice.js/VideoApiSlice';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { BiSolidDislike } from 'react-icons/bi';
import { IconButton } from '@material-ui/core';

const VideoLiskeDislikeNote = ({ payload }) => {
  const [addAndRemoveReactions] = useVideoReactionMutation();
  const { lessionName, topicName, courseId, videoId, email } = payload;
  //
  const getSingleVideoLink = `?id=${videoId || ''}&lessionName=${lessionName || ''}&topicName=${topicName || ''}&courseId=${
    courseId || ''
  }&email=${email || ''}`;

  const { data, isLoading } = useGetuserReactionVideoByIdQuery(getSingleVideoLink);
  if (isLoading) {
    return;
  }
  //
  const handleClicked = (data) => {
    if (lessionName && topicName && courseId && videoId && email) {
      const postDatas = {
        lessionName,
        topicName,
        courseId,
        videoId,
        email,
        likesData: data.likes || false,
        disLikesData: data.dislikes || false,
      };
      addAndRemoveReactions(postDatas)
        .unwrap()
        .then(() => {
          console.log('Liked');
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteValue = e.target.notdown.value;
    const postDatas = {
      lessionName,
      topicName,
      courseId,
      videoId,
      email,
      notes: noteValue,
      likesData: false,
      disLikesData: false,
    };
    addAndRemoveReactions(postDatas)
      .unwrap()
      .then(() => {
        Swal.fire('Save Your Data');
      });
  };
  return (
    <div className="text-white max-w-7xl text-justify mt-1   mx-auto">
      <div className="flex justify-between items-center mb-2 w-3/4 ">
        <div className="flex items-center">
          <span className="text-2xl mr-1">{data[0]?.likesArrayLength}</span>
          <span className="mr-2">Likes</span>
          <button onClick={() => handleClicked({ likes: true })} className="px-2 mr-2 bg-orange-600 rounded-btn my-2">
            {data[0]?.likesIncludeEmail ? (
              <>
                <IconButton>
                  <AiFillLike className="text-xl text-white" />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton>
                  <AiOutlineLike className="text-xl text-white" />
                </IconButton>
              </>
            )}
          </button>
        </div>
        <div>
          <button
            onClick={() => document.getElementById('my_modal_5').showModal()}
            className="px-4 py-2 mr-2 text-xl bg-orange-600 rounded-btn my-2"
          >
            Preview Your Note
          </button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-2">Your Videos Note</h3>
              <form onSubmit={handleSubmit}>
                <textarea
                  placeholder="Your Video Note"
                  defaultValue={data[0]?.note}
                  name="notdown"
                  className="textarea textarea-bordered area-lg text-black font-bold w-full"
                ></textarea>
                <div className="flex space-x-4 justify-end">
                  <input type="submit" value="Save" className="btn bg-orange-600 text-white border hover:text-black px-3 mt-2" />
                  <form method="dialog">
                    <button className="btn btn-primary hover:bg-orange-600 px-3 mt-2">Close</button>
                  </form>
                </div>
              </form>
            </div>
          </dialog>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-1">{data[0]?.disLikesArrayLength}</span>
          <span className="mr-2">DisLikes</span>
          <button onClick={() => handleClicked({ dislikes: true })} className="px-2 bg-orange-600 rounded-btn my-2">
            {data[0]?.disLikesIncludeEmail ? (
              <IconButton>
                <BiSolidDislike className="text-xl text-white" />
              </IconButton>
            ) : (
              <IconButton>
                <AiOutlineDislike className="text-xl text-white" />
              </IconButton>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLiskeDislikeNote;
