import { useState } from "react";
import ReactQuill from 'react-quill';

const AddAnnouncement = () => {
    const [outcome, setOutcome] = useState('');

    //React quil Modules Design
    const modules = {
        toolbar: [['bold'], ['blockquote'], [{ list: 'bullet' }]],
    };

    return (
        <div className="mx-auto px-4">
            <h1 className=" text-2xl lg:text-4xl text-center font-cinzel mt-5">Add Annnouncement</h1>
            <hr className="mb-5 border-2 mt-2 border-black w-[300px] lg:w-[430px] mx-auto" />
            <section className="lg:p-28">
                <form className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid gap-6  font-lora dark:bg-gray-900">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            {/* Course Title */}
                            <div className="col-span-full lg:col-span-3">
                                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                                    Announcement Title <span className="text-red-700">*</span>
                                </h2>
                                <input
                                    className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                                    type="text"
                                    name="title"

                                    placeholder="Enter Announcement Title Here"
                                    id=""
                                />
                            </div>
                            



                            {/* Course Outcome */}
                            <div className="col-span-full">
                                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                                    Course Outcome <span className="text-red-700">*</span>
                                </h2>
                                <ReactQuill
                                    modules={modules}
                                    className="h-32 mb-12"
                                    value={outcome}
                                    onChange={setOutcome}
                                    theme="snow"
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddAnnouncement;