

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-2/4 text-center my-8">
            <p className="text-[#D99904] mb-2">--{subHeading}--</p>
            <h3 className="text-4xl text-[#151515] uppercase border-y-4 border-[#E8E8E8] py-1">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;