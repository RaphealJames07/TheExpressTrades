import StructureTwo from "../Components/StructureTwo";

const Contact = () => {
    const ContactContent = () => {
        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 phone:pt-28">
                    more
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
