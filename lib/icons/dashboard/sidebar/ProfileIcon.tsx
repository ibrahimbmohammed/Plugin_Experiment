// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function ProfileIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.48468 13.3457C4.61707 13.3457 1.31421 13.9305 1.31421 16.2724C1.31421 18.6143 4.59611 19.22 8.48468 19.22C12.3523 19.22 15.6542 18.6343 15.6542 16.2933C15.6542 13.9524 12.3733 13.3457 8.48468 13.3457Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.48464 10.0059C11.0227 10.0059 13.0799 7.94779 13.0799 5.40969C13.0799 2.8716 11.0227 0.814453 8.48464 0.814453C5.94655 0.814453 3.88845 2.8716 3.88845 5.40969C3.87988 7.93922 5.92369 9.99731 8.45226 10.0059H8.48464Z"
                strokeWidth="1.42857"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ProfileIcon.defaultProps = {
    className: '',
};

export default ProfileIcon;
