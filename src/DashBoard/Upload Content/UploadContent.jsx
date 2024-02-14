/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';

// Component for uploading content
const UploadContent = () => {
  // State variables for video and loading status
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Reference to the form element
  const formRef = useRef(null);

  // Function to upload the file
  const uploadFile = async () => {
    const data = new FormData();
    data.append('file', video);
    data.append('upload_preset', 'videos_preset');

    try {
      let cloudeName = 'ddezazg6b';
      let reSourceType = 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudeName}/${reSourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // upload video file
      const videUrl = await uploadFile();

      // send backend api request
      // await axios.post(``, { videUrl });

      // Display success message
      Swal.fire('Video Uploaded');

      // Reset the form
      formRef.current.reset();
      // Reset state
      setVideo(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh]">
      <div className="w-[90%] md:w-[35%] mx-auto mt-52">
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Label for the file input */}
          <label className="text-4xl font-bold">Content Upload</label>
          <br />
          <br />
          {/* File input field */}
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <br />
          <br />
          {/* Submit button */}
          <button type="submit" className="btn btn-active btn-neutral w-full max-w-xs text-xl mt-2">
            Upload File
          </button>
        </form>

        {/* Loading spinner */}
        {loading && (
          <div className="w-[60%] mx-auto">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadContent;
