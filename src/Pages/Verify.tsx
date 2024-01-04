import {NavLink} from "react-router-dom";
import StructureOne from "../Components/StructureOne";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Verify = () => {
    const VerifyContent = () => {
        const [otp, setOtp] = useState("");
        const [loading, setLoading] = useState(false);
        const token = localStorage.getItem("verifyToken");
        const nav = useNavigate();

        const handleVerify = (e) => {
            e.preventDefault();
            if (!otp) {
                toast.error("Please enter your OTP");
            } else {
                setLoading(true);
                const toastLoadingId = toast.loading("Please wait...");
                const url = `https://express-trades.onrender.com/api/v1/user/verify/${token}`;
                const data = {otp: otp};
                axios
                    .post(url, data)
                    .then((response) => {
                        setLoading(false);
                        toast.dismiss(toastLoadingId);
                        console.log(response);
                        toast.success(response?.data?.message, {
                            duration: 5000,
                        });
                        setTimeout(() => {
                            nav("/login");
                        }, 6000);
                    })
                    .catch((error) => {
                        toast.dismiss(toastLoadingId);
                        setLoading(false);
                        toast.error(error?.response?.data?.message);
                    });
            }
        };

        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 pb-32 phone:pb-48">
                    <div className="w-[35%] phone:w-[95%] h-[60vh] phone:h-[55vh] bg-white rounded-[2rem] flex flex-col items-center px-10 phone:px-8 py-14 gap-5">
                        <p className="text-4xl phone:text-2xl font-semibold text-[#66cc33] mb-16">
                            Verify your account
                        </p>

                        <div className="w-full h-max flex justify-center">
                            <input
                                type="text"
                                placeholder="Enter 5 digit code"
                                className="w-1/2 h-14 border border-gray-300 rounded-md pl-3 placeholder:text-gray-600 outline-none"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <button
                            className="px-12 py-3 shadow-2xl bg-gradient-to-r from-[#903eff] to-indigo-600 h-max w-max rounded-lg text-white text-lg hover:bg-gradient-to-l hover:from-[#903eff] hover:to-indigo-600"
                            disabled={loading}
                            onClick={handleVerify}
                        >
                            {loading ? "Loading..." : "VERIFY"}
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
            <StructureOne content={VerifyContent} />
        </>
    );
};

export default Verify;
