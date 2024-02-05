

const CoursesType = () => {
    return (
        <div className="max-w-7xl mx-auto mb-32">
            <h1 className="text-center text-white text-4xl font-cinzel font-bold mb-20">Overview</h1>
            <div className="flex items-center justify-center gap-24">
                <div className="font-lora flex items-start gap-10">
                    <img src="https://i.ibb.co/tpSndm7/icons8-training-64.png" className="w-[103px] mt-3" alt="" />
                    <div className="lg:w-[300px] ">
                        <h2 className="text-3xl text-white font-semibold mb-5">View Courses</h2>
                        <p className="text-base text-white mb-5">Here you can find any courses that suit you. Simply navigate and select the course.</p>
                        <button className="px-9 py-3 bg-[#3FA385] hover:bg-violet-900 text-lg rounded-full text-white uppercase">Start Searching</button>
                    </div>
                </div>
                <div className="divider divider-accent lg:divider-horizontal"></div>
                <div className="font-lora flex items-start gap-10">
                    <img src="https://i.ibb.co/G2xW95S/icons8-deal-64.png" className="w-[103px] mt-3" alt="" />
                    <div className="lg:w-[300px]">
                        <h2 className="text-3xl text-white font-semibold mb-5">Premium Courses</h2>
                        <p className="text-base text-white mb-5">Become one of our exclusive members and get more exquisite and advanced options.</p>
                        <button className="px-9 py-3 border hover:bg-[#3FA385] btn-outline text-lg rounded-full text-white uppercase">Get Premium</button>
                    </div>
                </div>
            </div>
            <hr className="w-[400px] mx-auto mt-32 mb-10 border-2" />
        </div>
    );
};

export default CoursesType;