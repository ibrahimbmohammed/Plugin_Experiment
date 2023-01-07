/* eslint-disable react/no-unused-prop-types */
import SearchIcon from '@lib/icons/dashboard/main-top-navigation/SearchIcon';

export interface ISearchBarProps {
    placeholder: string;
    className?: string;
    icon?: React.ReactNode;
    type?: string;
}

function SearchBarLarge({ placeholder, className, icon: Icon }: ISearchBarProps) {
    return (
        <div id="search-bar-large" className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className={`duration-400 h-full
            w-full rounded-full bg-[#0D9589]/[0.05] p-4 pl-[4rem] text-lg
            font-light tracking-wide text-black shadow-sm transition-all ease-in placeholder:text-lg placeholder:font-light
            placeholder:text-primaryColor focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor ${className}`}
            />
            {Icon || (
                <SearchIcon className="absolute top-[1.2rem] left-[2rem] stroke-primaryColor" />
            )}
        </div>
    );
}

export default SearchBarLarge;
