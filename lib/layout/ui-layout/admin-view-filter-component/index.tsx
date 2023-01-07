interface AdminViewFilterCompProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const AdminViewFilterComp = ({ children, className }: AdminViewFilterCompProps) => {
    return (
        <div
            className={`h-[12rem] w-full flex-col space-y-3 border border-gray-100 bg-white px-8 pt-6  shadow-md md:flex md:h-[8rem] md:flex-row md:justify-between md:space-y-2 md:space-x-0 ${className}`}
        >
            <div className="flex w-full flex-col  space-y-4 md:flex-row md:justify-between md:space-y-0 ">
                {children}
            </div>
        </div>
    );
};

export default AdminViewFilterComp;
