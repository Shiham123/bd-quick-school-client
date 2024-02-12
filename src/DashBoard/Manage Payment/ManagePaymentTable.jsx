import { FcPaid } from 'react-icons/fc';

const ManagePaymentTable = ({ payment, index }) => {
  const { tranjactionId, time, productDetails, orderUser } = payment;
  const { title, price } = productDetails;
  const { email, name } = orderUser;
  return (
    <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
      >
        {index + 1}
      </th>

      <td className="px-2 py-4 border border-gray-400 border-collapse">{name}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse">{email}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse">{title}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse text-center">{price}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse">{tranjactionId}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse">{time}</td>
      <td className="px-6 py-4 flex items-center gap-1">
        <span>Paid</span>{' '}
        <span>
          <FcPaid className="text-2xl" />
        </span>
      </td>
    </tr>
  );
};

export default ManagePaymentTable;
