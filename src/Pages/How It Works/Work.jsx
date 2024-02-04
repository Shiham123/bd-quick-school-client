

const Work = () => {
    return (
        <div className="max-w-7xl mx-auto mb-32">
            <h1 className="text-white text-4xl font-cinzel font-semibold text-center mb-10">How it works?</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="w-[350px] mx-auto">
                    <img src="https://i.ibb.co/4mFY1sX/25-layers.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold text-white text-center mt-4 mb-6">Sign up</h2>
                    <p className="text-white/70 text-center">Our services and collections adhere to cutting-edge solutions in the design world.</p>
                </div>
                <div className="w-[350px] mx-auto">
                    <img src="https://i.ibb.co/NScDsqv/21-layers-123x123-1.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold text-white text-center mt-4 mb-6">Select course</h2>
                    <p className="text-white/70 text-center">We have everything for effective learning and delivery of assignments by students.</p>
                </div>
                <div className="w-[350px] mx-auto">
                    <img src="https://i.ibb.co/Jn9Fbmy/28-layers.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold text-white text-center mt-4 mb-6">Start Learning</h2>
                    <p className="text-white/70 text-center">After completing the course, you will receive a certificate confirming your knowledge.</p>
                </div>

            </div>
        </div>
    );
};

export default Work;