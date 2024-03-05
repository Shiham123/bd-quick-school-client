import ManageCoursesTable from './ManageCoursesTable';
import { useGetAllServicesQuery } from '../../redux/services/ServicesApiSlice';

const ManageCourses = () => {
  const { data } = useGetAllServicesQuery();

  return (
    <div className="lg:p-16 min-h-screen">
      <h1 className=" xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel">Manage Courses</h1>
      <hr className="mb-5 border-2 mt-2 border-black xs:w-[230px] semi-sm:w-[280px] md:w-[330px] mx-auto" />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm border border-gray-400 border-collapse  rtl:text-right text-blue-100 dark:text-blue-100">
          {/* Table Heading Start Here */}
          <thead className="text-xs text-white uppercase bg-blue-700 border-b border-blue-400 dark:text-white">
            <tr className="font-cinzel">
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse font-bold"
              >
                #
              </th>

              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse"
                colSpan={3}
              >
                Title
              </th>
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse font-bold"
              >
                Teacher
              </th>
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse  font-bold"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse font-bold "
              >
                View
              </th>
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse font-bold"
              >
                Update
              </th>
              <th
                scope="col"
                className="px-2 py-3 border border-gray-400 border-collapse font-bold "
              >
                Delete
              </th>
            </tr>
          </thead>
          {/* Table Heading End Here */}
          {/* Table Data Fetching */}
          <tbody className="font-lora">
            {data && data.map((course, idx) => (
              <ManageCoursesTable key={course._id} course={course} index={idx + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
