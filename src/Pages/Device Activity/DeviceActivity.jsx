import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import DeviceActivityTable from "./DeviceActivityTable";


const DeviceActivity = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: device = [], refetch } = useQuery({
        queryKey: ['device', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/device/update/${user?.email}`)
            // console.log(res.data)
            return res.data
        }
    })



    return (
        <div>
            <div className="relative overflow-x-auto shadow-md ">

                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    {/* Table Heading Start Here */}
                    <thead className="text-xs text-white uppercase   border dark:text-white ">
                        <tr className="font-cinzel">
                            <th scope="col" className="px-6 py-3 border-collapse border">
                                Serial
                            </th>
                            <th scope="col" className="px-6 py-3 border border-collapse">
                                Platform
                            </th>
                            <th scope="col" className="px-6 py-3 border-collapse border">
                                Browser
                            </th>
                            <th scope="col" className="px-6 py-3 border border-collapse">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 border-collapse border">
                                Action
                            </th>

                        </tr>
                    </thead>
                    {/* Table Heading End Here */}
                    {/* Table Data Fetching */}
                    <tbody className="font-lora">
                        {
                            device.map((item, index) => <DeviceActivityTable key={item._id} item={item} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeviceActivity;