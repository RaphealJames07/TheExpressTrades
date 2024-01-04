import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logo from "../assets/TheExpressTradesLogo.svg";
import {useEffect, useState} from "react";
import "../index.css";
import heroimg from "../assets/city-man.png";
import {NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";

const Home = () => {
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
                <div className="homebg phone:h-[110vh] ">
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
                    <div className="w-full h-[120vh] phone:h-[80vh] flex phone:flex-col-reverse ">
                        <div className="w-[70%] phone:w-full ph-h-0 h-max phone:full flex flex-col phone:items-center pl-28 phone:pl-0 pt-44 phone:pt-0 gap-8 text-white z-10">
                            <p className="text-8xl font-bold phone:w-full phone:text-center phone:text-5xl">
                                Take Your Portfolio to the Next Level
                            </p>
                            <p className="text-xl phone:w-full phone:text-center">
                                Ultimate cryptocurrency and forex portfolio
                                management suite
                            </p>
                            <div className="w-full h-max flex justify-end phone:justify-center pr-20 phone:pr-0">
                                <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 h-max w-max rounded-full text-white shadow-xl">
                                    Get Started
                                </button>
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
                    <div className="w-full h-max">
                        {/* More Home Contents */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
