import { useEffect, useState } from 'react';
import './Announcements.css'; // Import your CSS file
import axios from 'axios';

const Announcements = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [rightSide, setRightSide] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const handleContentClick = (content) => {
    setSelectedContent(content);
    axios
      .get(`http://localhost:5000/api/v1/admin/announcements/${content}`)
      .then((response) => {
        setRightSide(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching announcement details:', error);
      });
  };

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get('http://localhost:5000/api/v1/admin/announcement')
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error('Error fetching announcements:', error);
      });
  }, []);

  return (
    <div className="mt-20 font-lora max-w-7xl mx-auto  items-start gap-7  flex">
      <div className="  ">
        {announcements?.map((item) => (
          <div key={item._id} className="">
            {/* Left side content */}
            <div
              className={`cursor-pointer  gap-5 items-start bg-gradient-to-b from-[#42275a] to-[#734b6d] w-[660px] p-5 rounded-xl mb-5 ${
                selectedContent === item._id ? 'border-2' : ''
              }`}
              onClick={() => handleContentClick(item._id)}
            >
              <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
              <div>
                <h5 className="text-white text-sm font-medium mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h5>
                <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
                <h5 className="text-white text-sm font-medium break-all">{item.announcementtitle}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right side content */}
      <div className="custom-scrollbar bg-gradient-to-b from-[#42275a] to-[#734b6d] shadow-xl w-[710px] h-[500px] overflow-y-auto  rounded-xl">
        <h4 className="text-white text-xl font-semibold mb-1 sticky overflow-hidden top-0 bg-gradient-to-b from-[#42275a] to-[#734b6d] pl-5 pt-5 pb-2">
          মাত্র 12 ঘণ্টা বাকি !!!!
        </h4>
        <div className="pl-5 pr-5 pt-1 pb-5">
          {rightSide ? (
            <div>
              <p className="text-white break-all text-base font-medium ">{rightSide.announcemensubdescription}</p>
              <p className="text-white break-all text-base font-medium mb-2">{rightSide.announcementtitle}</p>
            </div>
          ) : (
            <p className="text-white">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
