
import StructureTwo from "../Components/StructureTwo";

const Faq = () => {
    const FaqContent = () => {
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
            <StructureTwo content={FaqContent} />
        </>
    );
};

export default Faq;
