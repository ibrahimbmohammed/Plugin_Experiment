import { Menu, Transition } from "@headlessui/react";
import { useAppDispatch } from "@lib/hooks/redux-hooks";
// import AccountSettingIcon from '@lib/icons/dashboard/main-top-navigation/AccountSettingsIcon';
import LogoutIcon from "@lib/icons/dashboard/sidebar/LogoutIcon";
import ProfileIcon from "@lib/icons/dashboard/sidebar/ProfileIcon";
import { domainNameBasedOnEnv } from "@lib/utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import clearDashboardSlicesAndLogoutUser from "store/utils";

interface IProfileDropDownProps {
  icon: React.ReactNode;
}

function ProfileDropDown({ icon: Icon }: IProfileDropDownProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(clearDashboardSlicesAndLogoutUser());
    router.replace(
      `${process.env.NEXT_PUBLIC_ENVIRONMENT_PROTOCOL}${domainNameBasedOnEnv(
        window.location.hostname
      )}`
    );
  };

  return (
    <div>
      <Menu as="div" className="relative z-10 inline-block text-left">
        <div>
          <Menu.Button>{Icon}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <Link href="/dashboard/profile">
                      {
                        // eslint-disable-next-line
                        <span
                          className={`${
                            active
                              ? "bg-primaryColor text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <ProfileIcon className="mr-2 fill-white" />
                          ) : (
                            <ProfileIcon className="mr-2 fill-black" />
                          )}
                          Profile
                        </span>
                      }
                    </Link>
                  </div>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                                {({ active }) => (
                                    <div>
                                        <Link href="/#">
                                            {
                                                // eslint-disable-next-line
                                                <a
                                                    className={`${
                                                        active
                                                            ? 'bg-primaryColor text-white'
                                                            : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <AccountSettingIcon className="mr-2 stroke-white" />
                                                    ) : (
                                                        <AccountSettingIcon className="mr-2 stroke-black" />
                                                    )}
                                                    Account Setting
                                                </a>
                                            }
                                        </Link>
                                    </div>
                                )}
                            </Menu.Item> */}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      type="button"
                      className={`${
                        active ? "bg-primaryColor text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={logoutUser}
                    >
                      <span>
                        {active ? (
                          <LogoutIcon className="mr-2 fill-white" />
                        ) : (
                          <LogoutIcon className="mr-2 fill-slate-800" />
                        )}{" "}
                      </span>
                      Log Out
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default ProfileDropDown;
