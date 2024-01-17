import {FaBtc, FaEthereum} from "react-icons/fa";
import {IoCopyOutline} from "react-icons/io5";
import btcCode from "../assets/btccode.jpg";
import ethCode from "../assets/ethcode.jpg";
import {useState} from "react";
import {IoMdArrowRoundBack} from "react-icons/io";
// import toast from "react-hot-toast";
import axios from "axios";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";

const Deposit = () => {
    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );
    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );
    const [btc, setBtc] = useState<boolean>(false);
    const [eth, setEth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isBtcPay, setIsBtcPay] = useState<boolean>(false);
    const [isEthPay, setIsEthPay] = useState<boolean>(false);
    const [direct, setDirect] = useState<boolean>(false);
    const [isPayed, setIsPayed] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>("");
    const [mode, setMode] = useState<string>("");
    const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);

    const handleSelectBtc = () => {
        setBtc(true);
        setEth(false);
        setIsEthPay(false);
        setIsBtcPay(true);
    };
    const handleSelectEth = () => {
        setBtc(false);
        setEth(true);
        setIsEthPay(true);
        setIsBtcPay(false);
    };

    const handleProceed = () => {
        if (!/^[0-9]+$/.test(amount)) {
            alert("Amount must be a number only");
        } else if (!amount && !btc) {
            alert("Please select a mode and enter the amount to deposit!");
        } else if (!amount && !eth) {
            alert("Please select a mode and enter the amount to deposit!");
        } else {
            setDirect(true);
        }
    };
    const handleBack = () => {
        setDirect(!direct);
        setAmount("");
        setBtc(false);
        setEth(false);
        setIsEthPay(false);
        setIsBtcPay(false);
        if (fileInput) {
            // Reset the file input value
            fileInput.value = "";
        }
    };

    const [selectedFileName, setSelectedFileName] =
        useState<string>("Click to select");
    const [file, setFile] = useState<any>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            setSelectedFileName(file.name);
        }
    };

    const handleIsPayed = () => {
        setIsPayed(true);
        if (btc === true) {
            setMode("Bitcoin");
        } else {
            setMode("Ethereum");
        }
    };

    const handleSubmit = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true)
        console.log(amount);
        const data = new FormData();
        data.append("proofOfPayment", file);
        data.append("file", file);
        data.append("amount", amount);
        data.append("user", user._id);
        data.append("fullName", user.fullName);
        data.append("mode", mode);
        // console.log("Here's",data);

        const url = "https://express-trades.vercel.app/api/v1/user/payment";
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Make sure to set the correct content type
        };
        console.log("Data to post:", data);
        axios
            .post(url, data, {headers})
            .then((response) => {
                toast.dismiss(toastLoadingId);
                toast.success("Deposit pending, awaiting confirmation..");
                console.log(response);
                setLoading(false)
            })
            .catch((error) => {
                toast.dismiss(toastLoadingId);
                toast.error("Error Occured please try again or contact admin");
                console.log(error);
                setLoading(false)
            });
    };

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col items-center px-10 phone:px-4 py-8 gap-3">
                    {direct === true && isBtcPay === true ? (
                        <>
                            <div className="text-xl font-semibold text-[rgb(54,74,99)] w-full h-max flex items-center gap-1 ">
                                <span
                                    className="w-max h-max flex items-center hover:bg-gray-200 transition-all duration-300 cursor-pointer px-2"
                                    onClick={handleBack}
                                >
                                    <IoMdArrowRoundBack />
                                    Back
                                </span>
                            </div>
                            <div className="w-[50%] phone:w-full h-max flex flex-col items-center gap-8 bg-white py-6 px-8">
                                <p className="text-[rgb(54,74,99)] font-semibold text-center text-lg">
                                    Transaction details
                                </p>
                                <p className="text-[rgb(82,100,132)] font-medium text-center text-base">
                                    You are about to get 0.004445 BTC for{" "}
                                    {amount}.00 USD*
                                </p>
                                <p className="text-[rgb(128,148,174)] text-center text-xs">
                                    Exchange rate: 1 BTC = 44,998.00 USD
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p className="w-max flex items-center gap-2 text-sm font-semibold">
                                        bc1qxppkw6kmdrwqnzeq8smfxqfwgvnqpxsuul59ve
                                        <span>
                                            <IoCopyOutline />
                                        </span>
                                    </p>
                                </div>
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <img src={btcCode} alt="" className="" />
                                </div>
                                {isPayed ? (
                                    <div className="w-full h-max flex flex-col mt-10 gap-10">
                                        <div className="w-full h-24 border border-[rgb(205,159,12)] bg-[#fef7e2] rounded flex flex-col items-center justify-center gap-1">
                                            <p className="text-sm text-[rgb(205,159,12)]">
                                                {" "}
                                                Attach your proof of payment
                                                below.
                                            </p>
                                            <p className="text-sm text-[rgb(205,159,12)] font-medium">
                                                {" "}
                                                Accepted format: .JPG, .PNG,
                                                .GIF, .PDF
                                            </p>
                                        </div>
                                        <div className="w-full h-10 border border-gray-300 rounded flex">
                                            <input
                                                type="file"
                                                accept="image/jpeg, image/png, image/gif, application/pdf"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                ref={(input) =>
                                                    setFileInput(input)
                                                }
                                                id="fileInput"
                                            />
                                            <label
                                                className="cursor-pointer w-full h-full border-none outline-none flex justify-center items-center bg-gray-200 rounded"
                                                htmlFor="fileInput"
                                            >
                                                <div className="w-max px-2 flex items-center justify-center h-full">
                                                    {selectedFileName}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                ) : null}
                                {isPayed ? (
                                    <button
                                        className="w-max h-max rounded text-white text-base font-semibold py-2 px-6 bg-[#e14954]"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >
                                        {
                                            loading? "Processing..." : "Submit"
                                        }
                                    </button>
                                ) : (
                                    <button
                                        className="w-max h-max rounded text-white text-base font-semibold py-2 px-6 bg-[#e14954]"
                                        onClick={handleIsPayed}
                                    >
                                        I have sent the coin
                                    </button>
                                )}
                            </div>
                        </>
                    ) : direct === true && isEthPay === true ? (
                        <>
                            <div className="text-xl font-semibold text-[rgb(54,74,99)] w-full h-max flex items-center gap-1 ">
                                <span
                                    className="w-max h-max flex items-center hover:bg-gray-200 transition-all duration-300 cursor-pointer px-2"
                                    onClick={handleBack}
                                >
                                    <IoMdArrowRoundBack />
                                    Back
                                </span>
                            </div>
                            <div className="w-[50%] phone:w-full h-max flex flex-col items-center gap-8 bg-white py-6 px-8">
                                <p className="text-[rgb(54,74,99)] font-semibold text-center text-lg">
                                    Transaction details
                                </p>
                                <p className="text-[rgb(82,100,132)] font-medium text-center text-base">
                                    You are about to get 0.004445 ETH for{" "}
                                    {amount}.00 USD*
                                </p>
                                <p className="text-[rgb(128,148,174)] text-center text-xs">
                                    Exchange rate: 1 ETH = 44,998.00 USD
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p className="w-max flex items-center gap-2 text-sm font-semibold">
                                        0x394be2dfCdca86C67cf33A69A0e68aB550A98dB7
                                        <span>
                                            <IoCopyOutline />
                                        </span>
                                    </p>
                                </div>
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <img src={ethCode} alt="" className="" />
                                </div>
                                {isPayed ? (
                                    <div className="w-full h-max flex flex-col mt-10 gap-10">
                                        <div className="w-full h-24 border border-[rgb(205,159,12)] bg-[#fef7e2] rounded flex flex-col items-center justify-center gap-1">
                                            <p className="text-sm text-[rgb(205,159,12)]">
                                                {" "}
                                                Attach your proof of payment
                                                below.
                                            </p>
                                            <p className="text-sm text-[rgb(205,159,12)] font-medium">
                                                {" "}
                                                Accepted format: .JPG, .PNG,
                                                .GIF, .PDF
                                            </p>
                                        </div>
                                        <div className="w-full h-10 border border-gray-300 rounded flex">
                                            <input
                                                type="file"
                                                accept="image/jpeg, image/png, image/gif, application/pdf"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                ref={(input) =>
                                                    setFileInput(input)
                                                }
                                                id="fileInput"
                                            />
                                            <label
                                                className="cursor-pointer w-full h-full border-none outline-none flex justify-center items-center bg-gray-200 rounded"
                                                htmlFor="fileInput"
                                            >
                                                <div className="w-max px-2 flex items-center justify-center h-full">
                                                    {selectedFileName}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                ) : null}
                                {isPayed ? (
                                    <button
                                        className="w-max h-max rounded text-white text-base font-semibold py-2 px-6 bg-[#e14954]"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        className="w-max h-max rounded text-white text-base font-semibold py-2 px-6 bg-[#e14954]"
                                        onClick={handleIsPayed}
                                    >
                                        I have sent the coin
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-[50%] phone:w-full h-max flex flex-col gap-8">
                                <p className="text-[rgb(54,74,99)] text-4xl text-center ">
                                    Add funds to your balance!
                                </p>
                                <div className="w-full h-max flex flex-col gap-2">
                                    <p className="text-[rgb(52,67,87)] text-sm font-medium">
                                        Amount to Deposit <span>USD</span>
                                    </p>
                                    <input
                                        type="text"
                                        className="w-full h-16 border border-gray-300 rounded pl-3 outline-1 outline-red-200"
                                        placeholder="500"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value)
                                        }
                                    />
                                    <p className="text-[rgb(128,148,174)] text-xs flex justify-between items-center">
                                        Minimum: 50.00 USD{" "}
                                        <span>50 USD = 0.001114 BTC</span>
                                    </p>
                                </div>
                                <div className="w-full h-max flex flex-col ">
                                    <p className="text-[rgb(52,67,87)] text-sm font-medium pb-3">
                                        Amount to Deposit <span>USD</span>
                                    </p>
                                    <div className="w-full h-16 border border-b-0 border-gray-300 rounded-t px-4 flex items-center justify-between bg-white">
                                        <div className="w-max h-max flex items-center gap-4 ">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6 rounded-full"
                                                placeholder="500"
                                                checked={btc}
                                                onClick={handleSelectBtc}
                                            />
                                            <p className="text-sm text-[rgb(54,74,99)] font-medium">
                                                Bticoin
                                            </p>
                                        </div>
                                        <span className="w-6 h-6 p-2 rounded-full bg-[#8094ae] flex items-center justify-center text-white">
                                            <FaBtc />
                                        </span>
                                    </div>
                                    <div className="w-full h-16 border border-gray-300 rounded-t px-4 flex items-center justify-between bg-white">
                                        <div className="w-max h-max flex items-center gap-4 ">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6 rounded-full"
                                                placeholder="500"
                                                checked={eth}
                                                onClick={handleSelectEth}
                                            />
                                            <p className="text-sm text-[rgb(54,74,99)] font-medium">
                                                Ethereum
                                            </p>
                                        </div>
                                        <span className="w-6 h-6 p-2 rounded-full bg-[#8094ae] flex items-center justify-center text-white">
                                            <FaEthereum />
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="w-full h-max rounded text-white text-base font-semibold py-2 bg-[#e14954]"
                                    onClick={handleProceed}
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Deposit;
