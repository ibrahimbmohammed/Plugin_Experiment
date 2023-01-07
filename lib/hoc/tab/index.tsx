import { Tab } from '@headlessui/react';
import { Children, Dispatch, SetStateAction } from 'react';

interface MyTabsProps {
    tabList: string[];
    tabPanel: React.ReactNode | React.ReactNode[];
    stateFunction?: Dispatch<SetStateAction<string>>;
}
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

function MyTabs({ tabList, tabPanel, stateFunction }: MyTabsProps) {
    const childrenNode = Children.toArray(tabPanel);
    return (
        <Tab.Group>
            <Tab.List className="flex items-center justify-around  ">
                {tabList.map((item) => (
                    <Tab
                        onClick={() => stateFunction && stateFunction(item)}
                        className={({ selected }) =>
                            classNames(
                                'w-full   py-2.5 text-sm font-medium leading-5',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-primaryColor focus:border-b-2 focus:border-primaryColor focus:text-primaryColor focus:outline-none',
                                selected
                                    ? 'border-b-2 border-primaryColor bg-white text-primaryColor '
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-primaryColor ',
                            )
                        }
                    >
                        {item}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                {childrenNode.map((item) => (
                    <Tab.Panel>{item}</Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default MyTabs;
