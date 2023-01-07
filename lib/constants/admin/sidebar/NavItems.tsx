import DashboardIcon from "@lib/icons/dashboard/sidebar/DashboardIcon";
import ContentIcon from "@lib/icons/dashboard/sidebar/EventIcon";
import DonationIcon from "@lib/icons/dashboard/sidebar/DonationIcon";
/* eslint-disable import/no-unresolved */
import MembershipIcon from "@lib/icons/dashboard/sidebar/MembershipIcon";
// import NotificationIcon from '@lib/icons/dashboard/sidebar/NotificationIcon';
import PaymentIcon from "@lib/icons/dashboard/sidebar/PaymentIcon";
import OrganizationIcon from "@lib/icons/dashboard/sidebar/ProfileIcon";
import TrainingIcon from "@lib/icons/dashboard/sidebar/TrainingIcon";
// import EVotingIcon from '@lib/icons/dashboard/sidebar/EVoting';
import { ParentNavItem } from "@lib/interfaces/dashboard/NavItem.types";
import { v4 as uuidv4 } from "uuid";
import EvotingIcon from "@lib/icons/dashboard/sidebar/E-votingIcon";
import GearIcon from "@lib/icons/dashboard/sidebar/GearIcon";
import ConfIcon from "@lib/icons/dashboard/sidebar/ConfIcon";

const NavItems: ParentNavItem[] = [
  {
    id: uuidv4(),
    name: "Dashboard",
    path: "/admin",
    Icon: DashboardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Contents",
    path: "/contents",
    Icon: ContentIcon,
    hasSubNavItems: true,
    subNavItems: [
      {
        id: uuidv4(),
        name: "Announcement",
        path: "/admin/contents/announcement",
        Icon: MembershipIcon,
      },
      {
        id: uuidv4(),
        name: "Library",
        path: "/admin/contents/library",
        Icon: MembershipIcon,
      },
      {
        id: uuidv4(),
        name: "Leadership",
        path: "/admin/contents/leadership",
        Icon: MembershipIcon,
      },
      {
        id: uuidv4(),
        name: "FAQs",
        path: "/admin/contents/faqs",
        Icon: MembershipIcon,
      },
      {
        id: uuidv4(),
        name: "Chapters",
        path: "/admin/contents/chapters",
        Icon: MembershipIcon,
      },
      {
        id: uuidv4(),
        name: "Speciality",
        path: "/admin/contents/speciality",
        Icon: MembershipIcon,
      },

      {
        id: uuidv4(),
        name: "About Us",
        path: "/admin/contents/about-us",
        Icon: MembershipIcon,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Conference",
    path: "/admin/conference",
    Icon: ConfIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Events",
    path: "/admin/events",
    Icon: OrganizationIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Membership",
    path: "/admin/memberships",
    Icon: MembershipIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Payments",
    path: "/admin/payments",
    Icon: PaymentIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Donations",
    path: "/admin/donations",
    Icon: DonationIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Trainings",
    path: "/admin/trainings",
    Icon: TrainingIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "E-voting",
    path: "/admin/e-voting",
    Icon: EvotingIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    name: "Settings",
    path: "/admin/settings",
    Icon: GearIcon,
    hasSubNavItems: false,
  },
];

export default NavItems;
