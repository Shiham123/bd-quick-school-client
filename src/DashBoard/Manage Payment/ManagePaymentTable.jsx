import { FcPaid } from "react-icons/fc";

const ManagePaymentTable = ({ payment, index }) => {
    return (
        <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {index + 1}
            </th>

            <td className="px-6 py-4">
                {payment.customerName}
            </td>
            <td className="px-6 py-4">
                {payment.cus_email}
            </td>
            <td className="px-6 py-4">
                {payment.tranjactionId}
            </td>
            <td className="px-6 py-4">
                {payment.totalamount}
            </td>
            <td className="px-6 py-4">
                {payment.product_name}
            </td>
            <td className="px-6 py-4">
                {payment.time}
            </td>
            <td className="px-6 py-4 flex items-center gap-1">
                <span>Paid</span> <span><FcPaid className="text-2xl"/></span>
            </td>

        </tr>
    );
};

export default ManagePaymentTable;