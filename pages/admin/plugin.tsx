import type { GetOrgAdminDashboardDataQuery } from "@gentypes/index";
import AdminDashboardLayout from "@lib/layout/page-layout/admin-dashboard-layout";
import Grid from "@atoms/a-grid";
import StatisticCard from "@molecules/m-card-statistics";
import BarChart from "@organisms/o-chart-bar";
import useFetchQuery from "@lib/hooks/fetch-query";
import { NAVIGATION_ROUTES } from "@lib/plugin-logic/plugin-nav-items";
import { IoLogoSnapchat } from "react-icons/io";
import { FaPlug } from "react-icons/fa";
import { BsAwardFill } from "react-icons/bs";
import { TbPlugOff } from "react-icons/tb";
import Image, { StaticImageData } from "next/image";
import { useAppSelector } from "@lib/hooks/redux-hooks";
import temp4 from "@assets/jpg/w-4.png";
import t1 from "@assets/webp/t1.webp";
import t2 from "@assets/webp/t2.webp";
import t3 from "@assets/webp/t3.webp";

import { useDispatch } from "react-redux";
import { navItemDataActions } from "@store/nav-route/nav-route";

function AdminDashboard() {
  const plugingData = JSON.parse(JSON.stringify(NAVIGATION_ROUTES));
  const plugingDataMain = plugingData.main;
  const navItemsData = useAppSelector((state) => state.navItemData);
  const dispatch = useDispatch();
  const {
    setNavItemData,
    setAdminItemData,
    removeAdminItemData,
    removeNavItemData,
  } = navItemDataActions;

  console.log("the data in store", navItemsData);
  const templateSelector = (item: any) => {
    // recieved item would be used to modify the navigation array
    // where should the navigation array ?
    // in the state but with good fall back ?
    // in the store as an object **
    // this should make a query to the backend to modify the Nav object
    // the nav obj should come from the backend
    // and store in checkStore before fetch obiously, caching problems still apply.

    //dispatch(setNavItemData(plugingData));
    dispatch(setNavItemData({ type: "update", main: item.routeArray }));
    // dispatch(removeNavItemData());
  };
  const pluginSelector = (item: any, remove: boolean) => {
    // recieved item would be used to modify the navigation array
    // where should the navigation array ?
    // in the state but with good fall back ?
    // in the store as an object **
    // this should make a query to the backend to modify the Nav object
    // the nav obj should come from the backend
    // and store in checkStore before fetch obiously, caching problems still apply.
    if (remove) {
      console.log("hieey=====>", remove);
      dispatch(removeAdminItemData({ type: "update", admin: item }));
    } else {
      console.log("hieey=====>", remove);
      dispatch(setAdminItemData({ type: "update", admin: item }));
    }
    //dispatch(setNavItemData(plugingData));
    // dispatch(removeNavItemData());
  };

  return (
    <div className="h-fit pb-5 pt-5 space-y-10  px-2 w-full  bg-slate-100 rounded-sm">
      <div className="flex-col">
        <h2 className="text-slate-600 text-xl font-semibold pb-5">
          Web Template
        </h2>
        <div className=" grid  grid-cols-2 gap-x-3 gap-y-4">
          {allPlugins.main.map((item, i) => (
            <TemplateCard
              key={i}
              img={item?.image}
              name={item?.title}
              item={item}
              plugingDataMain={navItemsData}
              templateSelector={templateSelector}
            />
          ))}
        </div>
      </div>

      <div className="flex-col">
        <h2 className="text-slate-600 text-xl font-semibold pb-5">
          Dasboard Plugins
        </h2>
        <div className=" grid  grid-cols-3  gap-x-3 gap-y-4"></div>
      </div>
      <div className="flex-col">
        <h2 className="text-slate-600 text-xl font-semibold pb-5">
          Admin Plugins
        </h2>
        <div className=" grid  grid-cols-3  gap-x-3 gap-y-4">
          {allPlugins.admin.map((item, i) => (
            <PluginCard
              key={i}
              item={item}
              plugingDataMain={navItemsData}
              pluginSelector={pluginSelector}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

AdminDashboard.PageLayout = AdminDashboardLayout;

export default AdminDashboard;

const TemplateCard = ({
  img,
  name,
  item,
  plugingDataMain,
  templateSelector,
}: {
  img: StaticImageData;
  name: string;
  item: any;
  plugingDataMain: any;
  templateSelector: (item: any) => void;
}) => {
  // need something more stable
  const currentActive = plugingDataMain?.main[1]?.iFrameUrl == item?.tempUrl;
  //const currentActive = false;

  return (
    <div className="card relative p-5 max-w-[34rem] items-center   h-[14rem] bg-white rounded-md flex justify-between space-y-4 drop-shadow-sm ">
      {currentActive && (
        <div className="absolute top-1 right-7 flex space-x-1 items-center justify-center">
          <p className="text-xs text-primaryColor">Active</p>
          <BsAwardFill className="text-primaryColor text-xl" />
        </div>
      )}

      <div className="image flex-[60%]">
        <Image src={img.src} alt="temp" width={294} height={184} />
      </div>
      <div className="des flex-[40%]  flex flex-col space-y-3 pb-2 ">
        <div className="name">
          <p className="font-light text-2xl line-clamp-1 text-slate-400">
            {name}
          </p>
        </div>
        <div className="des">
          <p className="text-slate-400 text-xs">
            Theme Is Very Easy To Customize And It Has A Lot Of Features And A
            Very Strong Admin Panel For Any Client To M Aspect
          </p>
        </div>
        <div className="button flex space-x-2 ">
          <button className="text-white text-sm bg-primaryColor font-light rounded-full px-4  py-2">
            Live Demo
          </button>
          {!currentActive && (
            <button
              onClick={() => templateSelector(item)}
              className="text-primaryColor text-sm font-light border border-primaryColor px-4 py-2 rounded-full"
            >
              Activate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PluginCard = ({
  item,
  plugingDataMain,
  pluginSelector,
}: {
  item: any;
  plugingDataMain: any;
  pluginSelector: (item: any, remove: boolean) => void;
}) => {
  const currentlyActive = plugingDataMain?.admin?.find(
    (items) => items.name === item.name
  );

  return (
    <div className="card p-5 max-w-[22rem]  h-[11rem] bg-white rounded-md flex flex-col space-y-4 drop-shadow-sm ">
      <div className="flex items-center justify-between">
        <div className="logo bg-cyan-500 rounded-md p-3">
          <IoLogoSnapchat className="text-white" />
        </div>
        <button
          onClick={() => pluginSelector(item, Boolean(currentlyActive))}
          className=" h-[2rem] cursor-pointer drop-shadow-sm flex items-center  justify-center space-x-2 border border-stale-400 rounded-md px-2"
        >
          {currentlyActive ? (
            <>
              <TbPlugOff className="text-black" />
              <p className="text-black"> disconnect</p>
            </>
          ) : (
            <>
              {" "}
              <FaPlug className="text-black" />
              <p className="text-black"> connect</p>
            </>
          )}
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="name">
          <p className="font-semibold text-black ">{item?.name}</p>
        </div>
        <div className="des">
          <p className="text-slate-700 text-xs">
            The payment Plugin allow you to management members payments,
            functionality such as payments records, year reviews, mothly
            payments details
          </p>
        </div>
      </div>
    </div>
  );
};

const allPlugins = {
  admin: [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin",
      // Icon: DashboardIcon,
      hasSubNavItems: false,
      displayedURL: "/admin",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 2,
      name: "Contents",
      path: "/contents",
      // Icon: ContentIcon,
      hasSubNavItems: true,
      displayedURL: "/admin",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
      subNavItems: [
        {
          id: 11,
          name: "Announcement",
          path: "/admin/contents/announcement",
          // Icon: MembershipIcon,
        },
        {
          id: 12,
          name: "Library",
          path: "/admin/contents/library",
          // Icon: MembershipIcon,
        },
        {
          id: 13,
          name: "Leadership",
          path: "/admin/contents/leadership",
          // Icon: MembershipIcon,
        },
        {
          id: 14,
          name: "FAQs",
          path: "/admin/contents/faqs",
          // Icon: MembershipIcon,
        },
        {
          id: 15,
          name: "Chapters",
          path: "/admin/contents/chapters",
          // Icon: MembershipIcon,
        },
        {
          id: 16,
          name: "Speciality",
          path: "/admin/contents/speciality",
          // Icon: MembershipIcon,
        },

        {
          id: 17,
          name: "About Us",
          path: "/admin/contents/about-us",
          // Icon: MembershipIcon,
        },
      ],
    },
    {
      id: 3,
      name: "Conference",
      path: "/admin/conference",
      // Icon: ConfIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/conference",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 5,
      name: "Events",
      path: "/admin/events",
      // Icon: OrganizationIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/events",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 6,
      name: "Membership",
      path: "/admin/memberships",
      // Icon: MembershipIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/memberships",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 7,
      name: "Payments",
      path: "/admin/payments",
      // Icon: PaymentIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/payments",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      id: 8,
      name: "Donations",
      path: "/admin/donations",
      // Icon: DonationIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/donations",
      isIFrame: true,
      iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
    },
    {
      id: 9,
      name: "Trainings",
      path: "/admin/trainings",
      // Icon: TrainingIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/trainings",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 13,
      name: "E-voting",
      path: "/admin/e-voting",
      // Icon: EvotingIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/e-voting",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 14,
      name: "Settings",
      path: "/admin/settings",
      // Icon: GearIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/settings",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
    {
      id: 15,
      name: "Markerting",
      path: "/admin/markerting",
      // Icon: GearIcon,
      hasSubNavItems: false,
      displayedURL: "/admin/marketing",
      isIFrame: true,
      iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
    },
  ],
  dashboard: [],
  main: [
    {
      title: "Engineering - Temp",
      description:
        "Theme Is Very Easy To Customize And It Has A Lot Of Features And A Very Strong Admin Panel For Any Client To M Aspect",
      image: t1,
      tempUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
      routeArray: [
        {
          title: "Parent Route",
          path: "/parentRoute",
        },
        {
          title: "IHome",
          path: "/",
          displayedURL: "/",
          isIFrame: true,
          iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
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
          iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
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
    },
    {
      title: "Accounting - Temp",
      description:
        "Theme Is Very Easy To Customize And It Has A Lot Of Features And A Very Strong Admin Panel For Any Client To M Aspect",
      image: t2,
      tempUrl: "https://rainbow-monstera-003f70.netlify.app",
      routeArray: [
        {
          title: "Parent Route",
          path: "/parentRoute",
        },
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
          iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
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
          iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
        },
        {
          title: "IRoute D",
          path: "/template-d",
          displayedURL: "/template-d",
          isIFrame: true,
          iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
        },
        {
          title: "IRoute",
          displayedURL: "/app/events/daily",
          path: "/template-b",
          isIFrame: true,
          iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
        },
      ],
    },
  ],
};
const mainArry = [
  {
    title: "Engineering - Temp",
    description:
      "Theme Is Very Easy To Customize And It Has A Lot Of Features And A Very Strong Admin Panel For Any Client To M Aspect",
    image: t1,
    routeArray: [
      {
        title: "Parent Route",
        path: "/parentRoute",
      },
      {
        title: "IHome",
        path: "/",
        displayedURL: "/",
        isIFrame: true,
        iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
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
        iFrameUrl: "https://preeminent-zuccutto-747fd5.netlify.app",
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
  },
  {
    title: "Accounting - Temp",
    description:
      "Theme Is Very Easy To Customize And It Has A Lot Of Features And A Very Strong Admin Panel For Any Client To M Aspect",
    image: t2,
    routeArray: [
      {
        title: "Parent Route",
        path: "/parentRoute",
      },
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
        iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
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
        iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
      },
      {
        title: "IRoute D",
        path: "/template-d",
        displayedURL: "/template-d",
        isIFrame: true,
        iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
      },
      {
        title: "IRoute",
        displayedURL: "/app/events/daily",
        path: "/template-b",
        isIFrame: true,
        iFrameUrl: "https://rainbow-monstera-003f70.netlify.app",
      },
    ],
  },
];

/* 
make api calls 10 times 
keep a counter 1 - 10
use the result from the store first
if there is a change make change
always use info in the store if it exists
dont make any api calls after 10 calls and wait for session to end, or 5hours

*/
