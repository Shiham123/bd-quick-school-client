import { FaGraduationCap } from "react-icons/fa";

const ChooseUs = () => {
    return (
        <div className="container mx-auto mb-20">
            <h1 className="text-4xl font-cinzel font-bold text-white text-center mb-20">Why choose us</h1>
            <div className="font-lora">
                <div className="flex items-start gap-4">
                    <div className=" py-5 px-5 border rounded-full bg-[#DD9933]">
                        <FaGraduationCap className="text-4xl text-white" />
                    </div>
                    <div className="lg:w-72">
                        <h3 className="text-white text-2xl mb-5">Professional choice</h3>
                        <p className="text-white text-base">Each lesson includes a variety of speaking, listening, translation and multiple choice challenge.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;