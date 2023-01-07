import DashboardIcon from '@lib/icons/dashboard/sidebar/DashboardIcon';
import EvotingIcon from '@lib/icons/dashboard/sidebar/E-votingIcon';
import EventIcon from '@lib/icons/dashboard/sidebar/EventIcon';
/* eslint-disable import/no-unresolved */
// import MembershipIcon from '@lib/icons/dashboard/sidebar/MembershipIcon';
// import MoreIcon from '@lib/icons/dashboard/sidebar/MoreIcon';
import NotificationIcon from '@lib/icons/dashboard/sidebar/NotificationIcon';
import PaymentIcon from '@lib/icons/dashboard/sidebar/PaymentIcon';
import ProfileIcon from '@lib/icons/dashboard/sidebar/ProfileIcon';
import TrainingIcon from '@lib/icons/dashboard/sidebar/TrainingIcon';
import { ParentNavItem } from '@lib/interfaces/dashboard/NavItem.types';
import { v4 as uuidv4 } from 'uuid';

const NavItems: ParentNavItem[] = [
    {
        id: uuidv4(),
        name: 'Dashboard',
        path: '/dashboard',
        Icon: DashboardIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'Events',
        path: '/dashboard/events',
        Icon: EventIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'Trainings',
        path: '/dashboard/trainings',
        Icon: TrainingIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'Payments',
        path: '/dashboard/payments',
        Icon: PaymentIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'Notifications',
        path: '/dashboard/notifications',
        Icon: NotificationIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'Profile',
        path: '/dashboard/profile',
        Icon: ProfileIcon,
        hasSubNavItems: false,
    },
    {
        id: uuidv4(),
        name: 'E-voting',
        path: '/dashboard/e-voting',
        Icon: EvotingIcon,
        hasSubNavItems: false,
    },
    // {
    //     id: uuidv4(),
    //     name: 'More',
    //     path: '/dashboard/more',
    //     Icon: MoreIcon,
    //     hasSubNavItems: false,
    // },
];

export default NavItems;
