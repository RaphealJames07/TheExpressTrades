import {NavLink} from "react-router-dom";

const User = () => {
    return (
        <div className="w-full h-screen bg-sky-100 flex items-center justify-center flex-col gap-20">
            <p className="text-3xl">Welcome To Your Dashboard</p>
            <p className="text-xl">Dashboard is still under development</p>
            <NavLink to={"/"}>
                <button className="w-max h-max px-4 py-4 text-lg font-semibold text-white bg-blue-400 rounded-md">
                    Back To Home
                </button>
            </NavLink>
        </div>
    );
};

export default User;
