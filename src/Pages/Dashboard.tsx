import {FaLongArrowAltRight} from "react-icons/fa";
import {FiInfo, FiPlusCircle} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import TrandinViewWidgetOne from "../Components/TrandinViewWidgetOne";
import TradingViewWidgettwo from "../Components/TradingViewWidgettwo";
import TradingViewWidgetThree from "../Components/TradingViewWidgetThree";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    // console.log("object");
    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );
    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        // Fetch the current exchange rate from an API (replace with a reliable API)
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                const rate = response.data.bpi.USD.rate.replace(",", ""); // assuming USD rate
                setExchangeRate(parseFloat(rate));
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const totalBtc = user.balance / exchangeRate;
    const roundedTotalBtc = parseFloat(totalBtc.toFixed(8));
    return (
        <div className="w-full h-max ">
            <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                <p className="text-base text-[rgb(128,148,174)]">Welcome,</p>
                <div className="w-full flex phone:flex-col phone:gap-4 justify-between">
                    <p className="text-[rgb(54,74,99)] text-4xl">
                        {user?.userName.toLowerCase().charAt(0).toUpperCase() +
                            user.userName.toLowerCase().slice(1)}
                    </p>
                    <div className="w-max h-max flex items-center gap-4">
                        <NavLink to={"/user/deposit"}>
                            <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
                                <FiPlusCircle />
                                Deposit
                            </button>
                        </NavLink>
                        <NavLink to={"/user/my-plans"}>
                            <button className="bg-[#f4bd0e] w-max h-max flex items-center gap-2 rounded text-white px-6 py-2 text-sm font-semibold">
                                <FaLongArrowAltRight />
                                My Plans
                            </button>
                        </NavLink>
                    </div>
                </div>
                <p className="text-sm text-[#526484]">
                    At a glance summary of your account.
                </p>
                <div className="w-full h-10 cursor-pointer mt-8 flex items-center">
                    {/* Subscribe to get BTC and ETH current rates and live changes */}
                    <TradingViewWidgettwo />
                </div>
                <div className="w-max phone:w-full h-32 bg-white border flex flex-col justify-between border-gray-200 rounded p-6">
                    <p className="flex items-center gap-1 text-[#526484]">
                        Available Balance{" "}
                        <span>
                            <FiInfo />
                        </span>
                    </p>
                    <div className="w-max h-max flex justify-between gap-20 phone:gap-0 phone:justify-between phone:w-full">
                        <p className="text-4xl text-[rgb(82,100,132)] smallPhone:text-3xl">
                            {roundedTotalBtc} BTC
                        </p>
                        <p className="text-sm font-semibold text-[rgb(30,224,172)] flex items-end">
                            = ${user.balance}.00
                        </p>
                    </div>
                </div>
                <div className="w-full h-[80vh] phone:h-[40vh] flex items-center justify-center mt-5">
                    <div className="w-[80%] phone:w-full phone:hidden bg-white h-full rounded border border-gray-200">
                        <TrandinViewWidgetOne />
                    </div>
                    <div className="phone:flex hidden phone:w-[100%] phone:h-full">
                        <TradingViewWidgetThree />
                    </div>
                </div>
            </div>
            <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] mt-10">
                <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <p className="text-[#cd9f0c]">You do not have any plans</p>
                    <NavLink to={"/user/invest"}>
                        <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
                            <FiPlusCircle />
                            Invest Now
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="w-full h-max flex justify-center pl-20 phone:pl-4 flex-col gap-2 p-5 mt-5 border-t border-gray-300 ">
                <p className="text-[rgb(54,74,99)] text-xl font-bold">
                    We are here to help you!
                </p>
                <p className="text-[rgb(128,148,174)]">
                    port ticket, manage request, report an issues. Our team
                    support team will get back to you by email.
                </p>
                <NavLink to={"/contact"}>
                    <button className="w-max h-max rounded text-[#e14954] border border-[#e14954] px-6 py-2 text-sm font-semibold">
                        Get Support Now
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Dashboard;
