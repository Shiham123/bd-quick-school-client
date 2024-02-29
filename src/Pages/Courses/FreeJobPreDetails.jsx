import { useLoaderData } from "react-router-dom";


const FreeJobPreDetails = () => {

    const freedetailsJob = useLoaderData();
    console.log(freedetailsJob)

    return (
        <div>

          


            {/* <div>
                <div className="w-[420px] md:w-[720px] lg:w-[1000px] border-2 rounded-lg border-black md:h-[354px]  lg:h-[390px] mt-32 mx-auto md:flex justify-between gap-2 items-center">
                    <div className="md:w-[50%] h-[300px] md:h-full ">
                        <figure> <img className="w-full h-[300px] md:h-[350px] lg:h-[386px] " src={freedetailsJob.image} alt="Shoes" /></figure>

                    </div>

                    <div className=" w-full text-center md:text-left md:w-[50%] md:h-[px]  lg:h-[500px] lg:pt-10 md:px-2 lg:px-6 text-white lg:mt-36">
                        <h2 className="font-bold text-2xl lg:text-4xl my-5 font-lora ">{freedetailsJob.provider}</h2>
                        <p className="font-medium text-xl md:text-base lg:text-xl mb-2 font-lora">{freedetailsJob.course}</p>
                        <p className="font-medium text-xl  md:text-base lg:text-xl mb-6 font-lora">Duration : {freedetailsJob.duration}</p>
                        <p className="font-medium  text-xl md:text-base lg:text-xl mb-4 md:mb-2 lg:mb-2 font-lora"> {freedetailsJob.certification}</p>


                    </div>
                </div>
            </div> */}


            
        </div>
    );
};

export default FreeJobPreDetails;