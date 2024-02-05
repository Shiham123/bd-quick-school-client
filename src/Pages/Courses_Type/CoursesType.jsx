

const CoursesType = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <div className="font-lora flex items-start gap-10">
                    <img src="https://i.ibb.co/tpSndm7/icons8-training-64.png" className="w-[103px] mt-3" alt="" />
                    <div className="lg:w-[300px] border-r-2">
                        <h2 className="text-3xl text-white font-semibold mb-5">View Courses</h2>
                        <p className="text-base text-white mb-5">Here you can find any courses that suit you. Simply navigate and select the course.</p>
                        <button className="px-9 py-3 bg-[#3FA385] text-lg rounded-full text-white">Start Searching</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesType;