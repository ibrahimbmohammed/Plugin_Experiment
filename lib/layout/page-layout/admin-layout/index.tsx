import useWindowSize, { Size } from '@lib/hooks/useWindowSize';
import SidebarSlideOver from '@organisms/o-dashboard-mobile-sidebar-slideover';
import MobileTopNavigation from '@organisms/o-dashboard-mobile-top-navigation';
import Sidebar from '@organisms/o-dashboard-sidebar';
import useToggle from '@lib/hooks/useToggle';
import NavItems from '@lib/constants/admin/sidebar/NavItems';
import WithDashboard from '@lib/hoc/dashboard';
import MainTopNavigation from '@organisms/o-dashboard-main-top-navigation';
import { applyThemeFunc } from '@utils/helpers';

interface IDashboardLayoutProps {
    children: React.ReactNode;
}

function AdminDashboardLayout({ children }: IDashboardLayoutProps) {
    applyThemeFunc();
    const { width }: Size = useWindowSize();
    const [openSidebar, toggleOpenSidebar]: [boolean, () => void] = useToggle();
    const [shiftDashboardContent, toggleShiftDashboardContent] = useToggle();
    const [openDrawer, toggleOpenDrawer] = useToggle();
    const SHOW = true;
    if (width) {
        if (width > 768) {
            return (
                <>
                    <Sidebar openDrawer={SHOW} showMenuIcon={!SHOW} navItems={NavItems} />
                    <div className="dashboard-content">
                        <div className="flex-flex-column space-y-2 p-2">
                            <MainTopNavigation />
                            <div>{children}</div>
                        </div>
                    </div>
                </>
            );
        }

        if (width > 480 && width <= 768) {
            return (
                <>
                    <Sidebar
                        openDrawer={openDrawer}
                        toggleOpenDrawer={toggleOpenDrawer}
                        showMenuIcon={SHOW}
                        toggleShiftDashboardContent={toggleShiftDashboardContent}
                        navItems={NavItems}
                    />
                    <div
                        className={`dashboard-content duration-450 transition-all ease-in-out ${
                            shiftDashboardContent ? 'translate-x-[9rem]' : ''
                        }`}
                    >
                        <div className="flex-flex-column space-y-2 p-2">
                            <MainTopNavigation />
                            <div>{children}</div>
                        </div>
                    </div>
                </>
            );
        }

        if (width < 480) {
            return (
                <>
                    <SidebarSlideOver
                        openSidebar={openSidebar}
                        toggleOpenSidebar={toggleOpenSidebar}
                    >
                        <Sidebar openDrawer={SHOW} showMenuIcon={!SHOW} navItems={NavItems} />
                    </SidebarSlideOver>
                    <MobileTopNavigation toggleOpenSidebar={toggleOpenSidebar} />
                    <div className="p-2">{children}</div>
                </>
            );
        }
    }
}

export default WithDashboard(AdminDashboardLayout);
