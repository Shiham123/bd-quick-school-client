import ManagePaymentTable from './ManagePaymentTable';
import { useGetAllOrdersQuery } from '../../redux/services/OrderApiSlice';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const ManageUsers = () => {
  const { data } = useGetAllOrdersQuery();

  //   Search Functionality By users
  //   const filteredData = data?.filter((item) => {
  //     if (item && item.customerName) {
  //       return item.customerName.toLowerCase().includes(searchTerm.toLowerCase());
  //     }

  //     return false;
  //   });
  const handleChange = (item) => {
    console.log(item);
  };

  const handleSearch = (val) => {
    console.log(val);
  };
  return (
    <div className="lg:p-16 min-h-screen">
      <h1 className="xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel">Manage Payment</h1>
      <hr className="mb-5 border-2 mt-2 border-black xs:w-[230px] semi-sm:w-[280px] md:w-[330px] mx-auto" />
      <div className="flex ml-2 md:ml-0 md:items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4  dark:bg-gray-900">
        <Box className="w-1/6">
          <FormControl sx={{ m: 1, minwidth: 300 }} className=" w-full">
            <InputLabel id="demo-simple-select-filled-label">Filter Price</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="" className="text-center">
                <em>None</em>
              </MenuItem>
              <MenuItem value="h2l">High to Lown</MenuItem>
              <MenuItem value="l2h">Low to High</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Search Input */}
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            id="table-search-users"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg xs:w-72 sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Users Name"
          />
        </div>
        {/* Search Input End Here */}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          {/* Table Heading Start Here */}
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr className="font-cinzel font-bold">
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                #
              </th>

              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Amont
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Tranjaction Id
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Pay Time
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-400 border-collapse">
                Status
              </th>
            </tr>
          </thead>
          {/* Table Heading End Here */}
          {/* Table Data Fetching */}
          <tbody className="font-lora">
            {data?.map((payment, index) => (
              <ManagePaymentTable key={payment._id} payment={payment} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
