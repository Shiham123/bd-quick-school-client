const SoldCourseTable = ({ soldData, index }) => {
  const { paidStatus, tranjactionId, time, productDetails, orderUser } = soldData;
  const { title, price } = productDetails;
  const { email } = orderUser;
  return (
    <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
      <td scope="row" className="px-2 py-4 text-center border border-gray-400 border-collapse ">
        {index + 1}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={3}>
        {title}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={3}>
        {email}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse text-center" colSpan={4}>
        {time}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={4}>
        {tranjactionId}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse text-center">{price}</td>
      <td className="px-2 py-4 border border-gray-400 border-collapse text-center">
        {paidStatus ? 'Paid' : 'Unpaid'}
      </td>
    </tr>
  );
};

export default SoldCourseTable;
