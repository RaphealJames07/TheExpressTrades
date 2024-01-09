import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiSolidOffer} from "react-icons/bi";
// import {FiPlus} from "react-icons/fi";

const InvestConfirm = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col items-center px-10 phone:px-4 py-8 gap-3">
                    <p className="text-base text-[rgb(128,148,174)] flex items-center gap-1">
                        <FaArrowLeft />
                        Back to plan
                    </p>
                    <p className="text-4xl phone:text-3xl text-[rgb(54,74,99)]">
                        Ready to get started?
                    </p>
                    {/* <div className="w-[60%] phone:w-full h-max border border-[rgb(195,70,60)] bg-[#fceae9] flex flex-col gap-2 justify-center pl-16 py-4 mt-8 px-4">
                        <p className="text-sm text-[rgb(195,70,60)]">
                            Insufficient balance!
                        </p>
                        <p className="text-xs text-[rgb(195,70,60)]">
                            Your account balance is low, you need to deposit
                            more funds to purchase this plan
                        </p>
                        <button className="w-max h-max px-8 py-2 text-sm flex items-center rounded-full bg-[#f4bd0e] text-white">
                            <FiPlus />
                            Add
                        </button>
                    </div> */}
                    <div className="w-[60%] phone:w-full h-20 border border-gray-300 bg-white flex items-center mt-8 px-4">
                        <div className="w-max h-max flex items-center gap-2">
                            <BiSolidOffer className="w-8 h-8 text-[#8094ae]" />
                            <p className="w-max h-max flex flex-col text-sm font-medium text-[rgb(54,74,99)]">
                                SILVER PLAN
                                <span className="text-xs text-[rgb(128,148,174)] font-normal">
                                    Invest for 7 days and get 10% profit
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[60%] phone:w-full h-max mt-6 flex flex-col gap-3">
                        <p className="text-[rgb(52,67,87)] font-medium text-sm">
                            Enter Your Amount
                        </p>
                        <div className="w-full h-16 border border-gray-300 bg-white active:border-red-200 active:border focus:border-red-200 flex items-center ">
                            <input
                                type="text"
                                className="w-[92%] phone:w-[85%] h-full outline-none border-none pl-3 "
                            />
                            <p className="w-14 border-l border-l-gray-400 pl-3">
                                USD
                            </p>
                        </div>
                        <p className="italic text-[rgb(128,148,174)] text-xs">
                            Note: Minimum invest 3,000.00 USD and upto 15,000.00
                            USD
                        </p>
                    </div>
                    <div className="w-[60%] phone:w-full h-20 border border-gray-300 bg-white flex items-center mt-8 px-4">
                        <div className="w-max h-max flex items-center gap-2">
                            <BiSolidOffer className="w-8 h-8 text-[#8094ae]" />
                            <p className="w-max h-max flex flex-col text-sm font-medium text-[rgb(54,74,99)]">
                                Wallet
                                <span className="text-xs text-[rgb(128,148,174)] font-normal">
                                    current balance: 0.000214 ($10.00)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[60%] phone:w-full h-20 flex items-center justify-center">
                        <button className="w-full h-max flex items-center justify-center gap-2 bg-[#e14954] rounded text-white px-6 py-3 text-sm font-semibold">
                            CONTINUE
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvestConfirm;
