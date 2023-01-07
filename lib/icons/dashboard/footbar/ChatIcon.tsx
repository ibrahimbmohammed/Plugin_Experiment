function ChatIcon({ className }: { className: string }) {
    return (
        <svg
            className={className}
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5714 18.0699C15.5152 21.1263 10.9898 21.7867 7.28642 20.074C6.73971 19.8539 6.29148 19.676 5.86537 19.676C4.67849 19.683 3.20117 20.8339 2.43336 20.067C1.66555 19.2991 2.81726 17.8206 2.81726 16.6266C2.81726 16.2004 2.64642 15.7602 2.42632 15.2124C0.712831 11.5096 1.37411 6.98269 4.43026 3.92721C8.3316 0.0244319 14.67 0.0244322 18.5714 3.9262C22.4797 7.83501 22.4727 14.1681 18.5714 18.0699Z"
                stroke="#706F76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.4393 11.4131H15.4483"
                stroke="#706F76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.4303 11.4131H11.4393"
                stroke="#706F76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.42128 11.4131H7.43028"
                stroke="#706F76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ChatIcon;
