import {useState} from "react";
import {CiMenuKebab} from "react-icons/ci";

const Users = () => {
    const [show, setShow] = useState(false);
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
                    <div className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow">
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            James Okafor
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            jokes12
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            jokes@gmail.com
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            $2300
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            10-01-2023
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm relative">
                            <CiMenuKebab
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setShow(!show)}
                            />
                            {show && (
                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Credit/Debit
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Suspend
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Block
                                    </div>
                                </div>
                            )}
                        </p>
                    </div>
                    <div className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow">
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            James Okafor
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            jokes12
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            jokes@gmail.com
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            $2300
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm">
                            10-01-2023
                        </p>
                        <p className="w-32 h-full flex justify-center items-center text-sm relative">
                            <CiMenuKebab
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setShow(!show)}
                            />
                            {show && (
                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Credit/Debit
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Suspend
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Block
                                    </div>
                                </div>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
