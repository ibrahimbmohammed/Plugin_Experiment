import { Popover, Transition } from '@headlessui/react';
import { Fragment, Children } from 'react';

interface MyPopoverProp {
    children: React.ReactNode | React.ReactNode[];
    panelClassName?: string;
}

function MyPopover({ children, panelClassName }: MyPopoverProp) {
    const childrenNode = Children.toArray(children);
    return (
        <Popover className="relative">
            <Popover.Button>{childrenNode[0]}</Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className={`absolute z-40 ${panelClassName}`}>
                    {childrenNode[1]}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default MyPopover;
