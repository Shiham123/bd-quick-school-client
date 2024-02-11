import { useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import { useDeleteCoursesMutation } from '../../redux/services/ServicesApiSlice';

const ManageCoursesTable = ({ course, index }) => {
  const { _id, teachername, price, title } = course;
  const [deleteCourse] = useDeleteCoursesMutation();
  const navigate = useNavigate();
  //Hande Views
  const handleView = () => {
    navigate(`/ServiceDetails/${_id}`);
  };

  //Handle Delete
  const handleUpdate = () => {
    navigate(`/dashboard/update/courses`, { state: course });
  };

  //Handle Delte
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCourse(_id).unwrap.then(() => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  };

  return (
    <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
      <td scope="row" className="px-2 py-4 border border-gray-400 border-collapse ">
        {index}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse" colSpan={3}>
        {title}
      </td>
      <td className="px-2 py-4 border border-gray-400 border-collapse ">{teachername}</td>
      <td className="px-1 py-4 border border-gray-400 border-collapse text-center">{price}</td>
      <td
        onClick={handleView}
        className="px-1 py-4 border border-gray-400 border-collapse group text-center hover:bg-blue-700"
      >
        <IconButton>
          <FaRegEye className="text-white text-lg group-hover:text-yellow-400" />
        </IconButton>
      </td>
      <td
        onClick={handleUpdate}
        className="px-1 py-4 border border-gray-400 border-collapse group text-center text-lg hover:bg-blue-700"
      >
        <IconButton>
          <BiEditAlt className="text-white text-lg group-hover:text-yellow-400" />
        </IconButton>
      </td>
      <td
        onClick={handleDelete}
        className="px-1 py-4 border border-gray-400 border-collapse group text-center text-lg text-red-300 hover:bg-blue-700"
      >
        <IconButton>
          <MdDelete className="text-white text-lg group-hover:text-yellow-400" />
        </IconButton>
      </td>
    </tr>
  );
};

export default ManageCoursesTable;
