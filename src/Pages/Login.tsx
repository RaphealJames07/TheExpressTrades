import {NavLink} from "react-router-dom";
import StructureOne from "../Components/StructureOne";

const Login = () => {
    const LoginContent = () => {
        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 phone:pt-28">
                    <div className="w-[35%] phone:w-[95%] h-[85vh] phone:h-[80vh] bg-white rounded-[2rem] flex flex-col items-center px-10 phone:px-8 py-14 gap-5">
                        <p className="text-4xl phone:text-2xl font-semibold text-[#66cc33] mb-16">
                            Login to your account
                        </p>

                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-[#66cc33] text-lg font-semibold">
                                Email
                            </p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 mb-10 phone:mb-6">
                            <p className="text-[#66cc33] text-lg font-semibold">
                                Password
                            </p>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                            />
                            <p>
                                Forgot your password?
                                <NavLink to={"/forget-password"}>
                                    <span className="text-orange-400 cursor-pointer font-bold">
                                        Recover Password
                                    </span>
                                </NavLink>
                            </p>
                        </div>

                        <button className="px-12 py-3 bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600">
                            SIGN IN
                        </button>
                        <p className="text-lg font-semibold text-[#66cc33]">
                            Don't have an account?{" "}
                            <NavLink to={"/register"}>
                                <span className="text-orange-400 cursor-pointer font-bold">
                                    Sign Up Here
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
            <StructureOne content={LoginContent} />
        </>
    );
};

export default Login;
