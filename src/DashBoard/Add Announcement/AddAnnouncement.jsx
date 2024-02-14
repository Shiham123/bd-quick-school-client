import { useState } from "react";
import ReactQuill from 'react-quill';

const AddAnnouncement = () => {
    const [outcome, setOutcome] = useState('');

    //React quil Modules Design
    const modules = {
        toolbar: [['bold'], ['blockquote'], [{ list: 'bullet' }]],
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-cinzel mt-5">Add Annnouncement</h1>
            <hr className="mb-5 border-2 mt-2 border-black w-[430px] mx-auto" />
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
    );
};

export default AddAnnouncement;