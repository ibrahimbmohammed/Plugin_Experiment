interface NotificationIconProps {
    className?: string;
}

function NotificationIcon({ className }: NotificationIconProps) {
    return (
        <svg
            className={className}
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 16.8476C15.1392 16.8476 17.7481 16.1242 18 13.2205C18 10.3188 16.1812 10.5054 16.1812 6.94511C16.1812 4.16414 13.5452 1 9.5 1C5.45477 1 2.81885 4.16414 2.81885 6.94511C2.81885 10.5054 1 10.3188 1 13.2205C1.25295 16.1352 3.86177 16.8476 9.5 16.8476Z"
                stroke="#706F76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.8889 19.8574C10.5247 21.3721 8.39672 21.3901 7.01953 19.8574"
                stroke="#706F76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

NotificationIcon.defaultProps = {
    className: '',
};

export default NotificationIcon;
