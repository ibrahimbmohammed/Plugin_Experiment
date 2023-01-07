interface ISearchIconProps {
    className: string;
}

function SearchIcon({ className }: ISearchIconProps) {
    return (
        <svg
            className={className}
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.2812 15.2812L20.1562 20.1562"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.1875 16.9062C13.4504 16.9062 16.9062 13.4504 16.9062 9.1875C16.9062 4.92455 13.4504 1.46875 9.1875 1.46875C4.92455 1.46875 1.46875 4.92455 1.46875 9.1875C1.46875 13.4504 4.92455 16.9062 9.1875 16.9062Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SearchIcon;
