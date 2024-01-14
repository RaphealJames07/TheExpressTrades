import {Outlet} from "react-router";
import logo from "../assets/TheExpressTradesLogo.svg";
import {BiUser} from "react-icons/bi";
import {useState} from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <div className="w-full h-max bg-sky-50">
                <div className="w-full h-12 bg-[#5f2525] shadow flex  px-10 justify-between">
                    <div className="w-max h-full flex items-center">
                        <img src={logo} alt="" className="w-48" />
                    </div>
                    <div className="w-max h-full flex items-center relative">
                        <BiUser
                            className="w-6 h-6 border border-white rounded-full text-white cursor-pointer"
                            onClick={() => setShow(!show)}
                        />
                        {show && (
                            <div className="absolute top-10 right-[-15px] w-max px-4 py-2 h-max flex flex-col items-center justify-center bg-white">
                                <div className="w-max h-16">
                                    <p>Rapheal James</p>
                                    <p className="text-xs">james@admin.com</p>
                                </div>
                                <button className="w-max h-max px-2 py-2 rounded text-xs font-medium bg-slate-200">
                                    SignOut
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full h-max flex flex-col px-5">
                    <div className="w-full h-16 shadow flex items-center gap-5 ">
                        <NavLink to={"/admin/users"}>
                            <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
                                Users
                            </div>
                        </NavLink>
                        <NavLink to={"/admin/transactions"}>
                            <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
                                Transactions
                            </div>
                        </NavLink>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Admin;
