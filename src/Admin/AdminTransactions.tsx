import axios from "axios";
import {useEffect, useState} from "react";
import {BsEye} from "react-icons/bs";
import {CiMenuKebab} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {adminTransactionView} from "../Redux/Features";
import toast from "react-hot-toast";
import {Modal} from "antd";

const AdminTransactions = () => {
    const dispatch = useDispatch();

    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );

    const getAllTransactions = () => {
        const url =
            "https://express-trades.vercel.app/api/v1/user/all-payments";
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(url, {headers})
            .then((response) => {
                console.log("All Transactions Admin", response?.data?.data);
                dispatch(adminTransactionView(response?.data?.data));
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };
    useEffect(() => {
        getAllTransactions();
    }, []);

    const data = useSelector(
        (state: any) => state.expressTrade.expressTrade.adminTransactions
    );

    const openProofOfPayment = (url: any) => {
        window.open(url, "_blank");
    };

    const [showMenu, setShowMenu] = useState(Array(data.length).fill(false));
    interface UserData {
        _id: string;
        userName: string;
        balance: number;
    }
    const [selectedUserData, setSelectedUserData] = useState<UserData | null>(
        null
    );

    console.log(selectedUserData);
    const [loading, setLoading] = useState<boolean>(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    const handleConfirm = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://express-trades.vercel.app/api/v1/user/payment-confirm/${selectedUserData?._id}`;
        const data = {};

        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .post(url, data, {headers})
            .then((response) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(response);
                setLoading(false);
                getAllTransactions();
                toast.success(`Payment Confirmed`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };
    const handleDecline = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://express-trades.vercel.app/api/v1/user/payment-decline/${selectedUserData?._id}`;
        const data = {};

        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .post(url, data, {headers})
            .then((response) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(response);
                setLoading(false);
                getAllTransactions();
                toast.success(`Payment Declined`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };

    const handleShow = (index: any) => {
        const newShowMenu = [...showMenu];
        newShowMenu[index] = !newShowMenu[index];
        setShowMenu(newShowMenu);
        setSelectedUserData(newShowMenu[index] ? data[index] : null);
    };

    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                {/* <div className="w-max h-10 flex items-center gap-4 justify-between bg-white">
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Reference
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Mode
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Amount
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Status
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Date
                    </div>
                    <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                        Action
                    </div>
                    <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                        Reciept
                    </div>
                </div>
                <div className="w-max h-max flex flex-col gap-2">
                    <div className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow">
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Reference
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Mode
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Amount
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            <p className="w-max h-max px-3 py-1 rounded-full bg-yellow-600 text-white">
                                Pending
                            </p>
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Date
                        </div>

                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium relative">
                            <CiMenuKebab
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setShow(!show)}
                            />
                            {show && (
                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Confirm
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Reject
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Delete
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                            <BsEye className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>
                </div> */}
                {data?.length > 0 ? (
                    <>
                        <div className="w-full h-max border border-gray-200 bg-white rounded overflow-x-auto">
                            <div className="w-max h-10 border-t border-t-gray-300 pl-6 flex gap-4">
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Reference
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Mode
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    User
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Amount
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Status
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Date
                                </div>
                                <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                                    Action
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Receipt
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                {data.map((item: any, index: any) => (
                                    <div
                                        className="w-max h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex gap-4"
                                        key={index}
                                    >
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            #
                                            {item?._id
                                                ?.slice(-10)
                                                .toUpperCase()}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.type}/{item?.mode}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.fullName}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            ${item?.amount}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] ">
                                            <p
                                                className={`w-max h-max px-3 py-1 phone:py-1 text-white rounded-full flex items-center justify-center ${
                                                    item?.status === "Confirmed"
                                                        ? "bg-green-400"
                                                        : item?.status ===
                                                          "Pending"
                                                        ? "bg-yellow-400"
                                                        : item?.status ===
                                                          "Failed"
                                                        ? "bg-red-400"
                                                        : ""
                                                }`}
                                            >
                                                {item?.status}
                                            </p>
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.date}
                                        </div>
                                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium relative">
                                            <CiMenuKebab
                                                className="w-6 h-6 cursor-pointer"
                                                onClick={() =>
                                                    handleShow(index)
                                                }
                                            />
                                            {showMenu[index] && (
                                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={() =>
                                                            setOpenConfirm(true)
                                                        }
                                                    >
                                                        Confirm
                                                    </div>
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={() =>
                                                            handleDecline
                                                        }
                                                    >
                                                        Decline
                                                    </div>
                                                    {/* <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Reject
                                                    </div>
                                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Delete
                                                    </div> */}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            <BsEye
                                                className="w-5 h-5 cursor-pointer"
                                                onClick={() =>
                                                    openProofOfPayment(
                                                        item?.proofOfPayment
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] rounded">
                            <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                                <p className="text-[#cd9f0c]">
                                    No Transaction Recorded Yet
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Modal
                open={openConfirm}
                onCancel={() => setOpenConfirm(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Confirm Payment
                    </p>
                    <p>Are you sure you want to confirm this payment?</p>
                    <div className="w-max h-max flex gap-6">
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={handleConfirm}
                            disabled={loading}
                        >
                            {loading ? "LOADING..." : "CONFIRM"}
                        </button>
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={() => setOpenConfirm(false)}
                            disabled={loading}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AdminTransactions;
