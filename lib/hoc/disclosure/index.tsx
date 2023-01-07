import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Children } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

interface DisclosureProp {
    children: React.ReactNode | React.ReactNode[];
    panelClassName?: string;
}
const DisclosureComp = ({ children, panelClassName }: DisclosureProp) => {
    const childrenNode = Children.toArray(children);
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button>
                        <div
                            className={`flex w-full items-start justify-between ${panelClassName}`}
                        >
                            {childrenNode[0]}

                            <MdOutlineKeyboardArrowDown
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-[45px] w-[45px] text-primaryColor `}
                            />
                        </div>
                    </Disclosure.Button>
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
