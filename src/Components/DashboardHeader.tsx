import {CiUser} from "react-icons/ci";
import {GoInfo} from "react-icons/go";
import {FaArrowLeft, FaCaretDown, FaRegCreditCard} from "react-icons/fa";
import {IoMdMenu, IoMdNotificationsOutline} from "react-icons/io";
import {FiBarChart2} from "react-icons/fi";
import {LuRepeat, LuWallet} from "react-icons/lu";
import {IoSettingsOutline} from "react-icons/io5";
import {PiSignOutBold} from "react-icons/pi";
import {useEffect, useState} from "react";
import {Drawer} from "antd";
import logo from "../assets/TheExpressTradesLogo.svg";
import {BsGrid} from "react-icons/bs";
import {MdAccountBox} from "react-icons/md";
import {GrSupport} from "react-icons/gr";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {logout} from "../Redux/Features";
import {useDispatch} from "react-redux";
import axios from "axios";

const DashboardHeader = () => {
    const dispatch = useDispatch();
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [sideNav, setSideNav] = useState<boolean>(false);
    const [notification, setNotification] = useState<boolean>(false);

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    };
    const handleShowNotification = () => {
        setNotification(!notification);
    };

    const handleOpenSideNav = () => {
        setSideNav(true);
    };
    const handleCloseSideNav = () => {
        setSideNav(false);
    };
    const nav = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        nav("/");
    };

    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );

    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                const rate = response.data.bpi.USD.rate.replace(",", ""); // assuming USD rate
                setExchangeRate(parseFloat(rate));
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, []);

    const totalBtc = user.balance / exchangeRate;
    const roundedTotalBtc = parseFloat(totalBtc.toFixed(8));

    const lengthOfTra = localStorage.getItem("numOfTransactionTET");

    return (
        <div className="w-[76%] phone:w-full h-16 fixed top-0 flex items-center z-50 justify-between px-10 phone:px-4 shadow-sm bg-white">
            <div className="w-max h-max phone:hidden flex items-center gap-2 text-[rgb(219,38,51)] text-lg">
                <GoInfo className="w-4 h-4" />
                <p>43,739.00 USD / BTC</p>
            </div>
            <div className="w-max h-max phone:flex hidden">
                <IoMdMenu
                    className="w-8 h-8 cursor-pointer"
                    onClick={handleOpenSideNav}
                />
            </div>
            <div className="w-max h-max flex items-center gap-8 phone:gap-4">
                <div
                    className="w-max h-max flex items-center gap-2 cursor-pointer hover:bg-[#7c3131] rounded-full pr-2 transition-all duration-500 text-gray-700 relative"
                    onClick={handleShowProfile}
                >
                    <CiUser className="w-8 h-8 rounded-full bg-[#e8757d] text-white p-2" />
                    <p className="flex items-center text-sm font-semibold gap-1 phone:hidden">
                        {user?.fullName.toLowerCase().charAt(0).toUpperCase() +
                            user.fullName.toLowerCase().slice(1)}
                        <span>
                            <FaCaretDown />
                        </span>
                    </p>
                    {showProfile ? (
                        <div className="min-w-[17rem] w-max h-max absolute top-11 right-0 bg-white shadow flex flex-col border-t-2 border-t-red-600 rounded">
                            <div className="w-full h-20 bg-gray-100 p-5 flex gap-2 border-b border-b-gray-200">
                                <div className="w-10 h-10 rounded-full bg-[#e8757d]"></div>
                                <div className="w-max h-max flex justify-center flex-col">
                                    <p className="text-sm font-bold text-[rgb(71,96,127)]">
                                        {user?.fullName
                                            .toLowerCase()
                                            .charAt(0)
                                            .toUpperCase() +
                                            user.fullName
                                                .toLowerCase()
                                                .slice(1)}
                                    </p>
                                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-max p-5 border-b border-b-gray-200">
                                <div className="w-full h-max flex items-center justify-between">
                                    <div className="w-max h-max flex flex-col gap-1">
                                        <p className="text-[rgb(128,148,174)] text-xs font-bold">
                                            AVAILABLE BALANCE
                                        </p>
                                        <p className="text-[#e14954] flex gap-2 items-end text-2xl">
                                            {roundedTotalBtc}
                                            <span className="text-lg font-semibold">
                                                BTC
                                            </span>
                                        </p>
                                        <p className="text-white font-medium">
                                            {user?.balance}.00 USD
                                        </p>
                                    </div>
                                    <div className="w-max h-max items-center justify-center">
                                        <FiBarChart2 className="w-9 h-9 rounded p-2 cursor-pointer bg-white" />
                                    </div>
                                </div>
                                <p className="flex gap-2 items-center text-[#e14954] ">
                                    Add funds
                                    <span>
                                        <LuWallet />
                                    </span>
                                </p>
                            </div>
                            <NavLink to={"/user/my-account/profile"}>
                                <div className="w-full h-16 flex items-center px-5 border-b border-b-gray-200">
                                    <p className="flex gap-2 hover:text-[#e14954] transition-all duration-500 items-center font-semibold text-sm text-[rgb(82,100,132)]">
                                        <IoSettingsOutline className="w-5  h-5" />
                                        Account Settings
                                    </p>
                                </div>
                            </NavLink>
                            <div
                                className="w-full h-16 flex items-center px-5 "
                                onClick={handleLogout}
                            >
                                <p className="flex gap-2 hover:text-[#e14954] transition-all duration-500 items-center font-semibold text-sm text-[rgb(82,100,132)]">
                                    <PiSignOutBold className="w-5  h-5" />
                                    Signout
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div
                    className="cursor-pointer flex items-center text-gray-700 hover:text-gray-400 transition-all duration-500 relative"
                    onClick={handleShowNotification}
                >
                    <IoMdNotificationsOutline className="w-6 h-6" />
                    {notification ? (
                        <div className="phone:w-[18rem] w-[20rem] h-max shadow border-t-2 border-t-red-400 rounded absolute right-0 top-10 bg-white">
                            <div className="w-full h-12 flex items-center pl-5 text-[rgb(82,100,132)] text-smn border-b border-b-gray-300">
                                Notifications
                            </div>
                            <NavLink to={"/user/notification"}>
                                <div className="w-full h-12 flex items-center justify-center pl-5 text-[#e8757d] text-sm font-medium">
                                    View All ({lengthOfTra})
                                </div>
                            </NavLink>
                        </div>
                    ) : null}
                </div>
            </div>
            <Drawer
                open={sideNav}
                onClose={handleCloseSideNav}
                placement="left"
                maskClosable={true}
                width={290}
                className="p-0 m-0"
            >
                <div className="w-full h-screen hidden phone:flex phone:flex-col bg-[#5f2525] relative ">
                    <div className="w-full h-16 flex items-center justify-between top-0 left-0">
                        <NavLink onClick={handleCloseSideNav} to={"/"}>
                            <img
                                src={logo}
                                alt=""
                                className="w-60 phone:w-52 h-14"
                            />
                        </NavLink>
                        <span className="w-max h-max px-4 text-white hidden phone:flex">
                            <FaArrowLeft
                                className="w-6 h-6"
                                onClick={handleCloseSideNav}
                            />
                        </span>
                    </div>
                    <div className="h-[90vh] w-full overflow-y-auto scrollbar-thumb-[#341414] scrollbar-track-[#b76161] scrollbar-thin py-5 flex flex-col gap-5">
                        <div className="w-full h-max flex items-center justify-between px-6">
                            <div className="w-max h-max flex flex-col gap-1">
                                <p className="text-[rgb(169,205,255)] text-xs font-semibold">
                                    AVAILABLE BALANCE
                                </p>
                                <p className="text-[rgb(225,73,84)] flex gap-2 items-end text-2xl">
                                    {roundedTotalBtc}
                                    <span className="text-lg font-semibold">
                                        BTC
                                    </span>
                                </p>
                                <p className="text-white font-medium">
                                    {user?.balance}.00 USD
                                </p>
                            </div>
                            <NavLink
                                onClick={handleCloseSideNav}
                                to={"/user/dashboard"}
                            >
                                <div className="w-max h-max items-center justify-center">
                                    <FiBarChart2 className="w-9 h-9 rounded p-2 cursor-pointer bg-white" />
                                </div>
                            </NavLink>
                        </div>
                        <p className="flex justify-between text-[rgb(245,191,195)] font-medium text-sm px-6">
                            Deposit in orders <span>0 BTC</span>
                        </p>
                        <div className="w-full h-max flex justify-between px-6">
                            <NavLink
                                onClick={handleCloseSideNav}
                                to={"/user/deposit"}
                            >
                                <button className="w-max h-max flex items-center justify-center px-6 py-3 rounded text-white text-sm font-semibold bg-[#e14954]">
                                    DEPOSIT
                                </button>
                            </NavLink>
                            <NavLink
                                onClick={handleCloseSideNav}
                                to={"/user/invest"}
                            >
                                <button className="w-max h-max flex items-center justify-center px-10 py-3 rounded text-white text-sm font-semibold bg-[#1ee0ac]">
                                    INVEST
                                </button>
                            </NavLink>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 mt-6 px-2">
                            <p className="px-6 text-[rgba(245,191,195,0.8)] font-bold text-xs">
                                MENU
                            </p>
                            <div className="w-full h-max flex flex-col gap-2">
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/dashboard"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white  transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                                        <BsGrid className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Dashboard
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/my-plans"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                        <LuWallet className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            My Plans
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/invest"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                        <LuWallet className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Invest
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/transactions"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                        <LuRepeat className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Transactions
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/withdraw"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                        <FaRegCreditCard className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Withdraw
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    onClick={handleCloseSideNav}
                                    to={"/user/my-account/profile"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                        <MdAccountBox className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Account
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <NavLink
                                onClick={handleCloseSideNav}
                                to={"/contact"}
                                className={({isActive}) =>
                                    !isActive
                                        ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded  hover:text-[#0e4152] text-[#777]"
                                        : "transition-all bg-[#7c3131] text-white"
                                }
                            >
                                <div className="w-full h-10 flex items-center text-white transition-all duration-400  gap-4 px-6 rounded-full cursor-pointer">
                                    <GrSupport className="w-4 h-4" />
                                    <p className="font-medium text-sm">
                                        Support
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default DashboardHeader;
