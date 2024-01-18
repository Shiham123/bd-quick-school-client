import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Register = () => {


    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="font-poppins text-gray-800  max-w-4xl flex items-center mx-auto md:h-screen p-4" >
                <div className="grid md:grid-cols-3 items-center  shadow-2xl shadow-gray-200 rounded-xl overflow-hidden">
                    <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-violet-900 to-violet-700 lg:px-8 px-4 py-4">
                        {/* text description */}
                        <div className="hidden md:flex md:flex-col gap-20">
                            <div>
                                <h4 className=" text-white text-lg font-bold">Create Your Account</h4>
                                <p className="text-[13px] text-[#FFFF] mt-2">Welcome to our registration page! Get started by creating your account.</p>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-bold">Simple & Secure Registration</h4>
                                <p className="text-[13px] text-[#FFFF] mt-2">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                        <div className="mb-6">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white">Create an account</h3>
                        </div>
                        <div className="space-y-5">
                            {/* name */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" className="bg-white border border-gray-300 w-[350px] md:w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                                    <FaUserCheck className="text-2xl absolute right-3"></FaUserCheck>
                                </div>
                            </div>
                            {/* email */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Email </label>
                                <div className="relative flex items-center">
                                    <input

                                        name="email" type="email" className="bg-white border border-gray-300 w-[350px] md:w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                    <MdOutlineEmail className="text-2xl absolute right-3"></MdOutlineEmail>
                                </div>
                            </div>
                            {/* password */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Password</label>
                                <div className="relative flex items-center">
                                    <input

                                        name="password"
                                        required
                                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter password"
                                    />
                                    
                                </div>

                            </div>

                            


                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;