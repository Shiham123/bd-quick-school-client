const ManageQuizeTable = ({ quizeUser, index }) => {
  const { email, name, resultText } = quizeUser;
  return (
    <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
      <td scope="row" className="px-2 py-4 text-center border border-gray-400 border-collapse ">
        {index + 1}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={3}>
        {email}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={2}>
        {name}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse">{resultText}</td>
    </tr>
  );
};

export default ManageQuizeTable;
