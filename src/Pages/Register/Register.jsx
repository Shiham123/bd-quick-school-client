

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
                </div>
            </div>
        </div>
    );
};

export default Register;