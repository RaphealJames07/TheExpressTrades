import {NavLink} from "react-router-dom";
import StructureOne from "../Components/StructureOne";

const ForgetPassword = () => {
    const ForgetPasswordContent = () => {
        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6  pb-32 phone:pb-10">
                    <div className="w-[35%] phone:w-[95%] h-max phone:h-max bg-white rounded-[2rem] flex flex-col items-center px-10 phone:px-8 py-14 gap-5">
                        <p className="text-4xl phone:text-2xl font-semibold text-[#66cc33] mb-16">
                            Reset password
                        </p>

                        <div className="w-full h-max flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                            />
                        </div>
                        <button className="px-12 py-3 shadow-2xl bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600">
                            SUBMIT
                        </button>
                        <p className="text-lg font-semibold text-[#66cc33]">
                            Back to &nbsp;
                            <NavLink to={"/login"}>
                                <span className="text-orange-400 cursor-pointer font-bold">
                                    Login
                                </span>
                            </NavLink>
                        </p>
                    </div>
                    <p className="text-2xl phone:text-xl font-semibold text-white phone:text-center">
                        Invest by over 50,000 people worldwide
                    </p>
                </div>
            </>
        );
    };

    return (
        <>
            <StructureOne content={ForgetPasswordContent} />
        </>
    );
};

export default ForgetPassword;
