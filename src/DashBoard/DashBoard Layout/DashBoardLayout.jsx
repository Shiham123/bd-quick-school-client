import { Link, Outlet } from "react-router-dom";

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../../Hooks/useAuth/useAuth";
import DashBoardNav from "../DashBoardNav/DashBoardNav";



const DashBoardLayout = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const { user } = useAuth()



    return (
        <div className="  ">
            <div className=" bg-gray-100 dark:bg-gray-800">
                <div className={`body-content ${open ? 'open' : ''}`}>

                    {/* navlink  */}
                    <div className="relative lg:block navbar-menu">
                        <nav
                            className={`fixed top-0  transition-all lg:mt-0 z-40 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${open ? 'w-[280px]' : 'w-0'
                                } lg:border-none border-r border-gray-200 dark:border-gray-800 text-zinc-950 overflow-hidden`}
                            id="sidenav"
                        >

                            {/* website logo */}
                            <div
                                className="flex items-center w-full px-2 pt-4 pb-4 mb-4 border-b border-black dark:border-gray-700">
                                <Link to="/" className="flex items-center justify-center normal-case">
                                    <Player
                                        className="w-14"
                                        autoplay
                                        loop
                                        src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
                                    ></Player>
                                    <span className=" font-semibold">
                                        <span className="text-xl text-black font-bold font-cinzel">BD Quick School </span>
                                    </span>
                                </Link>
                            </div>
                            {/* user photo and name */}
                            <div>
                                <div className="overflow-hidden ">
                                    <img src="https://i.postimg.cc/K8Rq5BCD/pexels-pavel-danilyuk-8381916.jpg" alt=""
                                        className="object-cover object-top w-full h-32" />
                                </div>
                                <div
                                    className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
                                    <img src={user?.photoURL} alt=""
                                        className="object-cover object-top w-full h-32 " />
                                </div>
                                <div className="flex justify-center ">
                                    <div>
                                        <h2 className="text-xl font-semibold dark:text-gray-300 ">{user?.displayName}</h2>
                                        <span className="text-sm font-medium text-gray-600">{user?.email}</span>
                                    </div>
                                </div>
                            </div>

                            {/* routes */}



                            {/* available all routes */}

                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto  transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}
                        <div>
                            <DashBoardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashBoardNav>
                        </div>
                        <div className=" font-raleway ">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DashBoardLayout;