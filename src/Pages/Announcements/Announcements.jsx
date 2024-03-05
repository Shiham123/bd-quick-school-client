import { useGetAllAnnouncementsQuery, useGetIdBasedAnnouncementsQuery } from '../../redux/Announcement/announcementsApi';
import './Announcements.css'; // Import your CSS file

import { useState } from 'react';

const Announcements = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const { data } = useGetAllAnnouncementsQuery();
  const { data: details } = useGetIdBasedAnnouncementsQuery(selectedContent);
  return (
    <div className="mt-20 font-lora max-w-7xl mx-auto  items-start gap-5 md:gap-2 lg:gap-7  flex flex-col md:flex-row">
      <div>
        {data?.map((item) => (
          <div key={item._id} className="">
            {/* Left side content */}
            <div
              className={`cursor-pointer flex  gap-5 items-start bg-gradient-to-b from-[#42275a] to-[#734b6d] ml-3 lg:ml-0 xs:w-[290px] sm:w-[350px] semi-sm:w-[400px] md:w-[300px] lg:w-[660px] p-5 rounded-xl mb-5 ${selectedContent === item._id ? 'border-2' : ''
                }`}
              onClick={() => setSelectedContent(item._id)}
            >
              <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
              <div>
                <h5 className="text-white text-sm font-medium mb-1">{item?.announcementtitle}</h5>
                <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
                <h5 className="text-white text-sm font-medium break-all">{item.announcemensubdescription.slice(0, 126)} ...</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right side content */}
      <div className="custom-scrollbar bg-gradient-to-b from-[#42275a] to-[#734b6d] shadow-xl xs:w-[290px] sm:w-[350px] semi-sm:w-[400px] ml-3 lg:ml-0 md:w-[425px] lg:w-[710px] h-[500px] overflow-y-auto  rounded-xl">
        <h4 className="text-white text-xl font-semibold mb-1 sticky overflow-hidden top-0 bg-gradient-to-b from-[#42275a] to-[#734b6d] pl-5 pt-5 pb-2">
          {details?.announcementtitle}
        </h4>
        <div className="pl-5 pr-5 pt-1 pb-5">
          {details ? (
            <div>
              <p className="text-white break-all text-base font-medium mb-10">{details?.announcemensubdescription}</p>
              <p dangerouslySetInnerHTML={{ __html: details?.outcome }} className="text-white break-all text-base font-medium mb-2"></p>
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
