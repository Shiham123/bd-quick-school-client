import { Link, Outlet } from "react-router-dom";

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";



const DashBoardLayout = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)



    return (
        <div className="  ">
            <div className=" dark:bg-gray-800">
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


                            {/* routes */}


                            <div className="divider divider-warning mt-8 px-6"></div>
                            {/* available all routes */}

                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto  transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}

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