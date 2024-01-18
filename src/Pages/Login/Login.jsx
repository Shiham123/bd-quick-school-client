import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4" style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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
                                    placeholder="Enter email"
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
                                    placeholder="Enter password"
                                />
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;