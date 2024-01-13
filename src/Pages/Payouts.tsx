import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {oneUser} from "../Redux/Features";

const Payouts = () => {
    const [btc, setBtc] = useState<string>("");
    const [eth, setEth] = useState<string>("");
    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );
    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );
    const oneUserData = useSelector(
        (state: any) => state.expressTrade.expressTrade.getOneUser
    );
    const dispatch = useDispatch();

    const handleUpdate = (e: any) => {
        e.preventDefault();
        if (!btc && !eth) {
            toast.error("Please enter your wallet address");
        } else {
            const url = "https://express-trades.vercel.app/api/v1/user/update";
            const data: any = {};
            if (btc !== "") data.bitcoinWallet = btc;
            if (eth !== "") data.ethereumWallet = eth;

            if (Object.keys(data).length === 0) {
                alert("No fields to update.");
                return;
            }
            const token = userToken;
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .post(url, data, {headers})
                .then((response) => {
                    toast.success("Wallet Updated successfully");
                    console.log(response);
                    getOne();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error?.response?.data?.message);
                });
        }
    };

    const getOne = () => {
        const url = `https://express-trades.vercel.app/api/v1/user/one-user/${user._id}`;

        axios
            .get(url)
            .then((response) => {
                console.log(response);
                dispatch(oneUser(response.data.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getOne();
    }, []);

    return (
        <>
            <div className="w-full h-max pt-5 flex flex-col gap-2">
                <p className="text-xl text-[rgb(54,74,99)] font-semibold">
                    Payout Settings
                </p>
                <p className="text-sm text-[rgb(82,100,132)] font-medium">
                    Kindly provide your withdrawal details.
                </p>
                <div className="w-full h-max flex justify-center mt-5 flex-col gap-4">
                    <div className="w-full h-max flex flex-col gap-2">
                        <p>BTC Address</p>
                        <div className="w-max min-w-40 h-10 rounded shadow bg-gray-300 border border-red-200 px-2 flex items-center">
                            {oneUserData?.bitcoinWallet}
                        </div>
                        <p>ETH Address</p>
                        <div className="w-max min-w-40 h-10 rounded shadow bg-gray-300 border border-red-200 px-2 flex items-center">
                            {oneUserData?.ethereumWallet}
                        </div>
                    </div>
                    <div className="w-1/2 phone:w-full h-max p-5 rounded border flex flex-col gap-3 border-gray-300 bg-white">
                        <p className="text-[rgb(54,74,99)] font-semibold text-2xl phone:text-xl phone:text-center">
                            CRYPTO WITHDRAWAL
                        </p>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(52,67,87)] text-sm font-medium">
                                Bitcoin Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 outline-1 outline-red-200 pl-2"
                                onChange={(e) => setBtc(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(52,67,87)] text-sm font-medium">
                                Etrhereum Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 outline-1 outline-red-200 pl-2"
                                onChange={(e) => setEth(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-max h-max px-5 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={handleUpdate}
                        >
                            SAVE CHANGES
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payouts;
