import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <div className="flex justify-center items-center font-lora text-[#333] h-full min-h-screen p-4" style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="max-w-md w-full mx-auto">
                    <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-xl">
                        <div className="mb-10">
                            <h3 className="text-3xl font-extrabold ">Sign in</h3>
                        </div>
                        {/* email  */}
                        <div>
                            <div className="relative flex items-center">
                                <MdOutlineEmail className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                                <input

                                    type="email"

                                    className="bg-transparent w-full text-sm border-b border-[#333] px-1 lg:px-2 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter Email"
                                />
                            </div>

                        </div>
                        {/* password */}
                        <div className="mt-8">
                            <div className="relative flex items-center">
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible className='text-2xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-2xl'></AiOutlineEye>
                                    }
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="bg-transparent w-full text-sm border-b border-[#333] px-1 lg:px-2 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter Password"
                                />
                            </div>

                        </div>
                        {/* remember and forget password */}
                        <div className="flex items-center justify-between gap-2 mt-6">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a className="text-sm font-semibold hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        {/* Button And Linked to Register Page */}
                        <div className="mt-10">
                            <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
                                Sign in
                            </button>
                            <p className="text-sm text-center mt-6">Don`t have an account <Link to="/register"
                                className="font-semibold hover:underline ml-1 whitespace-nowrap">Register Here</Link></p>
                        </div>
                        <hr className="my-6 border-gray-500" />

                        {/* social button */}
                        <div className="space-x-8 flex justify-center">
                            <button onClick={() => handleSocialSignin(googleLogin)} type="button" className="border-none outline-none">
                                <FcGoogle className="text-4xl"></FcGoogle>
                            </button>
                            <button onClick={() => handleSocialSignin(githubLogin)} type="button" className="border-none outline-none">
                                <ImGithub className="text-4xl"></ImGithub>
                            </button>
                            <button type="button" className="border-none outline-none">
                                <BsFacebook className="text-4xl  text-sky-700 font-bold"></BsFacebook>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;