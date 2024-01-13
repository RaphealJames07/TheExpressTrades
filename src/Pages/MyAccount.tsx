import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";

const MyAccount = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                    <p className="text-base text-[rgb(128,148,174)]">
                        My Account
                    </p>
                    <p className="text-4xl text-[rgb(54,74,99)]">
                        Account Settings
                    </p>
                    <p className="text-sm text-[rgb(82,100,132)]">
                        You have full control to manage your own account
                        setting.{" "}
                    </p>
                    <div className="w-full h-max mt-8">
                        <div className="w-full h-10 border-b border-b-gray-300 flex gap-1 text-sm font-semibold ">
                            <NavLink
                                to={"/user/my-account/profile"}
                                // className={``}
                                className={({isActive}) =>
                                    !isActive
                                        ? "transition-all "
                                        : "transition-all border-b-[#e14954] border-b-2 text-[#e14954] "
                                }
                            >
                                <div className="w-24 h-full  cursor-pointer ">
                                    Personal
                                </div>
                            </NavLink>
                            <NavLink
                                to={"/user/my-account/security"}
                                className={({isActive}) =>
                                    !isActive
                                        ? "transition-all "
                                        : "transition-all border-b-[#e14954] border-b-2 text-[#e14954] "
                                }
                            >
                                <div className="w-24 h-full border-b-2 cursor-pointer ">
                                    Security
                                </div>
                            </NavLink>
                            <NavLink
                                to={"/user/my-account/payouts"}
                                className={({isActive}) =>
                                    !isActive
                                        ? "transition-all "
                                        : "transition-all border-b-[#e14954] border-b-2 text-[#e14954] "
                                }
                            >
                                <div className="w-24 h-full border-b-2 cursor-pointer ">
                                    Payouts
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full h-max">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
