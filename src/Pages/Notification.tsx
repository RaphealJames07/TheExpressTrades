import {LiaPiggyBankSolid} from "react-icons/lia";

import axios from "axios";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Notification = () => {
    type dataType = {
        amount: number;
        status: string;
        type: string;
        date: string;
    };
    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );
    // console.log(userToken);
    const [data, setData] = useState<Array<dataType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const getAllTransactions = () => {
        setLoading(true);
        const url =
            "https://express-trades.vercel.app/api/v1/user/transactions";
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .get(url, {headers})
            .then((response) => {
                // console.log(response);
                setData(response?.data?.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getAllTransactions();
    }, []);
    const numLength = data.length;
    localStorage.setItem("numOfTransactionTET", String(numLength));
    return (
        <div className="w-full h-max">
            <div className="w-full h-max flex items-center flex-col px-10 phone:px-4 py-8 gap-3">
                <div className="w-full h-10 bg-white pl-3 flex items-center">
                    <p className="text-xs text-[#e8757d]">
                        Inbox{" "}
                        <span className="text-white bg-[#e8757d] py-1 px-2">
                            {data?.length}
                        </span>
                    </p>
                </div>
                <div className="w-full h-max flex flex-col gap-4 items-center bg-white p-2">
                    {loading ? (
                        <>
                            {" "}
                            <p className="text-xl font-semibold text-gray-600">
                                Loading....
                            </p>{" "}
                        </>
                    ) : data.length === 0 ? (
                        <>
                            <p className="text-xl font-semibold text-gray-600">
                                No Inbox
                            </p>{" "}
                        </>
                    ) : (
                        data.map((item, index) => (
                            <div
                                className="w-full h-20 flex items-center justify-between bg-slate-100 rounded-md p-1 text-sm"
                                key={index}
                            >
                                <div className="w-max h-full flex items-center flex-col justify-between py-2">
                                    <LiaPiggyBankSolid className="w-8 h-8" />
                                    <p className="text-sm">{item?.type}</p>
                                </div>
                                <div className="w-max h-full flex flex-col justify-between py-2">
                                    <p>Date</p>
                                    <p>{item?.date}</p>
                                </div>
                                <div className="w-max h-full flex flex-col justify-between py-2">
                                    <p>Amount</p>
                                    <p>{item?.amount}</p>
                                </div>
                                <div className="w-max h-full flex flex-col justify-between py-2">
                                    <p>Status</p>
                                    <p
                                        className={`w-max h-max px-2 py-1 text-black rounded-full flex font-medium items-center justify-center ${
                                            item?.status === "Confirmed"
                                                ? "bg-green-400 text-white"
                                                : item?.status === "Pending"
                                                ? "bg-yellow-400"
                                                : item?.status === "Failed"
                                                ? "bg-red-400"
                                                : ""
                                        }`}
                                    >
                                        {item?.status}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;
