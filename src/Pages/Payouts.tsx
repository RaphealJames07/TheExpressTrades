import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";

const Payouts = () => {
    const [btc, setBtc] = useState<string>("");
    const [eth, setEth] = useState<string>("");

    const handleUpdate = (e: any) => {
        e.preventDefault();
        if (!btc && !eth) {
            toast.error("Please enter your wallet address");
        } else {
            const url = "https://express-trades.vercel.app/api/v1/user/update";
            const data = {
                btc: btc,
                eth: eth,
            };
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <>
            <div className="w-full h-max pt-5 flex flex-col gap-2">
                <p className="text-xl text-[rgb(54,74,99)] font-semibold">
                    Payout Settings
                </p>
                <p className="text-sm text-[rgb(82,100,132)] font-medium">
                    Kindly provide your withdrawal details.
                </p>
                <div className="w-full h-max flex justify-center mt-5 ">
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
                                className="w-full h-10 rounded border border-gray-300 outline-1 outline-red-200"
                                onChange={(e) => setBtc(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(52,67,87)] text-sm font-medium">
                                Etrhereum Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 outline-1 outline-red-200"
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
