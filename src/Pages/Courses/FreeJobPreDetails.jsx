import { useLoaderData } from "react-router-dom";


const FreeJobPreDetails = () => {

    const freedetailsJob = useLoaderData();
    console.log(freedetailsJob)

    return (
        <div>
            <div className=" w-[1100px] border-4 rounded-lg border-black  h-[500px] mt-32 mx-auto flex justify-between gap-2 items-center">
                <div className="w-[50%] h-full ">
                    <figure><img className="w-full h-[492px] " src={freedetailsJob.image} alt="Shoes" /></figure>

                </div>

                <div className="w-[50%]  h-[500px] pt-28 px-6">
                    <h2 className="font-bold text-4xl my-6 font-lora ">{freedetailsJob.provider}</h2>
                    <p className="font-medium text-xl mb-6 font-lora">{freedetailsJob.course}</p>
                    <p className="font-medium text-xl mb-6 font-lora">Duration : {freedetailsJob.duration}</p>
                    <p className="font-medium text-xl mb-6 font-lora">{freedetailsJob.certification}</p>
                    {/* <p className="font-medium text-xl mb-6 font-lora"> Course  : {freedetailsJob.price}</p> */}
                    {/* <p className="font-medium text-xl mb-6 font-lora"> Teacher Designation : {freedetailsJob.designation}</p> */}

                </div>
            </div>
            
        </div>
    );
};

export default FreeJobPreDetails;