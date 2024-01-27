import { GoPerson } from "react-icons/go";
import useAuth from "../../Hooks/useAuth/useAuth";
import { FiMail } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";


const EditUserProfile = () => {
    
    return (
        <div>
            <div>

                <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
                    <div>
                        <div className="flex items-center gap-1 mb-1 font-lora">
                            <GoPerson className="text-xl text-white" />
                            <h3 className="text-lg  font-medium text-white/60">Full Name</h3>
                        </div>
                        <input className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none" type="text" name="" id="" placeholder="Name Here" />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 mb-1 font-lora">
                            <FiMail className="text-xl text-white" />
                            <h3 className="text-lg  font-medium text-white/60">Email</h3>
                        </div>
                        <input className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none" type="text" name="" id="" />
                    </div>

                </div>
                <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
                    <div>
                        <div className="flex items-center gap-1 mb-1 font-lora">
                            <PiStudent className="text-xl text-white" />
                            <h3 className="text-lg  font-medium text-white/60">Student ID</h3>
                        </div>
                        <input className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none" type="text" name="" id="" placeholder="Name Here" />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 mb-1 font-lora">
                            <FaMobileAlt className="text-xl text-white" />
                            <h3 className="text-lg  font-medium text-white/60">Mobile Number</h3>
                        </div>
                        <input className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none" type="text" name="" id="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EditUserProfile;