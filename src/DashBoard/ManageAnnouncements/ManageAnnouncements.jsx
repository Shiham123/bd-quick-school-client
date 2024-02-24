import ManageAnnouncementsTable from './ManageAnnouncementsTable';
import { useGetAllAnnouncementsQuery } from '../../redux/services/AnnouncementSlice';

const ManageAnnouncements = () => {
  const { data: announcements } = useGetAllAnnouncementsQuery();
  return (
    <div className="lg:p-16 min-h-screen">
      <h1 className="text-4xl text-center font-cinzel">Manage Announcement</h1>
      <hr className="mb-5 border-2 mt-2 border-black w-[280px] mx-auto" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          {/* Table Heading Start Here */}
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr className="font-cinzel">
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Announcement Title
              </th>
              <th scope="col" className="px-6 py-3">
                Announcement Sub-Description
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {/* Table Heading End Here */}
          {/* Table Data Fetching */}
          <tbody className="font-lora">
            {announcements?.map((announcement, index) => (
              <ManageAnnouncementsTable key={announcement._id} announcement={announcement} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAnnouncements;
