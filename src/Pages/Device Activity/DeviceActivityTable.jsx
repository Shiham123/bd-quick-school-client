import moment from "moment";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const DeviceActivityTable = ({ item, index, refetch }) => {
    const { logOut } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()




    const handleActivityDelete = itemId => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/api/v1/device/${itemId}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Device Removed.",
                                icon: "success"
                            });
                            logOut()
                            navigate('/login')
                        }
                    })
            }
        });
    }


    // Parse the date string using Moment.js
    const date = moment(item.date, 'YYYY MM DD HH mm');

    // Format the date in the desired format
    const formattedDate = date.format('DD-MM-YYYY hh:mm A');
    const deviceContent = item.device === "Unknown Device" ? item.os : item.device;

    return (
        <tr className=" border-b  ">
            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-blue-100">
                {index + 1}
            </th>

            <td className="px-6 py-4">
                {deviceContent}
            </td>
            <td className="px-6 py-4">
                {item.browser}
            </td>
            <td className="px-6 py-4">
                {formattedDate}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleActivityDelete(item._id)} className="">Remove</button>
            </td>



        </tr>
    );
};

export default DeviceActivityTable;