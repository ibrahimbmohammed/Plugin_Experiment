interface GridProps {
    className: string;
    children: React.ReactNode | React.ReactNode;
}

const Grid = ({ className, children }: GridProps) => {
    return <div className={`grid  w-full ${className}`}>{children}</div>;
};

export default Grid;
