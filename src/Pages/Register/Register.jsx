import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="font-poppins text-gray-800  max-w-4xl flex items-center mx-auto lg:h-screen p-4" >
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
                                    <input name="name" type="text" className="bg-white border border-dashed border-gray-300 w-[350px] md:w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                                    <FaUserCheck className="text-2xl absolute right-3"></FaUserCheck>
                                </div>
                            </div>
                            {/* email */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Email </label>
                                <div className="relative flex items-center">
                                    <input

                                        name="email" type="email" className="bg-white border border-dashed border-gray-300 w-[350px] md:w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                    <MdOutlineEmail className="text-2xl absolute right-3"></MdOutlineEmail>
                                </div>
                            </div>
                            {/* password */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Password</label>
                                <div className="relative flex items-center">
                                    <input

                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="bg-white border border-dashed border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter password"
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => { setShowPassword(!showPassword) }} >
                                        {
                                            showPassword ? <AiOutlineEyeInvisible className='text-2xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-2xl'></AiOutlineEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            {/* photo url */}
                            <div>
                                <label className="text-sm mb-2 block text-white/90 font-bold">Photo</label>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="text-4xl"></IoCloudUploadOutline>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input

                                            id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            {/* terms and condition */}
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-white/90">
                                    I accept the <a className="text-white/90 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>



                        </div>
                        <div className="!mt-10">
                            <button type="submit" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gradient-to-r from-violet-900 to-violet-700  focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center text-white/90 font-medium">Already have an account? <Link to="/login" className="text-white/90 font-bold hover:underline ml-1">Login here</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;