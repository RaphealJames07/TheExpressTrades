
import StructureTwo from "../Components/StructureTwo";

const About = () => {
    const AboutContent = () => {
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
            <StructureTwo content={AboutContent} />
        </>
    );
};

export default About;
