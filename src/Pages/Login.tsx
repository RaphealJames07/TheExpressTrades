import {NavLink} from "react-router-dom";
import StructureOne from "../Components/StructureOne";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { token, user } from "../Redux/Features";

const Login = () => {
    const LoginContent = () => {
        const dispatch = useDispatch()
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [loading, setLoading] = useState(false);
        const nav = useNavigate();
        const handleReSendOtp = () => {
            const data = {email: email};
            const url =
                "https://express-trades.onrender.com/api/v1/user/resend-verification-otp";

            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    const token = res?.data?.token;
                    localStorage.setItem("verifyToken", token);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const handleLogin = (e: any) => {
            e.preventDefault();
            if (!email || !password) {
                toast.error("All fields are required");
            } else {
                const toastLoadingId = toast.loading("Please wait...");
                setLoading(true);
                const url =
                    "https://express-trades.vercel.app/api/v1/user/sign-in";
                const data = {email: email, password: password};
                axios
                    .post(url, data)
                    .then((response) => {
                        dispatch(user(response?.data?.user))
                        dispatch(token(response?.data?.token))
                        setLoading(false);
                        toast.dismiss(toastLoadingId);
                        console.log(response);
                        nav("/user/dashboard");
                    })
                    .catch((error) => {
                        setLoading(false);
                        toast.dismiss(toastLoadingId);

                        if (
                            error?.response?.data?.message ===
                            "Email Not Verified, Please verify your email to log in."
                        ) {
                            handleReSendOtp();
                            toast.error(error?.response?.data?.message, {
                                duration: 5000,
                            });
                            setTimeout(() => {
                                nav("/verify");
                            }, 6000);
                        } else {
                            toast.error(error?.response?.data?.message);
                        }
                        console.log(error);
                    });
            }
            toast.loading;
        };

        

        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 ">
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        <button
                            className="px-12 py-3 bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600"
                            disabled={loading}
                            onClick={handleLogin}
                        >
                            {loading ? "Loading..." : "SIGN IN"}
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
