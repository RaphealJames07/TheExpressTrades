import logo from "../assets/TheExpressTradesLogo.svg";
import {FiBarChart2} from "react-icons/fi";

const User = () => {
    return (
        <>
            <div className="w-full h-max flex">
                <div className="w-[27rem] h-screen bg-[#5f2525] px-5 relative ">
                    <div className="w-full h-16 flex items-center justify-center top-0 left-0">
                        <img src={logo} alt="" className="w-60 h-14" />
                    </div>
                    <div className="h-[90vh] w-full overflow-y-auto scrollbar-thumb-[#341414] scrollbar-track-[#b76161] scrollbar-thin px-6 py-5 flex flex-col gap-5">
                        <div className="w-full h-max flex items-center justify-between">
                            <div className="w-max h-max flex flex-col gap-1">
                                <p className="text-[rgb(169,205,255)] text-xs font-semibold">
                                    AVAILABLE BALANCE
                                </p>
                                <p className="text-[rgb(225,73,84)] flex gap-2 items-end text-2xl">
                                    0.000229
                                    <span className="text-lg font-semibold">
                                        BTC
                                    </span>
                                </p>
                                <p className="text-white font-medium">
                                    10.00 USD
                                </p>
                            </div>
                            <div className="w-max h-max items-center justify-center">
                                <FiBarChart2 className="w-9 h-9 rounded p-2 cursor-pointer bg-white" />
                            </div>
                        </div>
                        <p className="flex justify-between text-[rgb(245,191,195)] font-medium text-sm">
                            Deposit in orders <span>0 BTC</span>
                        </p>
                        <div className="w-full h-max flex justify-between">
                            <button className="w-max h-max flex items-center justify-center px-8 py-3 rounded text-white text-sm font-semibold bg-[#e14954]">
                                DEPOSIT
                            </button>
                            <button className="w-max h-max flex items-center justify-center px-10 py-3 rounded text-white text-sm font-semibold bg-[#1ee0ac]">
                                INVEST
                            </button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full h-max"></div>
            </div>
        </>
    );
};

export default User;
