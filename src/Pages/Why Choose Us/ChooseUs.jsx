import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";

const ChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <h1 className="text-4xl font-cinzel font-bold text-white text-center mb-20">Why choose us</h1>
            <div className="font-lora grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#DD9933]">
                        <FaGraduationCap className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Professional choice</h3>
                        <p className="text-white text-base">Each lesson includes a variety of speaking, listening, translation and multiple choice challenge.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#18BC6D]">
                        <FaBook className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Quality control</h3>
                        <p className="text-white text-base">MasterStudy motivates you to stay on track by recording how many days in a row you spend learning a language.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#FFCC51]">
                        <FaIdCard className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Hearts</h3>
                        <p className="text-white text-base">Learning with MasterStudy is fun and addictive. Earn points for correct answers, race against the clock.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#0F78EF]">
                        <TbAdjustmentsHorizontal className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Wide range of Courses</h3>
                        <p className="text-white text-base">Instantly see which answers you get correct. When you miss a challenge, we’ll quickly show you how to improve. Start with Professionals.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#F98F27]">
                        <GiTeacher className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Communicative Method</h3>
                        <p className="text-white text-base">The world’s most popular language learning platform is now available for the classroom. Thousands of teachers are already using it to enhance their lessons.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;