// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function EventIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="20"
            height="24"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.66 8H9V6H16.78C16.4973 4.99363 16.4305 3.9389 16.5839 2.9049C16.7373 1.87091 17.1074 0.880988 17.67 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V30C0 30.5304 0.210714 31.0391 0.585786 31.4142C0.960859 31.7893 1.46957 32 2 32H22C22.5304 32 23.0391 31.7893 23.4142 31.4142C23.7893 31.0391 24 30.5304 24 30V11.5C22.7335 11.5002 21.4876 11.1793 20.3789 10.5672C19.2701 9.95508 18.3347 9.07183 17.66 8V8ZM7 24H5V22H7V24ZM7 20H5V18H7V20ZM7 16H5V14H7V16ZM7 12H5V10H7V12ZM7 8H5V6H7V8ZM19 24H9V22H19V24ZM19 20H9V18H19V20ZM19 16H9V14H19V16ZM19 12H9V10H19V12Z" />
        </svg>
    );
}

EventIcon.defaultProps = {
    className: '',
};

export default EventIcon;
