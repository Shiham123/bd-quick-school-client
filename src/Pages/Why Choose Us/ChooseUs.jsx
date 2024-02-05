import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";

const ChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <h1 className="text-4xl font-cinzel font-bold text-white text-center mb-20">Why choose us</h1>
            <div className="font-lora grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 lg:gap-16 md:ml-3">
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#DD9933]">
                        <FaGraduationCap className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Professional choice</h3>
                        <p className="text-white lg:text-base">Each lesson includes a variety of speaking, listening, translation and multiple choice challenge.</p>
                    </div>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#18BC6D]">
                        <FaBook className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Quality control</h3>
                        <p className="text-white lg:text-base">BD Quick School motivates you to stay on track by recording how many days in a row you spend learning a language.</p>
                    </div>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#FFCC51]">
                        <FaIdCard className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Hearts</h3>
                        <p className="text-white lg:text-base">Learning with BD Quick School is fun and addictive. Earn points for correct answers, race against the clock.</p>
                    </div>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className="py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#0F78EF]">
                        <TbAdjustmentsHorizontal className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Wide range of Courses</h3>
                        <p className="text-white lg:text-base">Instantly see which answers you get correct. When you miss a challenge, we’ll quickly show you how to improve. Start with Professionals.</p>
                    </div>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#F98F27]">
                        <GiTeacher className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Communicative Method</h3>
                        <p className="text-white lg:text-base">The world’s most popular language learning platform is now available for the classroom. Thousands of teachers are already using it to enhance their lessons.</p>
                    </div>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-4">
                    <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#0FB1B3]">
                        <TfiLocationPin className="text-4xl text-white" />
                    </div>
                    <div className="w-72 md:w-64 lg:w-72">
                        <h3 className="text-white text-xl lg:text-2xl mb-5">Central Location</h3>
                        <p className="text-white lg:text-base">Hearts keep your lessons alive! You lose them when you answer incorrectly. When you’re out of hearts, start over and try again.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;