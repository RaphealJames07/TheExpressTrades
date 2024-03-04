import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plans from "./Pages/Plans";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import MyPlans from "./Pages/MyPlans";
import Invest from "./Pages/Invest";
import Withdraw from "./Pages/Withdraw";
import MyAccount from "./Pages/MyAccount";
import Deposit from "./Pages/Deposit";
import ForgetPassword from "./Pages/ForgetPassword";
import Verify from "./Pages/Verify";
import Transactions from "./Pages/Transactions";
import InvestConfirm from "./Pages/InvestConfirm";
import Profile from "./Pages/Profile";
import Security from "./Pages/Security";
import Payouts from "./Pages/Payouts";
import Notification from "./Pages/Notification";
import Admin from "./Admin/Admin";
// import AdminHome from "./Admin/AdminHome";
import Users from "./Admin/Users";
import AdminTransactions from "./Admin/AdminTransactions";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminPrivate from "./Routes/AdminPrivate";

const App = () => {
    // console.log("object");

    const router = createBrowserRouter([
        // Public routes remain unchanged
        {path: "/", element: <Home />},
        {path: "/contact", element: <Contact />},
        {path: "/about", element: <About />},
        {path: "/plans", element: <Plans />},
        {path: "/faq", element: <Faq />},
        {path: "/register", element: <Register />},
        {path: "/login", element: <Login />},
        {path: "/forget-password", element: <ForgetPassword />},
        {path: "/verify", element: <Verify />},

        {
            path: "admin",
            element: <AdminPrivate element={<Admin />}></AdminPrivate>,
            children: [
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "transactions",
                    element: <AdminTransactions />,
                },
            ],
        },
        {
            path: "user",
            element: <PrivateRoute element={<User />}></PrivateRoute>,
            children: [
                {
                    path: "dashboard",
                    element: (
                        <>
                            <Dashboard />
                        </>
                    ),
                },
                {
                    path: "my-plans",
                    element: (
                        <>
                            <MyPlans />
                        </>
                    ),
                },
                {
                    path: "invest",
                    element: (
                        <>
                            <Invest />
                        </>
                    ),
                },
                {
                    path: "new-investment/100",
                    element: (
                        <>
                            <InvestConfirm />
                        </>
                    ),
                },
                {
                    path: "transactions",
                    element: (
                        <>
                            <Transactions />
                        </>
                    ),
                },
                {
                    path: "withdraw",
                    element: (
                        <>
                            <Withdraw />
                        </>
                    ),
                },
                {
                    path: "notification",
                    element: (
                        <>
                            <Notification />
                        </>
                    ),
                },
                {
                    path: "my-account",
                    element: (
                        <>
                            <MyAccount />
                        </>
                    ),
                    children: [
                        {
                            path: "profile",
                            element: (
                                <>
                                    <Profile />
                                </>
                            ),
                        },
                        {
                            path: "security",
                            element: (
                                <>
                                    <Security />
                                </>
                            ),
                        },
                        {
                            path: "payouts",
                            element: (
                                <>
                                    <Payouts />
                                </>
                            ),
                        },
                    ],
                },
                {
                    path: "deposit",
                    element: (
                        <>
                            <Deposit />
                        </>
                    ),
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
