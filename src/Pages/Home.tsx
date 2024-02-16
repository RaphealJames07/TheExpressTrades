import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logo from "../assets/TheExpressTradesLogo.svg";
import {useEffect, useState} from "react";
import "../index.css";
import heroimg from "../assets/city-man.png";
import {NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import xrp from "../assets/xrp.svg";
import bch from "../assets/bch.png";
import ltc from "../assets/ltc.png";
import bnb from "../assets/bnb.svg";
import step1 from "../assets/step-1.png";
import step2 from "../assets/step-3.png";
import step3 from "../assets/step-2.png";
import step4 from "../assets/step-4.png";
import feature1 from "../assets/feature-icon-1.png";
import feature2 from "../assets/feature-icon-3.png";
import feature3 from "../assets/feature-icon-2.png";
import feature4 from "../assets/feature-icon-4.png";
import arrowRight from "../assets/arrow-right.png";
import offerIcon1 from "../assets/offer-icon-1.png";
import offerIcon2 from "../assets/offer-icon-2.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import DepositPeeps from "./DepositPeeps";
import WithdrawPeeps from "./WithdrawPeeps";
import TradinViewWidgetFour from "../Components/TradinViewWidgetFour";

const Home = () => {
    const [showHeader2, setShowHeader2] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [dropNav, setDropNav] = useState(false);
    const [showDepositP, setShowDepositP] = useState(true);
    const [showWithdrawP, setShowWithdrawP] = useState(false);

    const handleDepositP = () => {
        setShowDepositP(true);
        setShowWithdrawP(false);
    };
    const handleWithdrawP = () => {
        setShowDepositP(false);
        setShowWithdrawP(true);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 4; // Adjust this value as needed
        const screenWidth = window.innerWidth;

        // Apply the scroll effect only for screens wider than 480px
        if (screenWidth > 480) {
            setShowHeader2(scrollPosition > threshold);
            setSmallScreen(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDropNav = () => {
        setDropNav(!dropNav);
    };
    return (
        <>
            <div className="w-full h-max">
                {showHeader2 && <Header />}
                <div className="homebg phone:h-[110vh] smallPhone:h-[130vh] ">
                    <div
                        className={`${
                            smallScreen
                                ? "w-full h-max bg-transparent transition-all duration-500  px-28 border-b-[1px] border-b-gray-400"
                                : "w-full h-max bg-[#7b577b] transition-all duration-500  bg-gradient-to-r from-orange-400 via-transparent to-indigo-700 px-28 phone:px-0 fixed top-0 left-0 z-20 "
                        }`}
                    >
                        <div className="w-full flex justify-between h-20 items-center">
                            <div className="w-max h-full">
                                <img src={logo} alt="" className="w-56 h-20" />
                            </div>
                            <div className="w-max h-full flex gap-10 items-center text-lg font-semibold z-10 phone:hidden">
                                <ul className="w-max h-full flex items-center gap-10 text-white ">
                                    <NavLink to={"/"}>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Home
                                        </li>
                                    </NavLink>
                                    <NavLink to={"/about"}>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            About Us
                                        </li>
                                    </NavLink>
                                    <NavLink to={"/plans"}>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Plans
                                        </li>
                                    </NavLink>
                                    <NavLink to={"contact"}>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Contact Us
                                        </li>
                                    </NavLink>
                                    <NavLink to={"faq"}>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            FAQ
                                        </li>
                                    </NavLink>
                                </ul>
                                <NavLink to={"/register"}>
                                    <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 hover:from-indigo-900 hover:via-transparent hover:to-[#903eff] h-max w-max rounded-full text-white">
                                        Start Now !
                                    </button>
                                </NavLink>
                            </div>
                            <div className="w-max h-max phone:flex hidden pr-5">
                                <GiHamburgerMenu
                                    className="w-8 h-8 cursor-pointer text-white"
                                    onClick={handleDropNav}
                                />
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <div
                                className={`w-full pb-2 ${
                                    dropNav
                                        ? "max-h-[23rem] overflow-hidden transition-all duration-500"
                                        : "max-h-0 overflow-hidden transition-all duration-500 "
                                } `}
                            >
                                <div
                                    className={`w-full h-max pl-5 flex flex-col gap-4 pt-2`}
                                >
                                    <ul className="w-max h-full flex flex-col gap-8 text-white text-xl font-semibold ">
                                        <NavLink to={"/"}>
                                            <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                                Home
                                            </li>
                                        </NavLink>
                                        <NavLink to={"/about"}>
                                            <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                                About Us
                                            </li>
                                        </NavLink>
                                        <NavLink to={"/plans"}>
                                            <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                                Plans
                                            </li>
                                        </NavLink>
                                        <NavLink to={"/contact"}>
                                            <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                                Contact
                                            </li>
                                        </NavLink>
                                        <NavLink to={"/faq"}>
                                            <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                                FAQ
                                            </li>
                                        </NavLink>
                                    </ul>
                                    <NavLink to={"/register"}>
                                        <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 hover:from-indigo-900 hover:via-transparent hover:to-[#903eff] h-max w-max rounded-full text-white">
                                            Start Now !
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[120vh] smallPhone:h-[110vh] phone:h-[80vh]  flex phone:flex-col-reverse ">
                        <div className="w-[70%] phone:w-full ph-h-0 h-max phone:full flex flex-col phone:items-center pl-28 phone:pl-0 pt-44 phone:pt-0 gap-8 text-white z-10">
                            <p className="text-8xl font-bold phone:w-full phone:text-center phone:text-5xl">
                                Take Your Portfolio to the Next Level
                            </p>
                            <p className="text-xl phone:w-full phone:text-center">
                                Ultimate cryptocurrency and forex portfolio
                                management suite
                            </p>
                            <div className="w-full h-max flex justify-end phone:justify-center pr-20 phone:pr-0">
                                <NavLink to={"/login"}>
                                    <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 hover:from-indigo-900 hover:via-transparent hover:to-[#903eff] h-max w-max rounded-full text-white">
                                        Get Started
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-[70%] phone:w-full h-full phone:h-max">
                            <img
                                src={heroimg}
                                alt=""
                                className="w-[60%] phone:w-full absolute top-0 right-0 z"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-max px-24 phone:px-5">
                    <div className="w-full h-max overflow-y-auto pt-28 scrollbar-thumb-[#fff] scrollbar-track-[#fff] scrollbar-thin">
                        <div className="w-max h-max flex gap-10 p-10">
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={btc}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Bitcoin BTC
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $42780{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-[rgb(25,135,84)] font-bold flex items-center justify-center">
                                        0.51%
                                    </p>
                                </div>
                            </div>
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={xrp}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Ripple XRP
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $0.84{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-red-500 font-bold flex items-center justify-center">
                                        -0.82%
                                    </p>
                                </div>
                            </div>
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={bch}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Bitcoin Cash BCH
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $456.38{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-[rgb(25,135,84)] font-bold flex items-center justify-center">
                                        0.16%
                                    </p>
                                </div>
                            </div>
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={ltc}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Litecoin LTC
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $154.91{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-[rgb(25,135,84)] font-bold flex items-center justify-center">
                                        1.17%
                                    </p>
                                </div>
                            </div>
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={bnb}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Binance Coin BNB
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $554.62{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-red-500 font-bold flex items-center justify-center">
                                        -3.86%
                                    </p>
                                </div>
                            </div>
                            <div className="w-80 h-44 rounded-[25px] shadow-xl flex flex-col gap-4 px-8 py-6 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={eth}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[rgb(93,87,121)] font-medium text-lg">
                                        Ethereum ETH
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="flex flex-col text-xl text-[rgb(102,204,51)] font-bold">
                                        $4032.16{" "}
                                        <span className="text-base font-normal">
                                            Price(24hours)
                                        </span>
                                    </p>
                                    <p className="w-max px-3 h-10 rounded-[15px] bg-[#eaf7f2] text-red-500 font-bold flex items-center justify-center">
                                        -1.17%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max px-24 phone:px-5 mt-20">
                    <div className="w-full h-max flex items-center flex-col gap-8">
                        <p className="text-4xl phone:text-2xl text-[rgb(33,37,41)] text-center font-semibold">
                            How does it work?
                        </p>
                        <p className="w-[65%] phone:w-full text-6xl phone:text-4xl text-[rgb(33,37,41)] text-center font-medium">
                            Crypto investment in the hands in Just a few Easy
                            Steps
                        </p>
                        <p className="text-lg text-[rgb(33,37,41)] text-center font-normal">
                            It's easier than you think. Follow the 4 simple
                            steps below
                        </p>
                    </div>
                    <div className="w-full h-max flex phone:flex-col justify-between mt-10">
                        <div className="w-[23%] phone:w-full h-[21rem]">
                            <div className="w-full h-[80%] bg-gradient-to-t hover:bg-gradient-to-b from-pink-300 to-transparent transition-all duration-300 flex items-center justify-center rounded-xl cursor-pointer">
                                <img src={step1} alt="" />
                            </div>
                            <div className="w-full h-[20%] flex items-end phone:items-center justify-center font-semibold text-2xl text-[rgb(33,37,41)]">
                                <p>Sign Up & Get Verified</p>
                            </div>
                        </div>
                        <div className="w-[23%] phone:w-full h-[21rem]">
                            <div className="w-full h-[80%] bg-gradient-to-t hover:bg-gradient-to-b from-[#c2d7f3] to-transparent transition-all duration-300 flex items-center justify-center rounded-xl cursor-pointer">
                                <img src={step2} alt="" />
                            </div>
                            <div className="w-full h-[20%] flex items-end phone:items-center justify-center font-semibold text-2xl text-[rgb(33,37,41)]">
                                <p>Top Up Your Account</p>
                            </div>
                        </div>
                        <div className="w-[23%] phone:w-full h-[21rem]">
                            <div className="w-full h-[80%] bg-gradient-to-t hover:bg-gradient-to-b from-[#d7c3f3] to-transparent transition-all duration-300 flex items-center justify-center rounded-xl cursor-pointer">
                                <img src={step3} alt="" />
                            </div>
                            <div className="w-full h-[20%] flex items-end phone:items-center justify-center font-semibold text-2xl text-[rgb(33,37,41)]">
                                <p>Purchase Your Plan</p>
                            </div>
                        </div>
                        <div className="w-[23%] phone:w-full h-[21rem]">
                            <div className="w-full h-[80%] bg-gradient-to-t hover:bg-gradient-to-b from-[#0bcdf8] to-transparent transition-all duration-300 flex items-center justify-center rounded-xl cursor-pointer">
                                <img src={step4} alt="" />
                            </div>
                            <div className="w-full h-[20%] flex items-end phone:items-center justify-center font-semibold text-2xl text-[rgb(33,37,41)]">
                                <p>Start Earning</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max px-24 phone:px-5 mt-32">
                    <div className="w-full h-max flex phone:flex-col justify-between">
                        <div className="w-[45%] phone:w-full phone:items-center h-max flex flex-col gap-6">
                            <p className="text-[rgb(255,173,79)] phone:text-xl text-2xl font-semibold">
                                Why choose Express Tradez Global
                            </p>
                            <p className="text-[rgb(102,204,51)] phone:text-center phone:text-4xl text-6xl font-bold">
                                Effortless crypto investing
                            </p>
                            <p className="text-[rgb(102,204,51)] phone:text-center text-lg">
                                The simple way to grow your money like the
                                worlds most sophisticated investors.
                            </p>
                            <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 hover:from-indigo-900 hover:via-transparent hover:to-[#903eff] h-max w-max rounded-full text-white">
                                SIGN UP FOR FREE
                            </button>
                        </div>
                        <div className="w-[50%] phone:w-full h-screen phone:h-[150vh] flex phone:flex-col gap-8">
                            <div className="w-1/2 phone:w-full h-full flex gap-8 flex-col justify-start phone:py-8">
                                <div className="w-full h-[40%] phone:h-1/2 flex flex-col items-center justify-center gap-6 bg-white shadow-xl rounded-3xl">
                                    <img
                                        src={feature1}
                                        alt=""
                                        className="w-32 h-32"
                                    />
                                    <p className="text-xl text-center w-[90%] text-[rgb(59,54,140)] font-medium">
                                        The fast & simpleway to Invest crypto
                                    </p>
                                </div>
                                <div className="w-full h-[40%] phone:h-1/2 flex flex-col items-center justify-center gap-6 bg-white shadow-xl rounded-3xl">
                                    <img
                                        src={feature2}
                                        alt=""
                                        className="w-32 h-32"
                                    />
                                    <p className="text-xl text-center w-[90%] text-[rgb(59,54,140)] font-medium">
                                        Multi-Currency Support
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2 phone:w-full h-full flex gap-8 flex-col justify-end">
                                <div className="w-full h-[40%] phone:h-1/2 flex flex-col items-center justify-center gap-6 bg-white shadow-xl rounded-3xl">
                                    <img
                                        src={feature3}
                                        alt=""
                                        className="w-32 h-32"
                                    />
                                    <p className="text-xl text-center w-[90%] text-[rgb(59,54,140)] font-medium">
                                        Professional, Safe & Secure
                                    </p>
                                </div>
                                <div className="w-full h-[40%] phone:h-1/2 flex flex-col items-center justify-center gap-6 bg-white shadow-xl rounded-3xl">
                                    <img
                                        src={feature4}
                                        alt=""
                                        className="w-32 h-32"
                                    />
                                    <p className="text-xl text-center w-[90%] text-[rgb(59,54,140)] font-medium">
                                        Our people are available for you 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max depositBg mt-32">
                    <div className="w-full h-[100vh] phone:h-[120vh] px-24 phone:px-5 ">
                        <div className="w-full h-[50%] phone:h-[35%] flex flex-col items-center justify-center gap-6">
                            <p className="text-[rgb(255,173,79)] phone:text-xl text-2xl font-semibold">
                                Our investment offer
                            </p>
                            <p className="text-[rgb(102,204,51)] phone:text-center phone:text-4xl text-6xl font-bold">
                                Deposit Portfolio
                            </p>
                            <p className="text-[rgb(102,204,51)] w-1/2 phone:w-full text-center phone:text-center text-lg">
                                Your total income directly depends on the amount
                                you invest, so the more you contribute, the more
                                you can earn.
                            </p>
                        </div>
                        <div className="w-full h-[50%] phone:h-[65%] flex flex-col bg-white rounded-t-2xl justify-between gap-6 items-center px-12 pt-8">
                            <p className="text-[rgb(102,204,51)] text-3xl font-semibold">
                                We are Offering
                            </p>
                            <div className="w-full h-max rounded-3xl bgShe">
                                <div className="w-full h-60 phone:h-[35rem] flex phone:flex-col items-center justify-between px-28 phone:px-8 phone:py-8">
                                    <div className="w-80 h-[80%] phone:h-[40%] phone:w-full rounded-3xl border border-gray-300 bg-[#ffffff17] flex items-center justify-center gap-4 phone:gap-6">
                                        <img
                                            src={offerIcon1}
                                            alt=""
                                            className="w-16 h-16"
                                        />
                                        <p className="flex flex-col gap-4 text-4xl text-white font-bold">
                                            200%{" "}
                                            <span className="text-base font-normal">
                                                Daily Profit
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-max h-max ">
                                        <img
                                            src={arrowRight}
                                            alt=""
                                            className="phone:rotate-90"
                                        />
                                    </div>
                                    <div className="w-80 h-[80%] phone:h-[40%] phone:w-full rounded-3xl border border-gray-300 bg-[#ffffff17] flex items-center justify-center gap-4 phone:gap-6">
                                        <img
                                            src={offerIcon2}
                                            alt=""
                                            className="w-16 h-16"
                                        />
                                        <p className="flex flex-col gap-4 text-4xl text-white font-bold">
                                            200%{" "}
                                            <span className="text-base font-normal">
                                                Daily Profit
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max px-24 phone:px-5 mt-24 flex flex-col gap-8">
                    <p className="text-[rgb(102,204,51)] text-6xl phone:text-3xl font-semibold text-center">
                        Investment Packages
                    </p>
                    <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-3">
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>SILVER PLAN</p>
                            <p>$3,000.00</p>
                            <p>MAX DEPOSIT: $15,000.00</p>
                            <p>DAILY ROI: 10%</p>
                            <p>DURATION: 7 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>SUPER PLAN</p>
                            <p>$5,000.00</p>
                            <p>MAX DEPOSIT: $50,000.00</p>
                            <p>DAILY ROI: 15%</p>
                            <p>DURATION: 2 months</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>GOLD PLAN</p>
                            <p>$10,000.00</p>
                            <p>MAX DEPOSIT: $200,000.00</p>
                            <p>DAILY ROI: 25%</p>
                            <p>DURATION: 62 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>MAX PLAN</p>
                            <p>$50,000.00</p>
                            <p>MAX DEPOSIT: $50,000.00</p>
                            <p>DAILY ROI: 37%</p>
                            <p>DURATION: 15 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max mt-20 tableBg">
                    <div className="w-full h-max px-24 phone:px-5 phone:items-center flex flex-col justify-center">
                        <div className="w-full h-max flex flex-col gap-6 items-center mt-24 text-white">
                            <p className=" text-2xl font-semibold text-center">
                                User Statistics
                            </p>
                            <p className="text-6xl font-semibold text-center phone:text-4xl">
                                Latest Transaction
                            </p>
                            <p className="text-lg w-[60%] phone:w-full flex text-center">
                                Our goal is to simplify investing so that anyone
                                can be an investor. With this in mind, we
                                hand-pick the investments we offer on our
                                platform.
                            </p>
                        </div>
                        <div className="w-full h-max phone:flex phone:flex-col phone:gap-4 bg-white mt-16 py-20 px-5">
                            <div className="w-full h-28 flex phone:flex-col phone:items-center justify-center gap-6">
                                <div
                                    className="w-max h-max flex  px-8 py-3 items-center justify-center gap-4 rounded-full bg-indigo-700 text-white cursor-pointer"
                                    onClick={handleDepositP}
                                >
                                    <img src={icon1} alt="" />
                                    <p className="flex flex-col font-bold text-sm">
                                        LATEST <span>DEPOSITS</span>
                                    </p>
                                </div>
                                <div
                                    className="w-max h-max flex px-8 py-3 items-center justify-center gap-4 rounded-full bg-orange-300 text-white cursor-pointer"
                                    onClick={handleWithdrawP}
                                >
                                    <img src={icon2} alt="" />
                                    <p className="flex flex-col font-bold text-sm">
                                        LATEST <span>DEPOSITS</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full overflow-y-auto h-max">
                                {showDepositP ? (
                                    <DepositPeeps />
                                ) : showWithdrawP ? (
                                    <WithdrawPeeps />
                                ) : null}
                            </div>
                            <div className="w-full flex items-center justify-center h-20">
                                <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 hover:from-indigo-900 hover:via-transparent hover:to-[#903eff] h-max w-max rounded-full text-white">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex justify-center items-center">
                    <TradinViewWidgetFour />
                </div>
                <div className="w-full h-max px-24 mt-8 counterBg py-10 flex phone:flex-col">
                    <div className="w-1/4 phone:w-full phone:border-r-0 h-32 flex items-center justify-center border-r border-r-gray-300">
                        <p className="flex flex-col text-white text-4xl font-semibold text-center gap-3">
                            114,963K{" "}
                            <span className="text-lg font-normal">
                                Registered users
                            </span>
                        </p>
                    </div>
                    <div className="w-1/4 phone:w-full phone:border-r-0 h-32 flex items-center justify-center border-r border-r-gray-300">
                        <p className="flex flex-col text-white text-4xl font-semibold text-center gap-3">
                            198{" "}
                            <span className="text-lg font-normal">
                                Countries Supported
                            </span>
                        </p>
                    </div>
                    <div className="w-1/4 phone:w-full phone:border-r-0 h-32 flex items-center justify-center border-r border-r-gray-300">
                        <p className="flex flex-col text-white text-4xl font-semibold text-center gap-3">
                            $3M{" "}
                            <span className="text-lg font-normal">
                                Withdrawn each month
                            </span>
                        </p>
                    </div>
                    <div className="w-1/4 phone:w-full phone:border-r-0 h-32 flex items-center justify-center">
                        <p className="flex flex-col text-white text-4xl font-semibold text-center gap-3">
                            114,963K{" "}
                            <span className="text-lg font-normal">
                                Active investors daily
                            </span>
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
