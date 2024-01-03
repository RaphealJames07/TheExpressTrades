import {NavLink} from "react-router-dom";
import logo from "../assets/TheExpressTradesLogo.svg";

const Header = () => {
    return (
        <>
            <div className="w-full h-20 bg-[#7b577b] bg-gradient-to-r from-orange-400 via-transparent to-indigo-700 flex items-center justify-between px-28 fixed top-0 left-0 z-20">
                <div className="w-max h-full">
                    <img src={logo} alt="" className="w-56 h-20" />
                </div>
                <div className="w-max h-full flex gap-10 items-center text-lg font-semibold">
                    <ul className="w-max h-full flex items-center gap-10 text-white">
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
        </>
    );
};

export default Header;
