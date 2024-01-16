import "./Comp.css";
import logo from "../assets/TheExpressTradesLogo.svg";

const Footer = () => {
    return (
        <>
            <div className="bgimg px-24 phone:px-5 pt-32 phone:h-max">
                <div className="h-[70%] w-full flex phone:flex-col justify-between gap-5 text-white">
                    <div className="w-[32%] phone:w-full h-full flex items-center flex-col gap-10">
                        <img src={logo} alt="" className="w-60 phone:w-[22rem]" />
                        <p className="w-full h-max text-lg">
                            A trading platform for online trading and
                            investments from The Express Trades. Start earning
                            money with millions of traders worldwide! The
                            Express Trades helps you take your trading to the
                            next level our most exciting broker. 100s of
                            commission free assets, 1:400 leverage, 24-hour
                            support and more! Invest now!
                        </p>
                    </div>
                    <div className="w-[16%] phone:w-full h-full flex flex-col gap-10 phone:gap-8">
                        <p className="text-2xl font-semibold">Company</p>
                        <div className="w-max h-max flex flex-col gap-5 text-lg phone:gap-3">
                            <p className="cursor-pointer">Home</p>
                            <p className="cursor-pointer">About</p>
                            <p className="cursor-pointer">Investment Plans</p>
                        </div>
                    </div>
                    <div className="w-[16%] phone:w-full h-full flex flex-col gap-10 phone:gap-8">
                        <p className="text-2xl font-semibold">Support</p>
                        <div className="w-max h-max flex flex-col gap-5 text-lg phone:gap-3">
                            <p className="cursor-pointer">FAQ</p>
                            <p className="cursor-pointer">Contact</p>
                        </div>
                    </div>
                    <div className="w-[16%] phone:w-full h-full flex flex-col gap-10 phone:gap-8">
                        <p className="text-2xl font-semibold">Policy</p>
                        <div className="w-max h-max flex flex-col gap-5 text-lg phone:gap-3">
                            <p>Privacy Policy</p>
                            <p>Terms of use</p>
                        </div>
                    </div>
                    <div className="w-[16%] phone:w-full h-full flex flex-col gap-10 phone:gap-8">
                        <p className="text-2xl font-semibold">Contacts</p>
                        <div className="w-max h-max flex flex-col gap-5 text-lg phone:gap-3">
                            <p>Support@theexpresstrades.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[30%] phone:mt-10">
                    <p className="w-full text-center text-lg text-white">
                        <span className="text-red-600">IMPORTANT NOTICE!</span> PLEASE NOTE THAT ALL
                        DEPOSITS/PAYMENTS SHOULD BE MADE DIRECTLY TO THE COMPANY
                        ACCOUNT/BITCOIN WALLET ADDRESS, NO PAYMENTS/DEPOSIT
                        SHOULD BE MADE TO ANY ACCOUNT MANAGER. THE COMPANY WILL
                        NOT BE HELD RESPONSIBLE FOR ANY LOSS THAT COMES WITH
                        MAKING PAYMENTS TO ANY ACCOUNT MANAGER. THANK YOU FOR
                        YOUR UNDERSTANDING AND COOPERATION.
                    </p>
                    <div className="w-full h-24 flex justify-between items-center phone:flex-col gap-2">
                        <p className="text-lg text-white">©2023. All rights reserved</p>
                        <div className="w-max h-full flex items-center gap-5">
                            <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-indigo-500 transition-all border border-white"></div>
                            <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-indigo-500 transition-all border border-white"></div>
                            <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-indigo-500 transition-all border border-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
