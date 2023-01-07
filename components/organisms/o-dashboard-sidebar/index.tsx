import DefaultAvatar from "@assets/jpg/unisex-avatar.jpg";
import React, { useContext } from "react";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";
import Logo from "@atoms/logo/logo";
import SidebarNavItem from "@atoms/sidebar/SidebarNavItem";
import { useAppDispatch, useAppSelector } from "@lib/hooks/redux-hooks";
import HorizontalLineIcon from "@lib/icons/dashboard/sidebar/HorizontalLineIcon";
import { ParentNavItem } from "@lib/interfaces/dashboard/NavItem.types";
// import useToggle from '@lib/hooks/useToggle';
import { SidebarNavItemProps } from "@lib/interfaces/dashboard/SidebarNavItem.types";
import { fetchAndSetDashboardOrganizationDisplayData } from "@store/dashboard/dashboard-org-data";
import { useRouter } from "next/router";
import { MdMenu, MdOutlineMenuOpen } from "react-icons/md";

const style = {
  active: "bg-primaryColor rounded-full text-white",
  inactive: "hover:bg-primaryColor hover:rounded-full hover:text-white",
  link: `group relative flex space-x-4 px-4 my-[0.05rem] items-center h-[3.125rem]
    w-full py-[0.03rem] group-hover:cursor-pointer`,
  link_hide: "hidden",
  icon_active: `fill-white`,
  icon_inactive: `fill-slate-800 group-hover:fill-white`,
};

export interface ISidebarProps {
  toggleShiftDashboardContent?: () => void;
  openDrawer: boolean;
  toggleOpenDrawer?: () => void;
  toggleOpenSidebar?: () => void;
  showMenuIcon: boolean;
  navItems: ParentNavItem[];
}

function Sidebar({
  openDrawer,
  toggleOpenDrawer,
  toggleShiftDashboardContent,
  showMenuIcon,
  toggleOpenSidebar,
  navItems,
}: ISidebarProps) {
  const { asPath } = useRouter();
  const iframeRouterContext = useContext(IFrameRouterContext);
  const handleToggleOpenDrawerAndShiftDashboardContent = () => {
    toggleOpenDrawer?.();
    toggleShiftDashboardContent?.();
  };

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userData);
  const dashboardOrgData = useAppSelector((state) => state.dashboardOrgData);
  dispatch(fetchAndSetDashboardOrganizationDisplayData(dashboardOrgData));

  // @deprecated - This has been deprecated in favour of
  // dispatch(fetchAndSetDashboardOrganizationDisplayData(dashboardOrgData));
  // const { setDashboardOrgData } = dashboardOrgDataActions;

  // const [dashboardOrgData] = useCheckSliceBeforeFetch<NonNullable<WebsiteDataQueryQuery>>(
  //     '/api/theme',
  //     'dashboardOrgData',
  //     setDashboardOrgData,
  // );

  const orgAbbrev = dashboardOrgData?.website?.org?.abbrev.substring(0, 11);

  return (
    <div
      id="sidebar"
      className={`duration-400 fixed top-0 left-0 h-full overflow-y-auto overflow-x-hidden bg-white px-6 py-1.5 shadow-lg shadow-teal-700/30 transition-all ease-in-out ${
        !openDrawer ? "w-[6.5rem]" : "w-[16rem] max-w-[16rem]"
      }`}
    >
      <div id="logo-content">
        <div
          id="logo"
          className={`flex h-[3.125rem] w-full items-center space-x-2 text-slate-600 ${
            !openDrawer && "justify-center"
          }`}
        >
          <Logo
            imageSrc={
              (dashboardOrgData?.website?.org?.photoUrl as string) ??
              (dashboardOrgData?.website?.webLogoUrl as string)
            }
            className="mr-2"
          />
          {openDrawer && (
            <div id="logo-name" className="text-lg font-bold">
              {orgAbbrev}
            </div>
          )}
        </div>
        {showMenuIcon && !openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdMenu
              className="fixed top-4 left-[4.5rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
        {showMenuIcon && openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdOutlineMenuOpen
              className="fixed top-4 left-[14rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <ul
        id="nav-list "
        className="mt-[1.25rem] text-black hover:cursor-pointer"
      >
        {navItems.map((item: SidebarNavItemProps) => {
          return (
            <SidebarNavItem
              key={item.id}
              navigateFunc={() => iframeRouterContext.navigate(item)}
              asPath={asPath}
              name={item.name}
              path={item.path}
              style={style}
              showIcon={openDrawer}
              subNavItems={item.subNavItems}
              hasSubNavItems={item.hasSubNavItems}
              Icon={item.Icon}
              openDrawer={openDrawer}
              toggleOpenSidebar={toggleOpenSidebar} // for mobile screens
              handleToggleOpenDrawerAndShiftDashboardContent={
                handleToggleOpenDrawerAndShiftDashboardContent
              } // for tablet screens
            />
          );
        })}
      </ul>
      <div
        id="profile-content"
        className="absolute bottom-0 left-0 w-full bg-white text-white"
      >
        <div id="profile" className="relative h-[4.5rem] py-[0.625rem] px-3">
          <div
            id="profile-details"
            className={`flex items-center ${!openDrawer && "justify-center"}`}
          >
            <img
              src={
                user?.photoUrl
                  ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${user?.photoUrl}`
                  : DefaultAvatar.src
              }
              alt=""
              width="35px"
              height="35px"
              className="rounded-xl object-cover"
            />
            {openDrawer && (
              <div id="user-info" className="ml-4">
                <div
                  id="name"
                  className="text-base font-bold text-primaryColor"
                >
                  {user?.firstName} {user?.lastName}
                </div>
                <div id="job" className="text-sm text-black">
                  {user?.username}
                </div>
                <HorizontalLineIcon className="absolute left-[83%] bottom-8 min-w-[50px] fill-primaryColor leading-[3.125rem]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
