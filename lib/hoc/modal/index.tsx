import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

interface Props {
    title: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
    width?: string;
    className?: string;
    titleClassName?: string;
}

const Modal = ({
    title,
    isOpen,
    setIsOpen,
    children,
    width = 'w-full',
    className,
    titleClassName,
}: Props) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className={`fixed inset-0 z-[20] overflow-y-auto ${className}`}
                onClose={() => setIsOpen(false)}
            >
                <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className={`my-8 inline-block max-w-md transform rounded-md bg-white px-5 py-3 text-left align-middle shadow-xl transition-all ${
                                width || ''
                            }`}
                        >
                            <Dialog.Title className="flex items-start justify-between">
                                <span className="text-primayColor px-4">
                                    <p className={`text-primaryColor ${titleClassName}`}>{title}</p>
                                </span>
                                <button type="button" onClick={() => setIsOpen(false)}>
                                    <MdClose />
                                </button>
                            </Dialog.Title>

                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
