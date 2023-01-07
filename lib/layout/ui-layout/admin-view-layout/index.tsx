import { Children } from 'react';

interface AdminViewLayoutProps {
    title: string;
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}

const AdminViewLayout = ({ title, children, className }: AdminViewLayoutProps) => {
    const childrenNode = Children.toArray(children);
    return (
        <div className="h-screen w-full space-y-8">
            <div className={`mt-4 flex h-[6rem]  w-full justify-between space-y-2 ${className}`}>
                <h1 className="text-xl font-semibold text-primaryColor">{title}</h1>
                {childrenNode[0]}
            </div>
            {childrenNode[1]}
        </div>
    );
};

export default AdminViewLayout;
