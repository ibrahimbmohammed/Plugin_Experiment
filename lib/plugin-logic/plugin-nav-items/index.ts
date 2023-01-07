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

export const NAVIGATION_ROUTES = {
  main: [
    { title: "Parent Route", path: "/parentRoute" },
    // { title: "Parent Nested Route", path: "/parentRoute/nested" },
    {
      title: "IHome",
      path: "/",
      displayedURL: "/",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      title: "IRoute A",
      path: "/template-a",
      displayedURL: "/template-a",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      title: "IRoute B",
      path: "/template-b",
      displayedURL: "/template-b",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      title: "IRoute C",
      path: "/template-c",
      displayedURL: "/template-c",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },

    {
      title: "IRoute D",
      path: "/template-d",
      displayedURL: "/template-d",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },

    {
      title: "IRoute",
      displayedURL: "/app/events/daily",
      path: "/template-b",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
  ],
  dashboard: ["account", "profile"],
  admin: [
    {
      id: uuidv4(),
      name: "Dashboard",
      path: "/admin",
      Icon: DashboardIcon,
      hasSubNavItems: false,
      displayedURL: "/admin",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Contents",
      path: "/contents",
      Icon: ContentIcon,
      hasSubNavItems: true,
      displayedURL: "/admin",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
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
      displayedURL: "/admin/conference",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Events",
      path: "/admin/events",
      Icon: OrganizationIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/events",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Membership",
      path: "/admin/memberships",
      Icon: MembershipIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/memberships",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Payments",
      path: "/admin/payments",
      Icon: PaymentIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/payments",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Donations",
      path: "/admin/donations",
      Icon: DonationIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/donations",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Trainings",
      path: "/admin/trainings",
      Icon: TrainingIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/trainings",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "E-voting",
      path: "/admin/e-voting",
      Icon: EvotingIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/e-voting",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: uuidv4(),
      name: "Settings",
      path: "/admin/settings",
      Icon: GearIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/settings",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
  ],
};
