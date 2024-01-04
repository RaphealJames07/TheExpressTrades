

import StructureTwo from "../Components/StructureTwo";

const Plans = () => {
    const PlansContent = () => {
        return (
            <>
                <div className="w-full h-max flex items-center justify-center py-6 flex-col gap-6 ">
                    more
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
