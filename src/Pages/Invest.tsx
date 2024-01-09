import {FaArrowRight} from "react-icons/fa";
import {useNavigate} from "react-router";
useNavigate;

const Invest = () => {
    const nav = useNavigate();
    const handleProceed = () => {
        nav("/user/new-investment/100");
    };
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                    <div className="w-full h-max flex flex-col items-center gap-2">
                        <p className="text-[rgb(128,148,174)] text-base">
                            Choose an option
                        </p>
                        <p className="text-[rgb(54,74,99)] text-4xl">
                            Trading Plan
                        </p>
                        <p className="text-[rgb(82,100,132)]">
                            Choose your investment plan and start earning.
                        </p>
                    </div>
                    <div className="w-full h-max overflow-x-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin">
                        <div className="w-max h-max flex p-2 gap-8">
                            <div className="w-[21rem] h-[30rem] border border-gray-100 bg-white rounded shadow">
                                <div className="w-full h-[40%] flex flex-col items-center justify-between border-b border-b-gray-300 px-12 py-7">
                                    <p className="text-2xl text-[rgb(54,74,99)] font-semibold">
                                        SILVER PLAN
                                    </p>
                                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                                        Enjoy entry level of invest earn money.
                                    </p>
                                    <div className="w-full h-max flex justify-between">
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            10%{" "}
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Daily Interest
                                            </span>
                                        </p>
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            7
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Term Days
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-[60%] flex flex-col items-center gap-2 px-10 py-7">
                                    <div className="w-full h-max flex flex-col text-[rgb(111,131,165)] text-sm font-medium gap-3">
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                    </div>
                                    <p className="text-[rgb(111,131,165)] text-sm font-medium">
                                        ADDON
                                    </p>
                                    <p className="text-center text-[rgb(255,99,165)] text-sm">
                                        Earn 10% Profit Daily on $3000-15000
                                    </p>
                                    <button className="bg-[#f5f6fa] border border-gray-300 rounded text-xs font-medium w-max h-max px-6 py-2 text-gray-500 mt-6">
                                        CHOOSE THIS PLAN
                                    </button>
                                </div>
                            </div>
                            <div className="w-[21rem] h-[30rem] border border-gray-100 bg-white rounded shadow">
                                <div className="w-full h-[40%] flex flex-col items-center justify-between border-b border-b-gray-300 px-12 py-7">
                                    <p className="text-2xl text-[rgb(54,74,99)] font-semibold">
                                        SILVER PLAN
                                    </p>
                                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                                        Enjoy entry level of invest earn money.
                                    </p>
                                    <div className="w-full h-max flex justify-between">
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            10%{" "}
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Daily Interest
                                            </span>
                                        </p>
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            7
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Term Days
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-[60%] flex flex-col items-center gap-2 px-10 py-7">
                                    <div className="w-full h-max flex flex-col text-[rgb(111,131,165)] text-sm font-medium gap-3">
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                    </div>
                                    <p className="text-[rgb(111,131,165)] text-sm font-medium">
                                        ADDON
                                    </p>
                                    <p className="text-center text-[rgb(255,99,165)] text-sm">
                                        Earn 10% Profit Daily on $3000-15000
                                    </p>
                                    <button className="bg-[#f5f6fa] border border-gray-300 rounded text-xs font-medium w-max h-max px-6 py-2 text-gray-500 mt-6">
                                        CHOOSE THIS PLAN
                                    </button>
                                </div>
                            </div>
                            <div className="w-[21rem] h-[30rem] border border-gray-100 bg-white rounded shadow">
                                <div className="w-full h-[40%] flex flex-col items-center justify-between border-b border-b-gray-300 px-12 py-7">
                                    <p className="text-2xl text-[rgb(54,74,99)] font-semibold">
                                        SILVER PLAN
                                    </p>
                                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                                        Enjoy entry level of invest earn money.
                                    </p>
                                    <div className="w-full h-max flex justify-between">
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            10%{" "}
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Daily Interest
                                            </span>
                                        </p>
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            7
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Term Days
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-[60%] flex flex-col items-center gap-2 px-10 py-7">
                                    <div className="w-full h-max flex flex-col text-[rgb(111,131,165)] text-sm font-medium gap-3">
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                    </div>
                                    <p className="text-[rgb(111,131,165)] text-sm font-medium">
                                        ADDON
                                    </p>
                                    <p className="text-center text-[rgb(255,99,165)] text-sm">
                                        Earn 10% Profit Daily on $3000-15000
                                    </p>
                                    <button className="bg-[#f5f6fa] border border-gray-300 rounded text-xs font-medium w-max h-max px-6 py-2 text-gray-500 mt-6">
                                        CHOOSE THIS PLAN
                                    </button>
                                </div>
                            </div>
                            <div className="w-[21rem] h-[30rem] border border-gray-100 bg-white rounded shadow">
                                <div className="w-full h-[40%] flex flex-col items-center justify-between border-b border-b-gray-300 px-12 py-7">
                                    <p className="text-2xl text-[rgb(54,74,99)] font-semibold">
                                        SILVER PLAN
                                    </p>
                                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                                        Enjoy entry level of invest earn money.
                                    </p>
                                    <div className="w-full h-max flex justify-between">
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            10%{" "}
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Daily Interest
                                            </span>
                                        </p>
                                        <p className="text-3xl text-[rgb(54,74,99)] font-semibold flex flex-col gap-1 items-center">
                                            7
                                            <span className="text-xs text-[rgb(128,148,174)] font-medium">
                                                Term Days
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-[60%] flex flex-col items-center gap-2 px-10 py-7">
                                    <div className="w-full h-max flex flex-col text-[rgb(111,131,165)] text-sm font-medium gap-3">
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                        <div className="w-full h-max flex justify-between">
                                            <p>Min Deposit</p>
                                            <span>-</span>
                                            <p>$3,000.00</p>
                                        </div>
                                    </div>
                                    <p className="text-[rgb(111,131,165)] text-sm font-medium">
                                        ADDON
                                    </p>
                                    <p className="text-center text-[rgb(255,99,165)] text-sm">
                                        Earn 10% Profit Daily on $3000-15000
                                    </p>
                                    <button className="bg-[#f5f6fa] border border-gray-300 rounded text-xs font-medium w-max h-max px-6 py-2 text-gray-500 mt-6">
                                        CHOOSE THIS PLAN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center">
                        <button
                            className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-3 text-sm font-semibold"
                            onClick={handleProceed}
                        >
                            CONTINUE
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Invest;
