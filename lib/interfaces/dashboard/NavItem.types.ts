// eslint-disable-next-line import/no-unresolved
import { IconProps } from '@lib/icons/dashboard/sidebar/Icon.types';
import React from 'react';

export interface ChildNavItem {
    id: string;
    name: string;
    path: string;
    Icon: React.ComponentType<IconProps>;
}
export type ParentNavItem = ChildNavItem & {
    hasSubNavItems: boolean;
    subNavItems?: ChildNavItem[];
};
