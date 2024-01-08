import {FaLongArrowAltRight} from "react-icons/fa";
import {FiInfo, FiPlusCircle} from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="w-full h-max ">
            <div className="w-full h-max flex flex-col px-10 py-8 gap-3">
                <p className="text-base text-[rgb(128,148,174)]">Welcome,</p>
                <div className="w-full flex justify-between">
                    <p className="text-[rgb(54,74,99)] text-4xl">James Jnr</p>
                    <div className="w-max h-max flex items-center gap-4">
                        <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
                            <FiPlusCircle />
                            Deposit
                        </button>
                        <button className="bg-[#f4bd0e] w-max h-max flex items-center gap-2 rounded text-white px-6 py-2 text-sm font-semibold">
                            <FaLongArrowAltRight />
                            My Plans
                        </button>
                    </div>
                </div>
                <p className="text-sm text-[#526484]">
                    At a glance summary of your account.
                </p>
                <div className="w-full h-12 cursor-pointer bg-sky-300 mt-8">
                    Tradeview scroll content comes here
                </div>
                <div className="w-max h-32 bg-white border flex flex-col justify-between border-gray-200 rounded p-6">
                    <p className="flex items-center gap-1 text-[#526484]">
                        Available Balance{" "}
                        <span>
                            <FiInfo />
                        </span>
                    </p>
                    <div className="w-max h-max flex justify-between gap-20">
                        <p className="text-4xl text-[rgb(82,100,132)]">
                            0.000228 BTC
                        </p>
                        <p className="text-sm font-semibold text-[rgb(30,224,172)] flex items-end">
                            = $10.00
                        </p>
                    </div>
                </div>
                <div className="w-full h-[80vh] flex items-center justify-center mt-5">
                    <div className="w-[80%] h-full rounded border border-gray-200"></div>
                </div>
            </div>
            <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] mt-10">
                <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                    <p className="text-[#cd9f0c]">You do not have any plans</p>
                    <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
                        <FiPlusCircle />
                        Invest Now
                    </button>
                </div>
            </div>
            <div className="w-full h-max flex justify-center pl-20 flex-col gap-2 p-5 mt-5 border-t border-gray-300 ">
                <p className="text-[rgb(54,74,99)] text-xl font-bold">We are here to help you!</p>
                <p className="text-[rgb(128,148,174)]">
                    port ticket, manage request, report an issues. Our team
                    support team will get back to you by email.
                </p>
                <button className="w-max h-max rounded text-[#e14954] border border-[#e14954] px-6 py-2 text-sm font-semibold">
                  
                    Get Support Now
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
