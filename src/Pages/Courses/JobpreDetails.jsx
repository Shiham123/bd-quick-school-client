import { useLoaderData } from "react-router-dom";





const JobpreDetails = () => {


    const detailsJob = useLoaderData();
    console.log(detailsJob)

 
    
 
  
    return (
        <div>
            <div className=" w-[1100px] border-2 rounded-lg border-black  h-[500px] mt-32 mx-auto flex justify-between gap-2 items-center">
                <div className="w-[50%] h-full ">
                    <figure><img className="w-full h-[496px] " src={detailsJob.image} alt="Shoes" /></figure>

                </div>
               
                <div className="w-[50%]  h-[500px] pt-10 px-6 text-white">
                    <h2 className="font-bold text-4xl my-5 font-lora ">{detailsJob.title}</h2>
                    <p className="font-medium text-xl mb-2 font-lora">{detailsJob.details}</p>
                    <p className="font-medium text-xl mb-6 font-lora">{detailsJob.outcome}</p>
                    <p className="font-medium text-xl mb-6 font-lora">Course Price : ${detailsJob.price}</p>
                    <p className="font-medium text-xl mb-6 font-lora"> Teacher Name : {detailsJob.teachername}</p>
                    <p className="font-medium text-xl mb-6 font-lora"> Teacher Designation : {detailsJob.designation}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default JobpreDetails;