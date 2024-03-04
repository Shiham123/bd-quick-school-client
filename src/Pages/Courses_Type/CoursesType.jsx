

const CoursesType = () => {
    return (
        <div className="max-w-7xl mx-auto mb-32">
            <h1 className="text-center text-white xs:text-lg sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold mb-20">Overview</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-24">
                <div className="font-lora flex items-start xs:gap-5 sm:gap-7 semi-sm:gap-9 md:gap-10 mx-2 md:mx-0 lg:mx-0">
                    <img src="https://i.ibb.co/tpSndm7/icons8-training-64.png" className="w-20 semi-sm:w-[103px] mt-3" alt="" />
                    <div className=" xs:w-64 sm:w-72 semi-sm:w-80 md:w-96 lg:w-[300px] ">
                        <h2 className="xs:text-xl sm:text-2xl semi-sm:text-2xl md:text-3xl text-white font-semibold mb-5">View Courses</h2>
                        <p className="xs:text-sm sm:text-sm semi-sm:text-base text-white mb-5">Here you can find any courses that suit you. Simply navigate and select the course.</p>
                        <button className="xs:px-4 sm:px-5 semi-sm:px-9 py-3 bg-[#3FA385] hover:bg-violet-900 xs:text-sm sm:text-sm semi-sm:text-lg rounded-full text-white uppercase">Start Searching</button>
                    </div>
                </div>
                <div className="divider divider-accent lg:divider-horizontal mx-3 md:mx-10 lg:mx-0"></div>
                <div className="font-lora flex items-start xs:gap-5 sm:gap-7 semi-sm:gap-9 md:gap-10 mx-1 md:mx-0 lg:mx-0">
                    <img src="https://i.ibb.co/G2xW95S/icons8-deal-64.png" className="w-20 semi-sm:w-[103px] mt-3" alt="" />
                    <div className=" md:w-96 lg:w-[300px]">
                        <h2 className="xs:text-xl sm:text-2xl semi-sm:text-2xl md:text-3xl text-white font-semibold mb-5">Premium Courses</h2>
                        <p className="xs:text-sm sm:text-sm semi-sm:text-base text-white mb-5">Become one of our exclusive members and get more exquisite and advanced options.</p>
                        <button className="xs:px-4 sm:px-5 semi-sm:px-9 py-3 border hover:bg-[#3FA385] btn-outline xs:text-sm sm:text-sm semi-sm:text-lg rounded-full text-white uppercase">Get Premium</button>
                    </div>
                </div>
            </div>
            <hr className=" xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] mx-auto mt-32 mb-10 border-2" />
        </div>
    );
};

export default CoursesType;