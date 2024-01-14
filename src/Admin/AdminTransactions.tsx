import {useState} from "react";
import {BsEye} from "react-icons/bs";
import {CiMenuKebab} from "react-icons/ci";

const AdminTransactions = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                <div className="w-max h-10 flex items-center gap-4 justify-between bg-white">
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
                </div>
            </div>
        </>
    );
};

export default AdminTransactions;
