import { GoPerson } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth/useAuth";
import '../../Pages/EditUserProfile/edithover.css'


const EditUserProfile = () => {
    const { user } = useAuth()

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
                <div className=" mt-8  gap-5 lg:gap-10">
                    <div>
                        <div className="flex items-center gap-1 mb-1 font-lora">
                            <BsCardImage className="text-xl text-white" />
                            <h3 className="text-lg  font-medium text-white/60">Profile Image</h3>
                        </div>

                        <div className="font-lora">
                            <label for="dropzone-file" className="flex items-center gap-1">
                                <FiUpload className="text-lg text-white" />
                                <h3 className="text-base  font-medium text-white">Change Profile Image</h3>
                            </label>
                            <input id="dropzone-file" type="file" className="hidden" />
                            <div className="mt-2">
                                <img className="object-cover w-28 h-28 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button className="border px-3 py-1 text-white rounded-md text-base disabled btn-grad ">Save Changes</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default EditUserProfile;