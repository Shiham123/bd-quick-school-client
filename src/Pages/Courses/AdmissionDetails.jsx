import { useLoaderData } from "react-router-dom";


const AdmissionDetails = () => {
    const detailsAdmission = useLoaderData();
    console.log(detailsAdmission)


    return (
        <div>
            <div className=" w-[1100px] border-4 rounded-lg border-black  h-[500px] mt-32 mx-auto flex justify-between gap-2 items-center">
                <div className="w-[50%] h-full ">
                    <figure><img className="w-full h-[492px] " src={detailsAdmission.image} alt="Shoes" /></figure>

                </div>

                <div className="w-[50%]  h-[500px] pt-10 px-6 text-white">
                    <h2 className="font-bold text-4xl my-5 font-lora  ">{detailsAdmission.title}</h2>
                    <p className="font-medium text-xl mb-2 font-lora">{detailsAdmission.details}</p>
                    <p className="font-medium text-xl mb-6 font-lora">{detailsAdmission.outcome}</p>
                    <p className="font-medium text-xl mb-6 font-lora">Course Price : ${detailsAdmission.price}</p>
                    <p className="font-medium text-xl mb-6 font-lora"> Teacher Name : {detailsAdmission.teachername}</p>
                    <p className="font-medium text-xl mb-6 font-lora"> Teacher Designation : {detailsAdmission.designation}</p>

                </div>
            </div>
        </div>
    );
};

export default AdmissionDetails;