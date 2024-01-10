import {FaAngleRight} from "react-icons/fa";

const Profile = () => {
    return (
        <>
            <div className="w-full h-max pt-5 flex flex-col gap-2">
                <p className="text-xl text-[rgb(54,74,99)] font-semibold">
                    Personal Information
                </p>
                <p className="text-sm text-[rgb(82,100,132)] font-medium">
                    Basic info, like your name and address, that you use here.
                </p>
                <div className="w-full h-max border mt-5 border-gray-300 rounded bg-white">
                    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4">
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[rgb(82,100,132)] text-sm">Full Name</p>
                            <p className="text-[rgb(54,74,99)] text-base phone:text-sm">
                                James Jnr
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4">
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[rgb(82,100,132)] text-sm">Full Name</p>
                            <p className="text-[rgb(54,74,99)] text-base phone:text-sm">
                                James Jnr
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4">
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[rgb(82,100,132)] text-sm">Full Name</p>
                            <p className="text-[rgb(54,74,99)] text-base phone:text-sm">
                                James Jnr
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4">
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[rgb(82,100,132)] text-sm">Full Name</p>
                            <p className="text-[rgb(54,74,99)] text-base phone:text-sm">
                                James Jnr
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div className="w-full h-20 flex justify-between items-center cursor-pointer px-4">
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[rgb(82,100,132)] text-sm">Full Name</p>
                            <p className="text-[rgb(54,74,99)] text-base phone:text-sm">
                                James Jnr
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
