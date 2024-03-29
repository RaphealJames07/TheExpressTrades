import logo from "../assets/TheExpressTradesLogo.svg";
import {FiBarChart2} from "react-icons/fi";
// import {IoGrid} from "react-icons/io5";
import {LuRepeat, LuWallet} from "react-icons/lu";
import {BsGrid} from "react-icons/bs";
import {FaRegCreditCard} from "react-icons/fa6";
import {MdAccountBox} from "react-icons/md";
import {GrSupport} from "react-icons/gr";
import DashboardHeader from "../Components/DashboardHeader";
import DashboardFooter from "../Components/DashboardFooter";
// import Dashboard from "./Dashboard";
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {useDispatch} from "react-redux";
import {oneUser, userTransactions} from "../Redux/Features";
import {useEffect, useState} from "react";




const User = () => {
    
    const dispatch = useDispatch();
    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );
    // console.log(user);

    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );

    const getOne = () => {
        // console.log("Getting transaction...");
        const url = `https://express-trades.vercel.app/api/v1/user/transactions`;
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .get(url, {headers})
            .then((response) => {
                // console.log(response);
                dispatch(userTransactions(response?.data?.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getOneUser = () => {
        const url = `https://express-trades.vercel.app/api/v1/user/one-user/${user._id}`;

        axios
            .get(url)
            .then((response) => {
                // console.log(response);
                dispatch(oneUser(response.data.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getOne();
        getOneUser();
        
    }, []);

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
    // console.log("Total BTC:",roundedTotalBtc)

    return (
        <>
            <div className="w-full h-max flex">
                <div className="w-[22%] h-screen phone:hidden bg-[#5f2525] px-5 relative ">
                    <div className="w-full h-16 flex items-center top-0 left-0">
                        <NavLink to={"/"}>
                            <img src={logo} alt="" className="w-60 h-14" />
                        </NavLink>
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
                            <NavLink to={"/user/dashboard"}>
                                <div className="w-max h-max items-center justify-center">
                                    <FiBarChart2 className="w-9 h-9 rounded p-2 cursor-pointer bg-white" />
                                </div>
                            </NavLink>
                        </div>
                        <p className="flex justify-between text-[rgb(245,191,195)] font-medium text-sm px-6">
                            Deposit in orders <span>0 BTC</span>
                        </p>
                        <div className="w-full h-max flex justify-between px-6">
                            <NavLink to={"/user/deposit"}>
                                <button className="w-max h-max flex items-center justify-center px-6 py-3 rounded text-white text-sm font-semibold bg-[#e14954]">
                                    DEPOSIT
                                </button>
                            </NavLink>
                            <NavLink to={"/user/invest"}>
                                <button className="w-max h-max flex items-center justify-center px-10 py-3 rounded text-white text-sm font-semibold bg-[#1ee0ac]">
                                    INVEST
                                </button>
                            </NavLink>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 mt-6">
                            <p className="px-6 text-[rgba(245,191,195,0.8)] font-bold text-xs">
                                MENU
                            </p>
                            <div className="w-full h-max flex flex-col gap-2">
                                <NavLink
                                    to={"/user/dashboard"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                                        <BsGrid className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Dashboard
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/my-plans"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-4 px-6 rounded-full cursor-pointer">
                                        <LuWallet className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            My Plans
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/invest"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-4 px-6 rounded-full cursor-pointer">
                                        <LuWallet className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Invest
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/transactions"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-4 px-6 rounded-full cursor-pointer">
                                        <LuRepeat className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Transactions
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/withdraw"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-4 px-6 rounded-full cursor-pointer">
                                        <FaRegCreditCard className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Withdraw
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/my-account/profile"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#7c3131] rounded-full  hover:text-[#0e4152] text-[#777]"
                                            : "transition-all bg-[#7c3131] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-4 px-6 rounded-full cursor-pointer">
                                        <MdAccountBox className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Account
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <NavLink to={"/contact"}>
                                <div className="w-full h-10 flex items-center text-white transition-all duration-400 hover:bg-[#7c3131] gap-2 px-6 rounded-full cursor-pointer">
                                    <GrSupport className="w-4 h-4" />
                                    <p className="font-medium text-sm">
                                        Support
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-[78%] phone:w-full h-screen overflow-y-auto relative">
                    <DashboardHeader />
                    <div className="w-full min-h-[81vh] h-max mt-16 bg-[#f5f6fa]">
                        <Outlet />
                    </div>
                    <DashboardFooter />
                </div>
            </div>
        </>
    );
};

export default User;
