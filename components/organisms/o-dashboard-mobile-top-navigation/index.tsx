import OutlineCaret from '@lib/icons/dashboard/mobile-top-navigation/OutlineCaret';
import MenuIcon from '@lib/icons/dashboard/sidebar/MenuIcon';
import ProfileIcon from '@lib/icons/dashboard/sidebar/ProfileIcon';
import { ISidebarSlideOverProps } from '@organisms/o-dashboard-mobile-sidebar-slideover/SidebarSlideOverProps.types';
import ProfileDropDown from '@molecules/m-dashboard-top-navigation/m-profile-dropdown';
import { useRouter } from 'next/router';

function MobileTopNavigation({ toggleOpenSidebar }: ISidebarSlideOverProps) {
    const { asPath } = useRouter();
    const dashboardLastIndexInUrl: number = asPath.lastIndexOf('/dashboard/') + 11;
    const trainingSlice: string = asPath.slice(dashboardLastIndexInUrl);
    const pageBreadcrumb: string = trainingSlice.slice(0, trainingSlice.indexOf('/'));

    return (
        <div className="space-y-6 bg-white px-8 py-3 shadow-md shadow-slate-500/10">
            <div className="flex flex-row items-center justify-between">
                <button type="button" onClick={toggleOpenSidebar}>
                    <MenuIcon className="" />
                </button>
                <h3 className="font-bold">Dashboard</h3>
                <div id="profile-notification" className="flex flex-row items-center space-x-2">
                    <ProfileDropDown
                        icon={<ProfileIcon className="fill-black stroke-transparent" />}
                    />
                </div>
            </div>
            <div id="breadcrumbs" className="flex flex-row items-center space-x-3">
                <h3 className="font-medium text-gray-600">Home</h3>
                <OutlineCaret />
                <span className="font-medium capitalize text-primaryColor">
                    {/* {asPath.slice(, 8)} */}
                    {pageBreadcrumb}
                </span>
            </div>
        </div>
    );
}

export default MobileTopNavigation;
