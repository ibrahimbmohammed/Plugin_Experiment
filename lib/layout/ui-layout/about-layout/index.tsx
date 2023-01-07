interface AboutUiLayoutProps {
    subText: string;
    className: string;
    children: React.ReactNode | React.ReactNode[];
}

const AboutUiLayout = ({ subText, className, children }: AboutUiLayoutProps) => {
    return (
        <section className="flex flex-col  pb-[4rem] ">
            <div className="py-4 pl-[1.2rem] md:px-[3.3rem] md:py-8 lg:pl-[3.3rem] ">
                <p className="text-lg font-semibold text-primaryColor md:text-2xl">{subText}</p>
            </div>
            <div
                className={` flex h-full w-full  items-start justify-start  overflow-hidden   bg-transparent px-3  sm:max-w-[38rem]  sm:p-0 md:max-w-[42rem] md:px-0 md:pb-[4rem] md:pt-[1rem] lg:min-w-[60rem] lg:max-w-[60rem] xl:min-w-[74rem] 2xl:max-w-[82rem] 1xl:max-w-[84rem] 1.5xl:max-w-[88rem] 3xl:min-w-[102rem] ${className}`}
            >
                {children}
            </div>
        </section>
    );
};

export default AboutUiLayout;
