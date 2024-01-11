import axios from "axios";
import {useEffect} from "react";

const Transactions = () => {
    const url = "https://express-trades.onrender.com/api/v1/user/all-payments"
    const getAllPayments = () => {
        axios
            .get(url)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    useEffect(() => {
        getAllPayments();
    }, []);

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                    <p className="text-[rgb(54,74,99)] font-semibold text-2xl">
                        Transactions
                    </p>
                    <div className="w-full h-max border border-gray-200 bg-white rounded">
                        <div className="w-full h-16 text-xl flex items-center pl-6 text-[rgb(54,74,99)] font-semibold">
                            My Deposit
                        </div>
                        <div className="w-full h-10 border-t border-t-gray-300 pl-6 flex">
                            <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                Details
                            </div>
                            <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                Order
                            </div>
                            <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                Amount
                            </div>
                            <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                Status
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <div className="w-full h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex">
                                <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    #1234ABCD
                                </div>
                                <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    BITCOIN PAYMENT
                                </div>
                                <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    $3,000
                                </div>
                                <div className="w-1/4 h-full flex items-center text-xs text-[rgb(128,148,174)] ">
                                    <p className="w-max h-max px-3 py-1 phone:py-1 text-white bg-yellow-400 rounded-full flex items-center justify-center">
                                        pending
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transactions;
