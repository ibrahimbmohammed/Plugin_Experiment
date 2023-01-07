/* eslint-disable no-unused-vars */
import { SidebarNavItemProps } from "@lib/interfaces/dashboard/SidebarNavItem.types";
import SidebarNavDropDownItem from "@molecules/m-sidebar-nav-drop-down-item";
import Link from "next/link";

function SidebarNavItem({
  id,
  path,
  asPath,
  style,
  Icon,
  name,
  showIcon,
  hasSubNavItems,
  subNavItems,
  openDrawer,
  toggleOpenSidebar,
  navigateFunc,
  handleToggleOpenDrawerAndShiftDashboardContent,
}: SidebarNavItemProps) {
  if (hasSubNavItems) {
    return (
      <SidebarNavDropDownItem
        path={path}
        navigateFunc={navigateFunc}
        asPath={asPath}
        style={style}
        Icon={Icon}
        name={name}
        showIcon={showIcon}
        subNavItems={subNavItems}
        openDrawer={openDrawer as boolean}
        toggleOpenSidebar={toggleOpenSidebar}
        handleToggleOpenDrawerAndShiftDashboardContent={
          handleToggleOpenDrawerAndShiftDashboardContent
        }
      />
    );
  }
  return (
    <button
      className={`${path === asPath ? style!.active : style!.inactive}`}
      onClick={navigateFunc}
    >
      <Link href={path} onClick={toggleOpenSidebar}>
        {
          // eslint-disable-next-line
          <span className={style!.link} onClick={toggleOpenSidebar}>
            <Icon
              className={`${
                path === asPath ? style!.icon_active : style!.icon_inactive
              }`}
            />
            {showIcon && <span>{name}</span>}
          </span>
        }
      </Link>
    </button>
  );
}

export default SidebarNavItem;
