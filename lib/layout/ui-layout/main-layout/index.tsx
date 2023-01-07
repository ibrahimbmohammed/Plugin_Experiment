/* eslint-disable react/prop-types */
import useScreenType from '@lib/hooks/use-screen-type';

interface MainLayoutProps {
    children: React.ReactNode;
    leftPanel?: React.ReactNode;
    rightPanel?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, leftPanel, rightPanel }) => {
    const screenType = useScreenType();
    let middle = null;

    switch (screenType) {
        case '3-cols':
            middle = (
                <>
                    {leftPanel}
                    {children}
                    {rightPanel}
                </>
            );
            break;
        case '2-cols':
            middle = (
                <>
                    {children}
                    {rightPanel}
                </>
            );
            break;
        case '1-cols':
            middle = { children };
            break;
        case 'fullscreen':
            middle = { children };
            break;
        default:
            middle = { children };
    }

    return <div className="bg-white">{middle as JSX.Element}</div>;
};

export default MainLayout;
