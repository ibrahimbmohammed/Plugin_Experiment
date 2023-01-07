import Modal from '@lib/hoc/modal';
import { Tab } from '@headlessui/react';
import { useAppSelector } from '@lib/hooks/redux-hooks';
import { Dispatch, SetStateAction } from 'react';
import NotificationDetailsCard from '@molecules/m-dashboard-notification-card';
import useWindowSize, { Size } from '@lib/hooks/useWindowSize';

interface NotificationProps {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const NotificationModal = ({ isOpened, setIsOpened }: NotificationProps) => {
    const { width }: Size = useWindowSize();
    const notification = useAppSelector((state) => state.notificationsData);
    if (notification) {
        if (notification?.edges?.length > 0) {
            const unread = notification?.edges?.filter(
                (notifications) => notifications?.node?.read === false,
            );
            if (width) {
                if (width < 480) {
                    return (
                        <div>
                            <Modal isOpen={isOpened} setIsOpen={setIsOpened} title="">
                                <div>
                                    <h1 className="mb-2 text-center font-bold text-primaryColor">
                                        Notification
                                    </h1>
                                </div>
                                <div>
                                    <div>
                                        <p className="mb-3">
                                            you have{' '}
                                            <span className="font-smallbold text-primaryColor">
                                                {unread?.length} unread{' '}
                                            </span>
                                            notifications
                                        </p>
                                        {notification?.edges?.map((notifications) => (
                                            <div key={notifications?.node?.id}>
                                                <NotificationDetailsCard
                                                    subject={notifications?.node?.subject as string}
                                                    body={notifications?.node?.email as string}
                                                    date={notifications?.node?.createdAt}
                                                    photoUrl={
                                                        notifications?.node?.user
                                                            ?.photoUrl as string
                                                    }
                                                    read={notifications?.node?.read}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    );
                }
            }
            return (
                <div>
                    <Modal isOpen={isOpened} setIsOpen={setIsOpened} title="">
                        <Tab.Group>
                            <Tab.List className="mb-4 mt-4 flex  justify-between pl-4 ">
                                <Tab
                                    className={({ selected }) =>
                                        selected
                                            ? 'font-bold text-primaryColor focus:outline-none'
                                            : ' '
                                    }
                                >
                                    Notifications
                                </Tab>
                            </Tab.List>

                            <Tab.Panels className="mb-10">
                                <Tab.Panel
                                    className="mb-10  overflow-y-auto "
                                    style={{ height: '80vh' }}
                                >
                                    {notification?.edges?.map((notifications) => (
                                        <div key={notifications?.node?.id} className="pr-3">
                                            <NotificationDetailsCard
                                                subject={notifications?.node?.subject as string}
                                                body={notifications?.node?.email as string}
                                                date={notifications?.node?.createdAt}
                                                photoUrl={
                                                    notifications?.node?.user?.photoUrl as string
                                                }
                                                read={notifications?.node?.read}
                                            />
                                        </div>
                                    ))}
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </Modal>
                </div>
            );
        }
    }
    return (
        <div>
            <Modal isOpen={isOpened} setIsOpen={setIsOpened} title="">
                <Tab.Group>
                    <Tab.List className="mb-4 mt-4 flex  justify-between pl-4 pr-8">
                        <Tab
                            className={({ selected }) =>
                                selected ? 'font-bold text-primaryColor focus:outline-none' : ' '
                            }
                        >
                            Notifications
                        </Tab>
                    </Tab.List>

                    <Tab.Panels>
                        <Tab.Panel>
                            <div>you do not have any notification</div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </Modal>
        </div>
    );
};

export default NotificationModal;
