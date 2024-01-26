import {Modal} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {CiMenuKebab} from "react-icons/ci";
import {useSelector} from "react-redux";
import {allUsers, user} from "../Redux/Features";
import {useDispatch} from "react-redux";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(
        (state: any) => state.expressTrade.expressTrade.allAdminUsers
    );
    console.log("Try ME", users);
    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );
    const [showMenu, setShowMenu] = useState(Array(users.length).fill(false));
    interface UserData {
        _id: string;
        userName: string;
        balance: number;
    }
    const [selectedUserData, setSelectedUserData] = useState<UserData | null>(
        null
    );

    const [crebit, setCrebit] = useState<boolean>(false);
    const [openSuspend, setOpenSuspend] = useState<boolean>(false);
    const [shudSuspend, setShudSuspend] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [adminPassword, setAdminPassword] = useState<string>("");
    const [crebitAmount, setCrebitAmount] = useState<number>();
    const [crebitType, setCrebitType] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleCrebit = () => {
        if (!crebitAmount && !crebitType) {
            alert("All fields required");
        } else {
            const toastLoadingId = toast.loading("Please wait...");
            setLoading(true);
            const url = `https://express-trades.vercel.app/api/v1/user/balance-update/${selectedUserData?._id}`;
            const data = {amount: crebitAmount, type: crebitType};
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
                    getAllUsers();
                    setCrebitAmount(0);
                    setCrebitType("");
                    toast.success(
                        `${selectedUserData?.userName} ${crebitType}ed successfully`
                    );
                })
                .catch((error) => {
                    setLoading(false);
                    toast.dismiss(toastLoadingId);
                    console.log(error);
                    setLoading(false);
                });
        }
    };
    const handleDeleteUser = () => {
        if (!adminPassword) {
            alert("Enter password");
        } else {
            const toastLoadingId = toast.loading("Please wait...");
            setLoading(true);
            const url = `https://express-trades.vercel.app/api/v1/user/delete/${selectedUserData?._id}`;
            const data = {password: adminPassword};
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
                    getAllUsers();
                    setCrebitAmount(0);
                    setCrebitType("");
                    toast.success(`Account Deleted Successfully`);
                })
                .catch((error) => {
                    setLoading(false);
                    toast.dismiss(toastLoadingId);
                    console.log(error);
                });
        }
    };
    const handleSuspendUser = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://express-trades.vercel.app/api/v1/user/suspend/${selectedUserData?._id}`;
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
                getAllUsers();
                setOpenSuspend(false)
                toast.success(`Account Suspended Successfully`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };
    const handleUnSuspend = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://express-trades.vercel.app/api/v1/user/un-suspend/${selectedUserData?._id}`;
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
                getAllUsers();

                toast.success(`Account Active`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };

    const handleApproveUser = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://express-trades.vercel.app/api/v1/user/approve/${selectedUserData?._id}`;
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
                getAllUsers();
                setOpenSuspend(false)
                toast.success(`User Approved Successfully`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };

    // const handleShow = (index: any) => {
    //     setCrebitAmount(0);
    //     setCrebitType("");
    //     const newShowMenu = [...showMenu];
    //     newShowMenu[index] = !newShowMenu[index];
    //     setShowMenu(newShowMenu);
    //     setSelectedUserData(newShowMenu[index] ? users[index] : null);
    // };

    const handleShow = (index: any) => {
        setCrebitAmount(0);
        setCrebitType("");
        const newShowMenu = [...showMenu];
        newShowMenu[index] = !newShowMenu[index];
        setShowMenu(newShowMenu);
        setSelectedUserData(newShowMenu[index] ? users[index] : null);
        setShudSuspend(users[index]?.status === "Suspended");
        setOpenDelete(false); // Reset other menu states
        setCrebit(false);
    };

    const getAllUsers = () => {
        const url = "https://express-trades.vercel.app/api/v1/user/all-users";
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(url, {headers})
            .then((response) => {
                console.log("All Users", response?.data?.data);
                dispatch(allUsers(response?.data?.data));
                setCrebit(false);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };
    useEffect(() => {
        getAllUsers();
    }, []);

    // console.log(users);
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                <div className="w-max h-10 flex items-center gap-4 justify-between bg-gray-300">
                    <p className="w-32 h-full flex justify-center items-center">
                        Name
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        User Name
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Email
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Status
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Approved
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Account Balance
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Date registered
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Action
                    </p>
                </div>
                <div className="w-max h-max flex flex-col gap-2">
                    {users?.map((item: any, index: any) => (
                        <div
                            className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow"
                            key={index}
                        >
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.fullName}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.userName}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.email}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.status}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {
                                    item.isApproved ? "True" : "False"
                                }
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                ${item?.balance}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.dateRegistered}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm relative">
                                <CiMenuKebab
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => handleShow(index)}
                                />
                                {showMenu[index] && (
                                    <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() => setCrebit(true)}
                                        >
                                            Credit/Debit
                                        </div>
                                        {/* <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer" onClick={()=>setOpenSuspend(true)}>
                                            Suspend
                                        </div> */}
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() =>
                                                shudSuspend
                                                    ? handleUnSuspend()
                                                    : setOpenSuspend(true)
                                            }
                                        >
                                            {shudSuspend
                                                ? "Unsuspend"
                                                : "Suspend"}
                                        </div>

                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() => setOpenDelete(true)}
                                        >
                                            Delete User
                                        </div>
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={handleApproveUser}
                                        >
                                            Approve User
                                        </div>
                                    </div>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                open={crebit}
                onCancel={() => setCrebit(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Credit/Debit {selectedUserData?.userName}
                    </p>
                    <p>
                        Current Balance{" "}
                        <span>${selectedUserData?.balance}</span>
                    </p>
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max">
                            <p>Amount</p>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded outline-red-200 pl-3"
                                onChange={(e) =>
                                    setCrebitAmount(Number(e.target.value))
                                }
                                value={crebitAmount}
                            />
                        </div>
                        <div className="w-full h-max">
                            <p>Type</p>
                            <select
                                name=""
                                id=""
                                className="w-full h-10 border border-gray-300 rounded outline-red-200 pl-3"
                                onChange={(e) => {
                                    setCrebitType(e.target.value);
                                }}
                                value={crebitType}
                            >
                                <option value="select type">Select type</option>
                                <option value="Credit">Credit</option>
                                <option value="Debit">Debit</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                        onClick={handleCrebit}
                        disabled={loading}
                    >
                        {loading ? "LOADING..." : "SEND"}
                    </button>
                </div>
            </Modal>
            <Modal
                open={openSuspend}
                onCancel={() => setOpenSuspend(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Suspend {selectedUserData?.userName}
                    </p>
                    <p>Are you sure you want to suspend this user?</p>
                    <div className="w-max h-max flex gap-6">
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={handleSuspendUser}
                            disabled={loading}
                        >
                            {loading ? "LOADING..." : "SUSPEND"}
                        </button>
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={() => setOpenSuspend(false)}
                            disabled={loading}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openDelete}
                onCancel={() => setOpenDelete(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Delete {selectedUserData?.userName}
                    </p>
                    <p className="text-xs text-center w-[90%]">
                        Deleting this user will clear all records and info
                        permanently. you can suspend{" "}
                        {selectedUserData?.userName}
                    </p>
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max">
                            <p>Password</p>
                            <input
                                type="password"
                                className="w-full h-10 border border-gray-300 rounded outline-red-200 pl-3"
                                onChange={(e) =>
                                    setAdminPassword(e.target.value)
                                }
                                value={adminPassword}
                            />
                        </div>
                    </div>
                    <button
                        className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                        onClick={handleDeleteUser}
                        disabled={loading}
                    >
                        {loading ? "LOADING..." : "DELETE"}
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Users;
