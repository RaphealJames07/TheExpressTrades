import StructureTwo from "../Components/StructureTwo";

const Contact = () => {
    const ContactContent = () => {
        return (
            <>
                <div className="w-full h-[30vh] phone:h-[20vh] flex items-center py-6 gap-6 px-32 phone:px-5 phone:justify-center">
                    <p className="text-6xl text-white font-bold phone:text-4xl phone:text-center">
                        Contact Us
                    </p>
                </div>
                <div className="w-full h-max px-24 phone:px-5 mt-24 flex gap-8 bg-[#f1f5fc] py-24">
                    <div className="w-[55%] h-max flex flex-col items-center justify-center bg-white shadow py-20 px-10">
                        <p>Get in Touch</p>
                        <div>
                            <p>Your Name</p>
                            <input
                                type="text"
                                placeholder="Enter Your Full Name"
                            />
                        </div>
                        <div>
                            <p>Your Email</p>
                            <input type="text" placeholder="Enter Your Email" />
                        </div>
                        <div>
                            <p>Your Email</p>
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter Your Message"
                            ></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </div>
                    <div className="w-[45%] h-max flex flex-col"></div>
                </div>
            </>
        );
    };

    return (
        <>
            <StructureTwo content={ContactContent} />
        </>
    );
};

export default Contact;
