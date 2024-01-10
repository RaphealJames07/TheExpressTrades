const Notification = () => {
    return (
        <div className="w-full h-max">
            <div className="w-full h-max flex items-center flex-col px-10 phone:px-4 py-8 gap-3">
                <div className="w-full h-10 bg-white pl-3 flex items-center">
                    <p className="text-xs text-[#e8757d]">
                        Inbox{" "}
                        <span className="text-white bg-[#e8757d] py-1 px-2">
                            0
                        </span>
                    </p>
                </div>
                <div className="w-full h-14 pl-3 flex items-center bg-gray-300">
                  <p className="text-xl font-semibold text-gray-600">Inbox</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;
