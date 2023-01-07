import HouseIcon from '@lib/icons/dashboard/content/HouseIcon';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IStatisticCardProps {
    title: string;
    value: number;
}

function StatisticCard({ title, value }: IStatisticCardProps) {
    return (
        <div className="flex h-[8rem] min-w-[6.5rem] flex-col justify-between rounded-md bg-white p-2 shadow-[0_4px_90px_0_#A3ABB93D] md:h-[8.5rem] md:min-w-[10rem] xl:h-[9rem] xl:w-[11.875rem] xl:p-4">
            <div className="flex flex-row items-center space-x-2">
                <div className="flex items-center rounded-md bg-red-50 p-2 xl:p-3">
                    <HouseIcon className="h-[15px] w-[16px] xl:h-[19px] xl:w-[20px]" />
                </div>
                <p className="truncate text-base font-light xl:whitespace-normal">{title}</p>
            </div>
            <div className="flex flex-row justify-between">
                <span className="text-2xl">{value}</span>
                <div className="flex items-center rounded-md bg-gray-200 px-3 py-2">
                    <MdKeyboardArrowRight size={20} />
                </div>
            </div>
        </div>
    );
}

export default StatisticCard;
