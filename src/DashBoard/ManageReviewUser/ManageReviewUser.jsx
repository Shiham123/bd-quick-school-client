// import ManageUserTable from './ManageUserTable';

import { useGetAllQUizeUsersQuery } from '../../redux/services/QuizeApiSlice';
import ManageQuizeTable from './ManageQuizeUserTable';

const ManageQuizeUser = () => {
  const { data } = useGetAllQUizeUsersQuery();
  return (
    <div className="lg:p-16 min-h-screen">
      <h1 className="xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel">Manage Quize Users</h1>
      <hr className="mb-5 border-2 mt-2 border-black xs:w-[270px] semi-sm:w-[330px] md:w-[400px] mx-auto" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm  rtl:text-right text-blue-100 dark:text-blue-100">
          {/* Table Heading Start Here */}
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr className="font-cinzel font-bold">
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                #
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse" colSpan={3}>
                User Email
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse" colSpan={2}>
                User Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Result
              </th>
            </tr>
          </thead>
          {/* Table Heading End Here */}
          <tbody className="font-lora">
            {data?.map((quizeUser, index) => (
              <ManageQuizeTable key={quizeUser._id} quizeUser={quizeUser} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageQuizeUser;
