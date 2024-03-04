import { useLoaderData } from "react-router-dom";





const JobpreDetails = () => {


    const detailsJob = useLoaderData();
    console.log(detailsJob)

 
    
 
  
    return (
        <div>


            {/* course details */}
            <div className=" w-[420px] md:w-[720px] lg:w-[1200px]  mx-auto">
                <h1 className="text-white font-bold mt-10 md:mt-26  mb-10 lg:mb-20  text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-lora ">Job Preparation Course Details</h1>

            </div>

            <div className="w-[400px] md:w-[720px] lg:w-[1200px]   md:h-[700px] lg:h-[350px]  mx-auto flex flex-col-reverse lg:flex-row justify-between  md:mb-32 lg:mb-40 ">

                <div className=" lg:w-[50%]  text-left md:text-left  md:h-[300px] lg:h-[350px] text-white  ml-5 md:ml-0">
                    <h2 className="font-bold text-xl md:text-xl lg:text-3xl mb-5 font-lora ">{detailsJob.title}</h2>

                    {/* <p className="font-medium text-base  md:text-base lg:text-xl mb-6 font-lora">{detailsJob.outcome}</p> */}
                    <p className="font-medium text-base md:text-base lg:text-xl mb-6 font-lora">{detailsJob.shortdescription}</p>
                    <p className="font-medium text-base md:text-base lg:text-base mb-2 font-lora">{detailsJob.details}</p>
                    <p className="font-medium text-base md:text-base lg:text-xl mt-4 mb-6 font-lora">Course Price : ${detailsJob.price}</p>

                </div>

                <div className=" lg:w-[500px] md:h-[300px] lg:h-[350px] mb-6 md:mb-0  ">
                    <figure> <img className="w-full h-[300px] md:h-[300px] lg:h-[350px] rounded-lg " src={detailsJob.image} alt="Shoes" /></figure>

                </div>
            </div>

            {/* teacher details */}
            {/* teacher details */}

            <div className=" w-[420px] md:w-[720px] lg:w-[1200px]  mx-auto">
                <h1 className="text-white font-bold mb-10 text-3xl md:text-3xl lg:text-4xl font-lora text-center md:text-left">Teacher Details</h1>

            </div>

            <div className="w-[410px] md:w-[720px] lg:w-[1200px]   md:h-[410px]  lg:h-[500px]   md:flex justify-start md:gap-10 lg:gap-20  mx-auto">

                <div className="  ">
                    <figure> <img className="w-[300px] md:w-[300px] h-[200px] md:h-[190px] lg:h-[200px] rounded-lg mx-auto mb-6" src={detailsJob.teacherImage} alt="Shoes" /></figure>

                </div>

                <div className=" md:w-[500px] lg:w-[650px]    text-center md:text-left    lg:h-[500px]   text-white">
                    <h2 className="font-bold text-2xl lg:text-3xl mb-2 font-lora ">{detailsJob.teachername}</h2>
                    <p className="font-medium text-xl md:text-lg lg:text-xl mb-2 font-lora">{detailsJob.designation}</p>

                    <p className="font-medium text-xl md:text-lg lg:text-xl mt-6 mb-2 font-lora">Education :</p>

                    <p className="font-medium text-lg  md:text-base lg:text-xl mb-2 font-lora">{detailsJob.graduation}</p>
                    <p className="font-medium text-lg md:text-base lg:text-xl mb-6 font-lora">{detailsJob.postgraduation}</p>


                </div>
            </div>

            {/* <div className="w-[420px] md:w-[720px] lg:w-[1200px] border-2 rounded-lg border-black md:h-[410px]  lg:h-[500px] mt-32 mx-auto md:flex justify-between gap-2 items-center">
                <div className="md:w-[50%] h-[300px] md:h-full ">
                    <figure> <img className="w-full h-[300px] md:h-[406px] lg:h-[496px] " src={detailsJob.image} alt="Shoes" /></figure>

                </div>
               
                <div className=" w-full text-center md:text-left md:w-[50%] md:h-[px]  lg:h-[500px] lg:pt-10 md:px-2 lg:px-6 text-white">
                    <h2 className="font-bold text-2xl lg:text-4xl my-5 font-lora ">{detailsJob.title}</h2>
                    <p className="font-medium text-xl md:text-base lg:text-xl mb-2 font-lora">{detailsJob.details}</p>
                    <p className="font-medium text-xl  md:text-base lg:text-xl mb-6 font-lora">{detailsJob.outcome}</p>
                    <p className="font-medium text-xl md:text-base lg:text-xl mb-6 font-lora">Course Price : ${detailsJob.price}</p>
                    <p className="font-medium text-xl md:text-base lg:text-xl mb-6 font-lora"> Teacher Name : {detailsJob.teachername}</p>
                    <p className="font-medium  text-xl md:text-base lg:text-xl mb-4 md:mb-2 lg:mb-6 font-lora"> Teacher Designation : {detailsJob.designation}</p>

                    
                </div>
            </div> */}
        </div>
    );
};

export default JobpreDetails;