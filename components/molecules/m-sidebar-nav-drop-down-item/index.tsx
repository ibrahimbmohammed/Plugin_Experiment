/* eslint-disable no-unused-vars */
import { Disclosure } from "@headlessui/react";
import { SidebarNavDropDownItemProps } from "@lib/interfaces/dashboard/SidebarNavItem.types";
import Link from "next/link";

function SidebarNavDropDownItem({
  id,
  path,
  asPath,
  style,
  Icon,
  name,
  showIcon,
  subNavItems,
  openDrawer,
  toggleOpenSidebar,
  handleToggleOpenDrawerAndShiftDashboardContent,
}: SidebarNavDropDownItemProps) {
  const handleToggleDrawerAndSidebar = () => {
    toggleOpenSidebar?.();
    handleToggleOpenDrawerAndShiftDashboardContent?.();
  };

  const handleConditionToOpenDropDown: () => void = () => {
    if (!openDrawer) {
      handleToggleOpenDrawerAndShiftDashboardContent?.();
    }
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="li"
              className={`${asPath === path ? style!.active : style!.inactive}`}
            >
              {
                // eslint-disable-next-line
                <span
                  className={style!.link}
                  onClick={handleConditionToOpenDropDown}
                >
                  <Icon
                    className={`${
                      asPath === path
                        ? style!.icon_active
                        : style!.icon_inactive
                    }`}
                  />
                  {showIcon && <span>{name}</span>}
                </span>
              }
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 max-h-[12rem] overflow-y-auto md:max-h-[14rem]">
              {subNavItems?.map((subNavItem) => {
                return (
                  openDrawer && (
                    <li
                      className={`${
                        subNavItem.path === asPath
                          ? style!.active
                          : style!.inactive
                      }`}
                      key={id}
                    >
                      <Link href={subNavItem.path}>
                        {
                          // eslint-disable-next-line
                          <span
                            className={style!.link}
                            onClick={handleToggleDrawerAndSidebar}
                          >
                            {/* {!showIcon && (
                                                        <Icon
                                                            className={`${
                                                                open
                                                                    ? style!.icon_active
                                                                    : style!.icon_inactive
                                                            }`}
                                                        />
                                                    )} */}
                            {showIcon && <span>{subNavItem.name}</span>}
                          </span>
                        }
                      </Link>
                    </li>
                  )
                );
              })}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default SidebarNavDropDownItem;
