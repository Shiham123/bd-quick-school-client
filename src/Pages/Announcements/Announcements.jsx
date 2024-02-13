import './Announcements.css'; // Import your CSS file

const Announcements = () => {
    return (
        <div className="font-lora max-w-7xl mx-auto flex items-start gap-5">
            <div className="flex gap-5 items-start border-2 bg-gradient-to-b from-[#42275a] to-[#734b6d] w-[660px] p-5 rounded-xl">
                <img src="https://i.ibb.co/kH6SbQN/download.png" alt="" />
                <div>
                    <h5 className="text-white text-sm font-medium mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h5>
                    <h5 className="text-white text-sm font-medium mb-2">Dec 24th 2021, 12:00 pm</h5>
                    <h5 className="text-white text-sm font-medium break-all">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ...</h5>
                </div>
            </div>
            <div className=" custom-scrollbar bg-gradient-to-b from-[#42275a] to-[#734b6d] shadow-xl w-[710px] h-[500px] overflow-y-auto p-5 rounded-xl">
                <h4 className="text-white text-lg font-semibold mb-1">মাত্র 12 ঘণ্টা বাকি !!!!</h4>
                <p className="text-white break-all text-base font-medium mb-14">Complete Web development with Jhankar Mahbub কোর্সের ৫ম ব্যাচের এনরলমেন্ট শেষ হওয়ার আর মাত্র 12 ঘণ্টা বাকি। এনরোলমেন্ট শেষ সময় ২৪ তারিখ রাত ১১.৫৯ মিনিট। এর পর আর এনরোলমেন্ট করা যাবে না।</p>
                <p className="text-white break-all text-base font-medium mb-2">আপনার যদি ফাইনেনশিয়াল সমস্যা থাকে তাহলে কুপন কোড ব্যবহার করতে পারেন।</p>
                <p className="text-white break-all text-base font-medium mb-14">কুপনঃ hardwork , ১০০০ টাকার ডিস্কাউন্ট থাকবে।</p>
                <p className="text-white break-all text-base font-medium mb-3">কিভাবে এনরোলমেন্ট করবো ? </p>
                <p className="text-white break-all text-base font-medium mb-3">খুব সহজ আমাদের ওয়েবসাইট এ যেতে হবে,  </p>
                <p className="text-white break-all text-base font-medium mb-3">লিঙ্কঃ https://web.programming-hero.com/  </p>
                <p className="text-white break-all text-base font-medium mb-3">বাকি প্রসেস গুলো নিচের ভিডিও তে দেওয়া আছে। এনরোলমেন্ট শেষ হলে ইমেইল, এসএমএস পেয়ে যাবে।  </p>
                <p className="text-white break-all text-base font-medium mb-3">আমাদের সাথে যোগাযোগ করার মাধ্যমঃ</p>
                <p className="text-white break-all text-base font-medium mb-3">ওয়েবসাইটঃ https://web.programming-hero.com/</p>
                <p className="text-white break-all text-base font-medium mb-3">মেইলঃ web@programming-hero.com</p>
                <p className="text-white break-all text-base font-medium mb-3">ফোনঃ 01322810867 , 01322810869 , 01322901104 </p>
                <p className="text-white break-all text-base font-medium mb-3">পেইজঃ https://web.facebook.com/programmingHero  </p>
            </div>
        </div>
    );
};

export default Announcements;