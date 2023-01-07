import { useState, useEffect } from 'react';
import DefaultAvatar from '@assets/jpg/unisex-avatar.jpg';
import { useAppDispatch, useAppSelector } from '@lib/hooks/redux-hooks';
// import SearchBarLarge from '@molecules/m-dashboard-top-navigation/m-search-bar-lg';
import ProfileDropDown from '@molecules/m-dashboard-top-navigation/m-profile-dropdown';
import { MdArrowDropDown } from 'react-icons/md';
import { BsBellFill } from 'react-icons/bs';
import DashboardTopNavAdminSwitch from '@organisms/o-dashboard-top-nav-admin-switch';
import NotificationModal from '@molecules/m-dashboard-notification-modal';
import { fetchAndSetNotificationsData } from '@store/notifications';

function MainTopNavigation() {
    const user = useAppSelector((state) => state.userData);
    const dispatch = useAppDispatch();
    const notification = useAppSelector((state) => state.notificationsData);
    useEffect(() => {
        dispatch(fetchAndSetNotificationsData());
    }, [dispatch]);
    const [isOpen, setIsOpen] = useState(false);

    let unread = 0;

    function notifications() {
        setIsOpen(!isOpen);
    }
    if (notification) {
        if (notification?.edges?.length > 0) {
            const read = notification?.edges?.filter(
                (notificate) => notificate?.node?.read === false,
            );
            unread = read.length;
        }
    }
    return (
        <div className="flex flex-col space-y-3">
            <div
                id="dashboard-main-top-navigation"
                className="flex flex-row items-center justify-around space-x-3"
            >
                <div className="w-[60%]">
                    {/* <SearchBarLarge placeholder="Search Dashboard" /> */}
                    <div className="text-white">.</div>
                </div>
                <div className="w-[10%]">
                    <DashboardTopNavAdminSwitch label="Admin" />
                </div>
                <div className="flex w-[10%] justify-between space-x-1">
                    <p className="flex cursor-pointer">
                        {' '}
                        <BsBellFill onClick={() => notifications()} />{' '}
                        <sup className="font-bold">{unread}</sup>
                    </p>
                </div>
                <div className="flex w-[20%] flex-row items-center justify-around space-x-3">
                    <p className="text-center text-base font-bold">
                        {user?.firstName} {user?.lastName}
                    </p>

                    <div className="ml-4 inline-flex">
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
                        <ProfileDropDown icon={<MdArrowDropDown size={35} />} />
                    </div>
                </div>
            </div>
            <NotificationModal isOpened={isOpen} setIsOpened={setIsOpen} />
        </div>
    );
}

export default MainTopNavigation;
