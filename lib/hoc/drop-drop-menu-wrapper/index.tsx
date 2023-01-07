import { Menu, Transition } from '@headlessui/react';
import { Fragment, Children } from 'react';

interface DropDownMenuProp {
    children: React.ReactNode | React.ReactNode[];
}

export default function DropDownMenu({ children }: DropDownMenuProp) {
    const childrenNode = Children.toArray(children);
    return (
        <div className="fixed top-16 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {childrenNode[0]}
                    </Menu.Button>
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
                    <Menu.Items>
                        <Menu.Item>{childrenNode[1]}</Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
