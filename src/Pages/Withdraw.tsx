const Withdraw = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex items-center flex-col px-10 phone:px-4 py-8 gap-3">
                    <div className="w-1/2 phone:w-full h-max bg-white rounded px-20 phone:px-5 py-5 flex flex-col gap-5 items-center">
                        <p className="text-3xl font-semibold text-[rgb(54,74,99)] text-center">
                            Request New Withdrawal
                        </p>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm text-[rgb(52,67,87)] font-medium">
                                Amount <span className="text-xs ">(USD)</span>
                            </p>
                            <input
                                type="number"
                                className="w-full h-10 border border-[rgb(128,148,174)] outline-1 outline-red-300 rounded"
                            />
                        </div>
                        <select name="" id="" className="w-full h-10 border border-[rgb(128,148,174)] outline-1 outline-red-300 rounded">
                            <option value="">Select Method</option>
                            <option value="Method 1">Bitcoin</option>
                            <option value="Method 1">Ethereum</option>
                            <option value="Method 1">Litecoin</option>
                            <option value="Method 1">Bitcoin cash</option>
                        </select>
                        <button className="w-full h-10 bg-[#e14954] text-white rounded text-sm font-semibold">WITHDRAW</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Withdraw;
