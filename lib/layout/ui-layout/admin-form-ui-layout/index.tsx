import TransparentBackground from '@atoms/a-transparent-bg';

interface AdminFormUiLayoutProp {
    title: string;
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const AdminFormUiLayout = ({ title, children, className }: AdminFormUiLayoutProp) => {
    return (
        <div className="">
            <div className={`flex flex-col rounded-md pb-8 shadow-lg  ${className}`}>
                <span className="relative  h-[3.5rem] w-full rounded-t-lg">
                    <TransparentBackground
                        className="absolute h-full w-full rounded-t-lg "
                        opacity="20%"
                    />
                    <p className=" pt-4  text-center font-[500] text-primaryColor">{title}</p>
                </span>
                <hr className="h-[0.1rem] bg-slate-300" />
                <div className="px-[1rem] md:px-[3rem]">{children}</div>
            </div>
        </div>
    );
};

export default AdminFormUiLayout;
