

import StructureTwo from "../Components/StructureTwo";

const Plans = () => {
    const PlansContent = () => {
        return (
            <>
                <div className="w-full h-[30vh] phone:h-[20vh] flex items-center py-6 gap-6 px-32 phone:px-5 phone:justify-center">
                    <p className="text-6xl text-white font-bold phone:text-4xl phone:text-center">Investment Plans</p>
                </div>
                <div className="w-full h-max px-24 phone:px-5 mt-24 flex flex-col gap-8 bg-white py-24">
                    <p className="text-[rgb(102,204,51)] text-6xl phone:text-3xl font-semibold phone:font-normal text-center">
                        Investment Packages
                    </p>
                    <p className="text-xl w-full flex justify-center text-center">Choose from our available investment plans</p>
                    <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-3">
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>SILVER PLAN</p>
                            <p>$3,000.00</p>
                            <p>MAX DEPOSIT: $15,000.00</p>
                            <p>DAILY ROI: 10%</p>
                            <p>DURATION: 7 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>SUPER PLAN</p>
                            <p>$5,000.00</p>
                            <p>MAX DEPOSIT: $50,000.00</p>
                            <p>DAILY ROI: 15%</p>
                            <p>DURATION: 2 months</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>GOLD PLAN</p>
                            <p>$10,000.00</p>
                            <p>MAX DEPOSIT: $200,000.00</p>
                            <p>DAILY ROI: 25%</p>
                            <p>DURATION: 62 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                        <div className="w-1/4 phone:w-full h-72 bg-gradient-to-tr from-[#903eff] to-[#3e19ff] rounded-3xl flex flex-col items-center justify-center text-white text-2xl gap-2">
                            <p>MAX PLAN</p>
                            <p>$50,000.00</p>
                            <p>MAX DEPOSIT: $50,000.00</p>
                            <p>DAILY ROI: 37%</p>
                            <p>DURATION: 15 days</p>
                            <button className="w-max h-max px-3 py-2 bg-yellow-400 text-black rounded text-base flex items-center justify-center">
                                Invest Now
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <StructureTwo content={PlansContent} />
        </>
    );
};

export default Plans;
