/* eslint-disable react/prop-types */
import { CiSettings } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth/useAuth";



const DashBoardNav = ({ open, setOpen, dropdown, setDropdown }) => {
    const { user, logOut } = useAuth();

    // Handle Logout Function to logout the User
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .then((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <section
                className="sticky top-0 z-40 px-3 py-3   dark:text-gray-100 dark:bg-gray-900 lg:px-5">
                    
                <nav className="relative">
                    <div className="flex items-center justify-between">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                className={`px-2 py-3  bg-blue-200 rounded ${open ? 'dark:text-gray-400 dark:bg-gray-800' : ''}`}
                            >
                                <FaListUl className="text-2xl w-6" />
                            </button>
                        </div>
                        <div className="justify-center hidden md:flex">
                            <div className=" xl:w-96">
                                <div className="relative flex flex-wrap items-center w-full ">
                                    <input type="search"
                                        className="form-control  relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700   dark:text-gray-100 bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-blue-600 focus:outline-none"
                                        placeholder="Search" />
                                    <button
                                        className=" px-6 py-2.5 bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400  dark:text-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center "
                                        type="button" id="button-addon2">
                                        <IoIosSearch className="text-zinc-950 text-lg"></IoIosSearch>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="relative mr-4 ">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        fill="currentColor" className="text-gray-400" viewBox="0 0 16 16">
                                        <path
                                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path
                                            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="block mr-4 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="text-gray-400" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <div className="relative mr-4 ">
                                <span>
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full">
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        fill="currentColor" className="text-gray-400" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                </span>
                            </div>
                            <div className={`relative text-left lg:inline-block `} >
                                <div className="lg:block" onClick={() => setDropdown(!dropdown)}>
                                    <button className="flex items-center">
                                        <div className="hidden mr-3 text-right md:block">
                                            <p className="text-sm font-bold text-black dark:text-gray-400">
                                                {user?.displayName}
                                            </p>
                                        </div>
                                        <div className="mr-2">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL}
                                                className="object-cover object-right w-10 h-10 rounded-full"
                                                alt="person" />
                                        </div>
                                        <span>
                                            <RiArrowDropDownLine></RiArrowDropDownLine>
                                        </span>
                                    </button>
                                </div>
                                <div
                                    style={{ display: dropdown ? 'block' : 'none' }}
                                    id="dropdown_profile"
                                    className="absolute right-0 w-48 mt-3 bg-white origin-top-right  rounded shadow dark:bg-gray-800 dark:text-gray-100"
                                >
                                    <div className="py-1">
                                        <a

                                            className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                                        >
                                            <CiSettings />
                                            Account
                                        </a>
                                        <a
                                            onClick={handleLogOut}
                                            className="flex px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100"
                                        >
                                            <IoLogOutOutline />
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default DashBoardNav;