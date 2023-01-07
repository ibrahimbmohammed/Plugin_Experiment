import { MdKeyboardArrowDown } from 'react-icons/md';

interface SortableColumnProps {
    prop: any;
    sortProp: any;
    desc: any;
    handleSort: any;
    children: React.ReactNode | React.ReactNode[];
}

function SortableColumn({ prop, sortProp, desc, handleSort, children }: SortableColumnProps) {
    let newSort: string | null = null;

    if (sortProp !== prop) {
        newSort = prop;
    } else if (sortProp === prop && !desc) {
        newSort = `${prop}:desc`;
    } else {
        newSort = null;
    }
    return (
        <th scope="col" className="py-3.5 px-3 text-left  first:pl-4 first:sm:pl-6">
            <button
                type="button"
                onClick={() => handleSort(newSort)}
                className="group inline-flex font-semibold"
            >
                {children}
                <span
                    className={`${
                        sortProp === prop
                            ? 'bg-gray-200 text-gray-900'
                            : 'invisible text-gray-400 group-hover:visible'
                    } ml-2 flex-none rounded`}
                >
                    <MdKeyboardArrowDown
                        className={`${desc ? 'rotate-180' : ''} mt-[0.15rem] h-5 w-5`}
                        aria-hidden="true"
                    />
                </span>
            </button>
        </th>
    );
}

export default SortableColumn;
