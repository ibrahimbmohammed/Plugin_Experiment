// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function EvotingIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18.5 15C19.6 15 20.5 14.1 20.5 13V2C20.5 0.9 19.6 0 18.5 0H8C8.3 0.6 8.5 1.3 8.5 2H18.5V13H9.5V15M13.5 5V7H7.5V20H5.5V14H3.5V20H1.5V12H0V7C0 5.9 0.9 5 2 5H13.5ZM6.5 2C6.5 3.1 5.6 4 4.5 4C3.4 4 2.5 3.1 2.5 2C2.5 0.9 3.4 0 4.5 0C5.6 0 6.5 0.9 6.5 2ZM15.5 4H17.5V12H15.5V4ZM12.5 8H14.5V12H12.5V8ZM9.5 8H11.5V12H9.5V8Z" />
        </svg>
    );
}

EvotingIcon.defaultProps = {
    className: '',
};

export default EvotingIcon;
