import {NavLink} from "react-router-dom";
import StructureOne from "../Components/StructureOne";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const RegisterContent = () => {
        const [fullName, setFullName] = useState("");
        const [userName, setUserName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [loading, setLoading] = useState(false);
        const nav = useNavigate();

        const handleSendOtp = () => {
            const toastLoadingId = toast.loading("Generating otp code...");
            const data = {email: email};
            const url =
                "https://express-trades.onrender.com/api/v1/user/sign-up-mail";

            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    toast.dismiss(toastLoadingId);
                    toast.success(`Check your email ${email} for OTP code`, {
                        duration: 5000,
                    });
                    setTimeout(() => {
                        nav("/verify");
                    }, 6000);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const handleRegister = (e: any) => {
            e.preventDefault();
            if (
                !fullName ||
                !userName ||
                !email ||
                !password ||
                !confirmPassword
            ) {
                toast.error("Please fill all inputs");
                // alert("Please Fill in the boxes")
            } else if (confirmPassword !== password) {
                toast.error("Password does not match");
                // alert("Password does not match")
            } else {
                // console.log("Creating account...");
                const toastLoadingId = toast.loading("Please wait...");
                const url =
                    "https://express-trades.vercel.app/api/v1/user/sign-up";
                const data = {
                    fullName: fullName,
                    email: email,
                    userName: userName,
                    password: password,
                    confirmPassword: confirmPassword,
                };
                setLoading(true);
                axios
                    .post(url, data)
                    .then((response) => {
                        toast.dismiss(toastLoadingId);
                        toast.success("Account created successfully!");
                        handleSendOtp();
                        // console.log(response);
                        const token = response?.data?.data?.token;
                        localStorage.setItem("verifyToken", token);
                        // console.log(token);
                    })
                    .catch((error) => {
                        toast.dismiss(toastLoadingId);
                        toast.error(error?.response?.data?.message, {
                            duration: 6000,
                        });
                        console.log(error);
                        setLoading(false);
                    });
            }
        };

        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 ">
                    <div className="w-[35%] phone:w-[95%] h-max phone:h-max bg-white rounded-[2rem] flex flex-col items-center px-10 phone:px-8 py-14 gap-5">
                        <p className="text-4xl phone:text-2xl font-semibold text-[#66cc33] mb-16">
                            Let's get started
                        </p>
                        <p className="text-[#66cc33] text-lg font-semibold phone:text-center">
                            Register Today and get $10 welcome bonus
                        </p>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-[#66cc33] text-lg font-semibold">
                                Full Name
                            </p>
                            <input
                                type="text"
                                placeholder="Enter your fullname"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-[#66cc33] text-lg font-semibold">
                                Username
                            </p>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
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
                        <div className="w-full h-max flex flex-col gap-3">
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
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 mb-10 phone:mb-7">
                            <p className="text-[#66cc33] text-lg font-semibold">
                                Confirm Password
                            </p>
                            <input
                                type="password"
                                placeholder="Re-enter your password"
                                className="w-full h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <button
                            className="px-12 py-3 bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600"
                            onClick={handleRegister}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "REGISTER"}
                        </button>
                        <p className="text-lg font-semibold text-[#66cc33]">
                            Already have an account?{" "}
                            <NavLink to={"/login"}>
                                <span className="text-orange-400 cursor-pointer">
                                    Sign In
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
            <StructureOne content={RegisterContent} />
        </>
    );
};

export default Register;
