/* eslint-disable jsx-a11y/control-has-associated-label */
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';
import { ISidebarSlideOverProps } from '@organisms/o-dashboard-mobile-sidebar-slideover/SidebarSlideOverProps.types';
import Sidebar from '@organisms/o-dashboard-sidebar';

export default function SidebarSlideOver({
    openSidebar,
    toggleOpenSidebar,
    children,
}: ISidebarSlideOverProps) {
    return (
        <Transition.Root show={openSidebar} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-hidden"
                onClose={toggleOpenSidebar}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="-translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-[21rem] -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="focring-offset-2 rounded-md bg-white text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
                                            onClick={toggleOpenSidebar}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <MdClose className="h-7 w-7" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex h-full w-[15rem] flex-col bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        {/* <Dialog.Title className="text-lg font-medium text-gray-900">
                                            {' '}
                                            Panel title{' '}
                                        </Dialog.Title> */}
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        {React.cloneElement(
                                            children as React.ReactElement<typeof Sidebar | any>,
                                            {
                                                toggleOpenSidebar,
                                            },
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
