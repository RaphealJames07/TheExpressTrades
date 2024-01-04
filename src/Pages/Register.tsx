import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logo from "../assets/TheExpressTradesLogo.svg";
import {useEffect, useState} from "react";
import "../index.css";
import {NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";

const Register = () => {
    const [showHeader2, setShowHeader2] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [dropNav, setDropNav] = useState(false);

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
                <div className="threebg phone:h-max ">
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
                                    <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                        Home
                                    </li>
                                    <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                        About Us
                                    </li>
                                    <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                        Plans
                                    </li>
                                    <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                        Contact
                                    </li>
                                    <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                        FAQ
                                    </li>
                                </ul>
                                <NavLink to={"/register"}>
                                    <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 h-max w-max rounded-full text-white">
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
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Home
                                        </li>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            About Us
                                        </li>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Plans
                                        </li>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            Contact
                                        </li>
                                        <li className="w-max h-full flex items-center transition-all cursor-pointer hover:border-b-2 hover:border-b-white">
                                            FAQ
                                        </li>
                                    </ul>
                                    <NavLink to={"/register"}>
                                        <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] to-indigo-900 h-max w-max rounded-full text-white">
                                            Start Now !
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 phone:pt-28">
                        <div className="w-[35%] phone:w-[95%] h-[145vh] phone:h-[115vh] bg-white rounded-[2rem] flex flex-col items-center px-10 phone:px-8 py-14 gap-5">
                            <p className="text-4xl phone:text-2xl font-semibold text-[#66cc33] mb-16">
                                Let's get started
                            </p>
                            <p className="text-[#66cc33] text-lg font-semibold phone:text-center">
                                Register Today and get $10 welcome bonus
                            </p>
                            <div className="w-full h-max flex flex-col gap-3">
                                <p className="text-[#66cc33] text-lg font-semibold">
                                    Full Name
                                </p>
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col gap-3">
                                <p className="text-[#66cc33] text-lg font-semibold">
                                    Username
                                </p>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col gap-3">
                                <p className="text-[#66cc33] text-lg font-semibold">
                                    Email
                                </p>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col gap-3">
                                <p className="text-[#66cc33] text-lg font-semibold">
                                    Password
                                </p>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col gap-3 mb-10 phone:mb-7">
                                <p className="text-[#66cc33] text-lg font-semibold">
                                    Confirm Password
                                </p>
                                <input
                                    type="password"
                                    placeholder="Re-enter your password"
                                    className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                />
                            </div>
                            <button className="px-12 py-3 bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600">
                                REGISTER
                            </button>
                            <p className="text-lg font-semibold text-[#66cc33]">
                                Already have an account?{" "}
                                <NavLink to={"/login"}>
                                    <span className="text-orange-400 cursor-pointer">
                                        Sign In
                                    </span>
                                </NavLink>
                            </p>
                        </div>
                        <p className="text-2xl phone:text-xl font-semibold text-white phone:text-center">
                            Invest by over 50,000 people worldwide
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Register;
