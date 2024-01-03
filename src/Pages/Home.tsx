import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logo from "../assets/TheExpressTradesLogo.svg";
import {useEffect, useState} from "react";
import "../index.css";
import heroimg from "../assets/city-man.png";
import {NavLink} from "react-router-dom";

const Home = () => {
    const [showHeader2, setShowHeader2] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 4; // Adjust this value as needed

        setShowHeader2(scrollPosition > threshold);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="w-full h-max">
                {showHeader2 && <Header />}
                <div className="homebg ">
                    <div className="w-full h-20 bg-transparent flex items-center justify-between px-28 border-b-[1px] border-b-gray-400">
                        <div className="w-max h-full">
                            <img src={logo} alt="" className="w-56 h-20" />
                        </div>
                        <div className="w-max h-full flex gap-10 items-center text-lg font-semibold z-10">
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
                    </div>
                    <div className="w-full h-[120vh] flex">
                        <div className="w-[70%] h-max flex flex-col pl-28 pt-44 gap-8 text-white z-10">
                            <p className="text-8xl font-bold">
                                Take Your Portfolio to the Next Level
                            </p>
                            <p className="text-xl">
                                Ultimate cryptocurrency and forex portfolio
                                management suite
                            </p>
                            <div className="w-full h-max flex justify-end pr-20">
                                <button className="px-8 py-3 bg-gradient-to-r from-[#903eff] via-transparent to-indigo-900 h-max w-max rounded-full text-white shadow-xl">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className="w-[70%] h-full">
                            <img
                                src={heroimg}
                                alt=""
                                className="w-[60%] absolute top-0 right-0 z"
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
