import { useGetAllOrdersQuery } from '../../redux/services/OrderApiSlice';
import SoldCourseTable from './SoldCoursesTable';

const SoldCourses = () => {
  const { data } = useGetAllOrdersQuery();
  return (
    <div className="lg:p-16 min-h-screen">
      <h1 className="xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel">Sold Courses</h1>
      <hr className="mb-5 border-2 mt-2 border-black xs:w-[200px] semi-sm:w-[240px] md:w-[280px] mx-auto" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm  rtl:text-right text-blue-100 dark:text-blue-100">
          {/* Table Heading Start Here */}
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr className="font-cinzel font-bold">
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-gray-400 border-collapse"
                colSpan={3}
              >
                Course Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-gray-400 border-collapse"
                colSpan={3}
              >
                Order user Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-gray-400 border-collapse"
                colSpan={4}
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-gray-400 border-collapse"
                colSpan={4}
              >
                Txd Id
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Price
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Paid Status
              </th>
            </tr>
          </thead>
          {/* Table Heading End Here */}
          <tbody className="font-lora">
            {data?.map((soldData, index) => (
              <SoldCourseTable key={soldData._id} soldData={soldData} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldCourses;
