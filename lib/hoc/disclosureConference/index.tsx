/* eslint-disable no-unused-vars */
import { MdOutlineKeyboardArrowDown, MdOutlineMoreHoriz } from 'react-icons/md';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { Children } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

interface DisclosureProp {
    children: React.ReactNode | React.ReactNode[];
    panelClassName?: string;
    openForm?: any;
    more?: boolean;
}
const DisclosureComp = ({ children, panelClassName, openForm, more = false }: DisclosureProp) => {
    const childrenNode = Children.toArray(children);
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <div className="relative flex w-full items-center justify-between ">
                        <Disclosure.Button className=" w-full">
                            <div
                                className={`flex w-full items-center justify-between  ${panelClassName}`}
                            >
                                {childrenNode[0]}

                                {more ? (
                                    <MdOutlineMoreHoriz
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-[35px] w-[35px] text-primaryColor `}
                                    />
                                ) : (
                                    <MdOutlineKeyboardArrowDown
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-[45px] w-[45px] text-primaryColor `}
                                    />
                                )}
                            </div>
                        </Disclosure.Button>
                        <div className="absolute w-[95%] ">{childrenNode[2]}</div>
                        {openForm && (
                            <FiPlusCircle
                                onClick={openForm}
                                className="absolute right-[3rem] h-[25px]  w-[25px] cursor-pointer  text-primaryColor"
                            />
                        )}
                    </div>

                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel static className="px-4 pt-4 pb-2 ">
                            {childrenNode[1]}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default DisclosureComp;
