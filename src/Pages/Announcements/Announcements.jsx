// import { useEffect, useState } from 'react';
// import './Announcements.css'; // Import your CSS file
// import axios from 'axios';

// const Announcements = () => {
//     const [selectedContent, setSelectedContent] = useState(null);
//     const [rightSide, setRightSide] = useState([])
//     const [announcements, setAnnouncements] = useState([]);

//     const handleContentClick = (content) => {
//         // setSelectedContent(content);
//         // console.log(content)
//         axios.get(`http://localhost:5000/api/v1/admin/announcements/${content}`)
//             .then(response => {
//                 // console.log(response)
//                 setRightSide(response.data)
//             })
//     };

//     useEffect(() => {
//         // Fetch data from the API endpoint
//         axios.get('http://localhost:5000/api/v1/admin/announcement')
//             .then(response => {

//                 setAnnouncements(response.data);
//                 // console.log(response.data)

//             })
//             .catch(error => {
//                 console.error('Error fetching announcements:', error);
//             });
//     }, []);
//     // console.log(rightSide)

//     return (
//         <div className='mt-20'>
//             <div className="font-lora max-w-7xl mx-auto  items-start gap-7 grid grid-cols-1">
//                 {
//                     announcements?.map((item) => {
//                         // console.log(item)
//                         return (
//                             <div key={item._id} className="">
//                                 {/* Left side content */}
//                                 <div className={`cursor-pointer  gap-5 items-start bg-gradient-to-b from-[#42275a] to-[#734b6d] w-[660px] p-5 rounded-xl mb-5 ${selectedContent === "leftContent1" ? "border-2" : ""}`} onClick={() => handleContentClick(item._id)}>
//                                     <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
//                                     <div>
//                                         <h5 className="text-white text-sm font-medium mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h5>
//                                         <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
//                                         <h5 className="text-white text-sm font-medium break-all">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ...</h5>
//                                     </div>
//                                 </div>
//                                 {/* <div className={`cursor-pointer flex gap-5 items-start bg-gradient-to-b from-[#42275a] to-[#734b6d] w-[660px] p-5 rounded-xl ${selectedContent === "leftContent2" ? "border-2" : ""}`} onClick={() => handleContentClick("leftContent2")}>
//                                     <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
//                                     <div>
//                                         <h5 className="text-white text-sm font-medium mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h5>
//                                         <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
//                                         <h5 className="text-white text-sm font-medium break-all">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ...</h5>
//                                     </div>
//                                 </div> */}
//                                 {/* Add more left side content as needed */}
//                             </div>
//                         )

//                     })
//                 }
//                 {/* Right side content */}
//                 {
//                     rightSide?.map((right) => {
//                         return (
//                             <div key={right._id} className={`custom-scrollbar bg-gradient-to-b from-[#42275a] to-[#734b6d] shadow-xl w-[710px] h-[500px] overflow-y-auto  rounded-xl`}>
//                                 {/* Conditionally render the right side content based on the selected item */}
//                                 {selectedContent === "leftContent1" && (
//                                     <>
//                                         <h4 className="text-white text-xl font-semibold mb-1 sticky overflow-hidden top-0 bg-gradient-to-b from-[#42275a] to-[#734b6d] pl-5 pt-5 pb-2">মাত্র 12 ঘণ্টা বাকি !!!!</h4>
//                                         <div className='pl-5 pr-5 pt-1 pb-5'>
//                                             <p className="text-white break-all text-base font-medium mb-14">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ২৪ তারিখ রাত ১১.৫৯ মিনিট। এর পর আর এনরোলমেন্ট করা যাবে না।</p>
//                                             <p className="text-white break-all text-base font-medium mb-2">আপনার যদি ফাইনেনশিয়াল সমস্যা থাকে তাহলে কুপন কোড ব্যবহার করতে পারেন।</p>
//                                             <p className="text-white break-all text-base font-medium mb-14">কুপনঃ hardwork , ১০০০ টাকার ডিস্কাউন্ট থাকবে।</p>
//                                             <p className="text-white break-all text-base font-medium mb-3">কিভাবে এনরোলমেন্ট করবো ? </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">খুব সহজ আমাদের ওয়েবসাইট এ যেতে হবে,  </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">লিঙ্কঃ https://web.programming-hero.com/  </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">বাকি প্রসেস গুলো নিচের ভিডিও তে দেওয়া আছে। এনরোলমেন্ট শেষ হলে ইমেইল, এসএমএস পেয়ে যাবে।  </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">আমাদের সাথে যোগাযোগ করার মাধ্যমঃ</p>
//                                             <p className="text-white break-all text-base font-medium mb-3">ওয়েবসাইটঃ https://web.programming-hero.com/</p>
//                                             <p className="text-white break-all text-base font-medium mb-3">মেইলঃ web@programming-hero.com</p>
//                                             <p className="text-white break-all text-base font-medium mb-3">ফোনঃ 01322810867 , 01322810869 , 01322901104 </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">পেইজঃ https://web.facebook.com/programmingHero  </p>
//                                         </div>
//                                     </>
//                                 )}
//                                 {selectedContent === "leftContent2" && (
//                                     <>
//                                         <h4 className="text-white text-xl font-semibold mb-1 sticky overflow-hidden top-0 bg-gradient-to-b from-[#42275a] to-[#734b6d] pl-5 pt-5 pb-2">মাত্র 12 ঘণ্টা বাকি !!!!</h4>
//                                         <div className='pl-5 pr-5 pt-1 pb-5'>
//                                             <p className="text-white break-all text-base font-medium mb-14">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ২৪ তারিখ রাত ১১.৫৯ মিনিট। এর পর আর এনরোলমেন্ট করা যাবে না।</p>
//                                             <p className="text-white break-all text-base font-medium mb-2">আপনার যদি ফাইনেনশিয়াল সমস্যা থাকে তাহলে কুপন কোড ব্যবহার করতে পারেন।</p>
//                                             <p className="text-white break-all text-base font-medium mb-14">কুপনঃ hardwork , ১০০০ টাকার ডিস্কাউন্ট থাকবে।</p>
//                                             <p className="text-white break-all text-base font-medium mb-3">কিভাবে এনরোলমেন্ট করবো ? </p>
//                                             <p className="text-white break-all text-base font-medium mb-3">খুব সহজ আমাদের ওয়েবসাইট এ যেতে হবে,  </p>
//                                         </div>

//                                     </>
//                                 )}

//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default Announcements;

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
    <div className="mt-20 font-lora max-w-7xl mx-auto  items-start gap-5 md:gap-2 lg:gap-7  flex flex-col md:flex-row">
      <div className="  ">
        {announcements?.map((item) => (
          <div key={item._id} className="">
            {/* Left side content */}
            <div
              className={`cursor-pointer flex  gap-5 items-start bg-gradient-to-b from-[#42275a] to-[#734b6d] ml-3 lg:ml-0 w-[400px] md:w-[300px] lg:w-[660px] p-5 rounded-xl mb-5 ${selectedContent === item._id ? 'border-2' : ''
                }`}
              onClick={() => handleContentClick(item._id)}
            >
              <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
              <div>
                <h5 className="text-white text-sm font-medium mb-1">{rightSide.announcementtitle}</h5>
                <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
                <h5 className="text-white text-sm font-medium break-all">
                  {item.announcemensubdescription.slice(0, 126)} ...
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right side content */}
      <div className="custom-scrollbar bg-gradient-to-b from-[#42275a] to-[#734b6d] shadow-xl w-[400px] ml-3 lg:ml-0 md:w-[425px] lg:w-[710px] h-[500px] overflow-y-auto  rounded-xl">
        <h4 className="text-white text-xl font-semibold mb-1 sticky overflow-hidden top-0 bg-gradient-to-b from-[#42275a] to-[#734b6d] pl-5 pt-5 pb-2">
          {rightSide.announcementtitle}
        </h4>
        <div className="pl-5 pr-5 pt-1 pb-5">
          {rightSide ? (
            <div>
              <p className="text-white break-all text-base font-medium mb-10">
                {rightSide.announcemensubdescription}
              </p>
              {/* <p className="text-white break-all text-base font-medium mb-2">
                {rightSide.announcementtitle}
              </p> */}
              <p dangerouslySetInnerHTML={{ __html: rightSide.outcome }} className="text-white break-all text-base font-medium mb-2">
              </p>
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
