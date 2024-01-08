import { CiUser } from "react-icons/ci";
import {GoInfo} from "react-icons/go";
import {FaCaretDown} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io";


const DashboardHeader = () => {
    return (
        <div className="w-[76%] h-16 fixed top-0 flex items-center z-50 justify-between px-10 shadow-sm bg-white">
            <div className="w-max h-max flex items-center gap-2 text-[rgb(219,38,51)] text-lg">
                <GoInfo className="w-4 h-4" />
                <p>43,739.00 USD / BTC</p>
            </div>
            <div className="w-max h-max flex items-center gap-8">
                <div className="w-max h-max flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full pr-2 transition-all duration-500 text-gray-700">
                    <CiUser className="w-8 h-8 rounded-full bg-[#e8757d] text-white p-2" />
                    <p className="flex items-center text-sm font-semibold gap-1">
                        James Jnr
                        <span>
                            <FaCaretDown />
                        </span>
                    </p>
                </div>
                <div className="cursor-pointer flex items-center text-gray-700 hover:text-gray-400 transition-all duration-500">
                    <IoMdNotificationsOutline className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
