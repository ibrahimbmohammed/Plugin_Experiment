/* eslint-disable import/no-unresolved */
import { IconProps } from "@lib/icons/dashboard/sidebar/Icon.types";
import React from "react";

// interface defaultProps{
//     className: string
// }
export interface SubItem {
  id: string;
  name: string;
  path: string;
  Icon: React.ComponentType<IconProps>;
}

export type SidebarNavItemProps = {
  id?: string;
  name: string;
  path: string;
  asPath?: string;
  showIcon?: boolean;
  navigateFunc: () => void;
  style?: {
    link: string;
    active: string;
    inactive: string;
    icon_active: string;
    icon_inactive: string;
  };
  subNavItems?: SubItem[];
  Icon: React.ComponentType<IconProps>;
  hasSubNavItems: boolean;
  openDrawer?: boolean;
  toggleOpenSidebar?: () => void;
  handleToggleOpenDrawerAndShiftDashboardContent?: () => void;
};

export type SidebarNavDropDownItemProps = {
  id?: string;
  name: string;
  path: string;
  asPath?: string;
  showIcon?: boolean;
  navigateFunc: () => void;
  style?: {
    link: string;
    active: string;
    inactive: string;
    icon_active: string;
    icon_inactive: string;
  };
  subNavItems?: SubItem[];
  Icon: React.ComponentType<IconProps>;
  openDrawer: boolean;
  toggleOpenSidebar?: () => void;
  handleToggleOpenDrawerAndShiftDashboardContent?: () => void;
};
