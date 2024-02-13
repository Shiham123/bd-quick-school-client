import './Announcements.css'; // Import your CSS file

const Announcements = () => {
    return (
        <div className="font-lora max-w-7xl mx-auto flex items-start gap-5">
            <div className="flex gap-5 items-start border-2 bg-[#383838] w-[660px] p-5 rounded-xl">
                <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
                <div>
                    <h5 className="text-white text-sm font-medium mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h5>
                    <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
                    <h5 className="text-white text-sm font-medium break-all">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ...</h5>
                </div>
            </div>
            
        </div>
    );
};

export default Announcements;