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
import Payouts from "./Pages/payouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Home />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <About />
            </>
        ),
    },
    {
        path: "/plans",
        element: (
            <>
                <Plans />
            </>
        ),
    },
    {
        path: "/contact",
        element: (
            <>
                <Contact />
            </>
        ),
    },
    {
        path: "/faq",
        element: (
            <>
                <Faq />
            </>
        ),
    },
    {
        path: "/login",
        element: (
            <>
                <Login />
            </>
        ),
    },
    {
        path: "/forget-password",
        element: (
            <>
                <ForgetPassword />
            </>
        ),
    },
    {
        path: "/verify",
        element: (
            <>
                <Verify />
            </>
        ),
    },
    {
        path: "/register",
        element: (
            <>
                <Register />
            </>
        ),
    },
    {
        path: "user",
        element: <User />,
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

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
