import SearchIcon from '@lib/icons/dashboard/main-top-navigation/SearchIcon';

interface ISearchBarProps {
    placeholder: string;
}

function SearchBarSmall({ placeholder }: ISearchBarProps) {
    return (
        <div id="search-bar-small" className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="duration-400 h-full 
            w-full rounded-full bg-[#0D9589]/[0.05] py-2 px-3 pl-[4rem] 
            text-lg font-light tracking-wide text-black shadow-sm transition-all ease-in placeholder:text-lg placeholder:font-light
            placeholder:text-primaryColor focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
            />
            <SearchIcon className="absolute top-[0.55rem] left-[1rem] stroke-primaryColor" />
        </div>
    );
}

export default SearchBarSmall;
