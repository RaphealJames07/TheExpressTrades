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
